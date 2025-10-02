const Soldedproduct = require("../models/soldedProduct.model");
const Product = require("../models/product.model");
const User = require("../models/user.model");
const Recruter = require("../models/recruter.model");
const Entreprise = require("../models/entreprise.model");
const { findRecrutementIdFromUserId } = require("../controllers/recrutement.controller");

const db = require("../models");
const { calculateProductStar, checkjwt, getUserEntity, sendMessage, createChannel } = require("./utils");

const { Op, where } = require("sequelize");

const {
  validateSoldedproduct,
  validateSoldedProductUpdate,
} = require("../validators/soldedProduct.validators");

const { calculBalanceRecruterAndRecruted } = require("./utils");


exports.getSoldedProduct = async (req, res) => {
  const soldedproductId = req.params.id;
  try {
    const product = await Soldedproduct.findByPk(soldedproductId);
    if (!product) {
      return res.status(404).json({ error: "product not found" });
    }

    return res.status(200).json({ data: product });
  } catch (error) {
    console.error("Failed to fetch product:", error);
    return res.status(500).json({ error: "Failed to fetch product" });
  }
};

exports.getSoldedProducts = async (req, res) => {
  try {

    let user;
    const filters = {};

    if (req.query.buyerId && req.query.buyerType) {
      filters.buyerId = req.query.buyerId;
      filters.buyerType = req.query.buyerType;

      const jwt = await checkjwt(req, res, req.query.buyerId);

      if (!jwt) {
        return res.status(401).json({ error: "checkjwt not ok " });
      }

      switch (req.query.buyerType) {
        case 'ENTREPRISE':
          user = await Entreprise.findByPk(req.query.buyerId);
          break;
        case 'CANDIDAT':
          user = await User.findByPk(req.query.buyerId);
          break;
        case 'RECRUTER':
          user = await Recruter.findByPk(req.query.buyerIdd);
          break;
      }

      if (!user) {
        return res.status(500).json({ error: "Failed to fetch buyer" });
      }
    }

    if (req.query.productId) {
      filters.productId = req.query.productId;
    }
    const products  = await Soldedproduct.findAll({
      where: filters,
      include: [{
        model : Product,
        required : true 
      } ],
      order: [["createdAt", "DESC"]],
    });

    res.json({
      data: products,
    });
  } catch (ex) {
    console.error("Error fetching products:", ex);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getPublicFieldsSoldedProducts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;
    let user;
    const filters = {};

    if (req.query.buyerId && req.query.buyerType) {
      filters.buyerId = req.query.buyerId;
      filters.buyerType = req.query.buyerType;

      switch (req.query.buyerType) {
        case 'ENTREPRISE':
          user = await Entreprise.findByPk(req.query.buyerId);
          break;
        case 'CANDIDAT':
          user = await User.findByPk(req.query.buyerId);
          break;
        case 'RECRUTER':
          user = await Recruter.findByPk(req.query.buyerIdd);
          break;
      }

      if (!user) {
        return res.status(500).json({ error: "Failed to fetch buyer" });
      }
    }
    if (req.query.productId) {
      filters.productId = req.query.productId;
    }
    const { count, rows: products } = await Soldedproduct.findAndCountAll({
      attributes: ['id', 'stars', 'comment', 'stars'],
      where: filters,
      offset: offset,
      limit: limit,
      order: [["createdAt", "DESC"]],
    });

    const totalPages = Math.ceil(count / limit);
    res.json({
      data: products,
      pagination: {
        totals: count,
        totalPages: totalPages,
        currentPage: page,
      },
    });
  } catch (ex) {
    console.error("Error fetching products:", ex);
    res.status(500).json({ error: "Internal server error : " + ex });
  }
};


exports.addSoldedProduct = async (req, res) => {

  const productId = req.body.productId;
  const orderID = req.body.orderID;
  const buyerId = req.body.buyerId;
  const buyerType = req.body.buyerType;
  let transaction;

  try {

    transaction = await db.connection.transaction();
    const product = await Product.findByPk(productId, { transaction });

    if (!product) {
      await rollbackTransactionIfExists(transaction);
      console.error("Failed to fetch product");
      return res.status(500).json({ error: "Failed to fetch product" });
    }

    const soldedProductData = {
      productId: productId,
      buyerId: buyerId,
      buyerType: buyerType,
      orderID: orderID,
    };

    const { error } = validateSoldedproduct(soldedProductData);
    if (error) {
      console.error("Validation error:", error.details[0].message);
      await rollbackTransactionIfExists(transaction);
      return res.status(500).json({ error: error.details[0].message });
    }
  
    
    await actionDefaultProduct(soldedProductData, res, transaction);


  } catch (error) {
    console.error("Transaction failed:", error);
    await rollbackTransactionIfExists(transaction);
    return res.status(500).json({ error: error.details[0].message });
  }
};

exports.updateSoldedProduct = async (req, res) => {
  const soldedproductId = req.params.id;
  const addComment = req.body;

  const { error } = validateSoldedProductUpdate(addComment);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  try {
    const existingsoldedproduct = await Soldedproduct.findByPk(soldedproductId);

    if (!existingsoldedproduct) {
      return res.status(404).json({ error: "soldedproductId is not found" });
    }

    await existingsoldedproduct.update(addComment);

    const soldedProduct = await Soldedproduct.findByPk(soldedproductId);

    if (addComment) {
      calculateProductStar(soldedProduct.productId);
    }

    return res.status(200).json(soldedProduct);
  } catch (error) {
    console.error("Failed to update soldedProduct:", error);
    return res.status(500).json({ error: "Failed to update soldedProduct : " + error });
  }
};
// Helper function to rollback the transaction if it exists
const rollbackTransactionIfExists = async (transaction) => {
  if (transaction) {
    await transaction.rollback();
  }
};


const actionDefaultProduct = async (soldedProductData, res, transaction) => {
  try {
    // Create the sold product record
    const soldedProduct = await Soldedproduct.create(soldedProductData, { transaction });
   
    if (!soldedProduct) {
      console.error("Failed to create soldedProduct");
      await rollbackTransactionIfExists(transaction);
      return res.status(404).json({ error: "soldedproductId is not found" });
    }

    // Fetch the product associated with the sold product
    const product = await Product.findOne({ where: { id: soldedProductData.productId }, transaction });
   

    if (!product) {
      console.error("Product not found");
      await rollbackTransactionIfExists(transaction);
      return res.status(404).json({ error: "soldedproductId is not found" });
    }

    // Handle case where there is no recruitment
    const user = await User.findByPk(product.userId) ;

    if (!user) {
      console.error("User not found");
      await rollbackTransactionIfExists(transaction);
      return res.status(404).json({ error: "soldedproductId is not found" });
    }
    const buyer = await getUserEntity( soldedProductData.buyerType , soldedProductData.buyerId);


    // Check if a recruitment entry exists
    const recruitment = await findRecrutementIdFromUserId(product.userId);
    if (recruitment) {
      // Calculate balance for recruiter and recruited
      const result = await calculBalanceRecruterAndRecruted(product.price, recruitment.recruterId, product.userId, transaction);
    
      if (!result) {
        console.error("Failed to create soldedProduct");
        await rollbackTransactionIfExists(transaction);
        return res.status(500).json({ error: "Failed to create soldedProduct" });
      }
    
    } else {
      // Update user's balance
      const newBalance = user.balance_details + product.price;
      await User.update({ balance_details: newBalance }, { where: { id: product.userId }, transaction });
    }
     // Create a channel for communication
     const topicname = `grpProduct${product.id}soldedproduct${soldedProduct.id}`;
     
     let memberUsername;

     if(buyer.type === 'CANDIDAT' || buyer.type === 'RECRUTER') {
        memberUsername = `${buyer.type}_${buyer.id}_${buyer.name}_${buyer.first_name}_with_PRODUCER_${user.id}_${user.name}_${user.first_name}`;
     } else {
        memberUsername = `${buyer.type}_${buyer.id}_${buyer.username}_with_PRODUCER_${user.id}_${user.name}_${user.first_name}`;
    }
     const channelId = await createChannel(topicname, buyer.chatid , user.chatid, memberUsername);
        
    if (!channelId) {
         await rollbackTransactionIfExists(transaction);
         return res.status(500).json({ error: "Failed to create channel" });
     }
     // Send a message to the channel
     const message = `Hello , i just puchased your product ` + product.title;
     const sendmessage = await sendMessage(buyer.chatid, message, channelId);
     if (!sendmessage) {
         await rollbackTransactionIfExists(transaction);
         return res.status(500).json({ error: "Failed to create channel" });
     }

     await transaction.commit();
     const soldedProductCreated =  await Soldedproduct.findByPk(soldedProduct.id);
   
     const result = {
       ...soldedProductCreated.toJSON(),
       product : product
     }

     return res.status(200).json(result);

    
  } catch (error) {
    console.error("Error in actionDefaultProduct:", error);
    await rollbackTransactionIfExists(transaction);
    return res.status(404).json({ error: "soldedproductId is not found" });
  }
};
