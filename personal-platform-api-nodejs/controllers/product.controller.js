const Product = require("../models/product.model");
const SoldedProduct = require("../models/soldedProduct.model");
const User = require("../models/user.model");
const Entreprise = require("../models/entreprise.model");
const { Op, where } = require("sequelize");

const {
    validateproduct,
    validateproductUpdate,
} = require("../validators/product.validators");
const { getCommentsByWork } = require("./comment.controller");
const Recruter = require("../models/recruter.model");
const MarketplaceProduct = require("../models/marketplaceProduct.model");
const { checkjwt } = require("./utils");

exports.getMarketplaceProducts = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const offset = (page - 1) * limit;
        let filters = {};

        filters.type = {
            [Op.in]: ['MARKETPLACE']
        };

        // If userType is 'CANDIDAT', filter by userId
        if (req.query.userType === 'CANDIDAT' && req.query.userId) {
            filters.userId = {
                [Op.ne]: req.query.userId // Ensure userId is different from the request
            };
        }

        if (req.query.title) {
            filters.title = {
                [Op.iLike]: `%${req.query.title}%`,
            };
        }

        if (req.query.skills) {
            const skills = req.query.skills.split(",");
            filters.skills = {
                [Op.overlap]: skills,
            };
        }

        if (req.query.category) {
            const category = req.query.category.split(",");
            filters.category = {
                [Op.overlap]: category,
            };
        }

        if (req.query.description) {
            filters.description = {
                [Op.iLike]: `%${req.query.description}%`,
            };
        }

        if (req.query.languages) {
            let languagesArray;    
            languagesArray = req.query.languages.split(',');      
            filters.languages = { [Op.in]: languagesArray }
         }


        // Fetch both Marketplace and Application Products in a single query
        const allProducts = await Product.findAll({
            where: filters,
            offset: offset,
            limit: limit
        });

        // Calculate the total count
        const count = allProducts.length;
        const totalPages = Math.ceil(count / limit);
        res.json({
            data: allProducts,
            pagination: {
                totals: count,
                totalPages: totalPages,
                currentPage: page,
            },
        });
    } catch (ex) {
        console.error("Error fetching products:", ex);
        res.status(500).json({ error: "Internal server error" });
    }
};

exports.getMyProduct = async (req, res) => {
    const productToken = req.params.token;
    const userId = req.query.userId;

    try {
        // Verify JWT
        const jwt = await checkjwt(req, res, userId);
        if (!jwt) {
            return res.status(401).json({ error: "JWT verification failed" });
        }

        const product = await Product.findOne({
            where: {
                display: productToken,
                userId: userId
            }
        });
        if (!product) {
            return res.status(404).json({ error: "product not found" });
        }

        const comments = await getCommentsByWork(product.id, 'PRODUCT');
        const result = {
            ...product.toJSON(),
            comments: comments,
        };

        return res.status(200).json({ data: result });
    } catch (error) {
        console.error("Failed to fetch product:", error);
        return res.status(500).json({ error: "Failed to fetch product: " + error });
    }

}

exports.getMyProducts = async (req, res) => {
    const userId = req.query.userId;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    let filters = {};
    filters.userId = userId ;

    if(req.query.title) {

        filters.title = {
            [Op.iLike]: `%${req.query.title}%`,
       };
    }

    try {
        // Verify JWT
        const jwt = await checkjwt(req, res, userId);
        if (!jwt) {
            return res.status(401).json({ error: "JWT verification failed" });
        }


        const { count, rows: products } = await Product.findAndCountAll({
            where: filters,
            offset: offset,
            limit: limit,
            order: [['createdAt', 'DESC']],
        });



        const results = await Promise.all(products.map(async product => {
            const comments = await getCommentsByWork(product.id, 'PRODUCT');
            return {
                ...product.toJSON(),
                comments: comments,
            };
        }));


        const totalPages = Math.ceil(count / limit);
        res.json({
            data: results,
            pagination: {
                totals: count,
                totalPages: totalPages,
                currentPage: page,
            },
        });


    } catch (error) {
        console.error("Failed to fetch product:", error);
        return res.status(500).json({ error: "Failed to fetch product: " + error });
    }

}

exports.getMyProductsWithSoldedProducts = async (req, res) => {
    const userId = req.query.userId;

    try {
        // Verify JWT
        const jwt = await checkjwt(req, res, userId);
        if (!jwt) {
            return res.status(401).json({ error: "JWT verification failed" });
        }


        const products = await Product.findAll({
            where: {
                userId: userId
            },
            include: [{
             model: SoldedProduct,
             require: true
             }],
            order: [['createdAt', 'DESC']],
        });

        res.json({
            data: products
        });


    } catch (error) {
        console.error("Failed to fetch product:", error);
        return res.status(500).json({ error: "Failed to fetch product: " + error });
    }

}


exports.getVideosTrainingProducts = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const offset = (page - 1) * limit;

        let filters = {
            type: 'VIDEOSTRAINING',
        };

        if (req.query.userType && req.query.userType === 'CANDIDAT') {
            filters.userId = {
                [Op.ne]: req.query.userId // Ensure userId is different from the request
            };
        }

        // Construct filters based on query parameters
        if (req.query.itgalaxyProduct) {
            filters.itgalaxyProduct = req.query.itgalaxyProduct;
        }


        if (req.query.status) {
            filters.status = req.query.status;
        }

        if (req.query.category) {
            filters.category = req.query.category;
        }

        if (req.query.title) {
            filters.title = {
                [Op.iLike]: `%${req.query.title}%`,
            };
        }

        if (req.query.description) {
            filters.description = {
                [Op.iLike]: `%${req.query.description}%`,
            };
        }

        if (req.query.languages) {
            let languagesArray;    
            languagesArray = req.query.languages.split(',');      
            filters.languages = { [Op.in]: languagesArray }
         }

        if (req.query.currency) {
            filters.currency = req.query.currency;
        }

        if (req.query.price) {
            const price = req.query.price.split(",");
            filters.price = {
                [Op.between]: [parseFloat(price[0] || 1), parseFloat(price[1] || Infinity)]
            };
        }

        if (req.query.skills) {
            const skills = req.query.skills.split(",");
            filters.skills = {
                [Op.overlap]: skills,
            };
        }

        // Fetch products with pagination and count
        const { count, rows: products } = await Product.findAndCountAll({
            where: filters,
            offset: offset,
            limit: limit,
            order: [['createdAt', 'DESC']],
        });

        // Retrieve and attach comments concurrently
        const results = await Promise.all(products.map(async product => {
            const comments = await getCommentsByWork(product.id, 'PRODUCT');
            return {
                ...product.toJSON(),
                comments: comments,
            };
        }));

        const totalPages = Math.ceil(count / limit);
        res.json({
            data: results,
            pagination: {
                totals: count,
                totalPages: totalPages,
                currentPage: page,
            },
        });
    } catch (ex) {
        console.error("Error fetching products:", ex);
        res.status(500).json({ error: "Internal server error" });
    }
};



exports.searchMarketplace = async (req, res) => {
    try {
        const page = parseInt(req.query.page, 10) || 1;
        const limit = parseInt(req.query.limit, 10) || 10;
        const offset = (page - 1) * limit;

        let filters = {
            type: {
                [Op.in]: ['APPLICATION', 'MARKETPLACE']
            }
        };

        // Construct filters based on query parameters
        if (req.query.itgalaxyProduct) {
            filters.itgalaxyProduct = req.query.itgalaxyProduct;
        }

        if (req.query.userId) {
            filters.userId = req.query.userId;
        }

        if (req.query.status) {
            filters.status = req.query.status;
        }

        if (req.query.category) {
            filters.category = req.query.category;
        }

        if (req.query.title) {
            filters.title = {
                [Op.iLike]: `%${req.query.title}%`,
            };
        }

        if (req.query.description) {
            filters.description = {
                [Op.iLike]: `%${req.query.description}%`,
            };
        }

        if (req.query.languages) {
            const languages = req.query.languages.split(",");
            filters.languages = {
                [Op.overlap]: languages,
            };
        }

        if (req.query.currency) {
            filters.currency = req.query.currency;
        }

        if (req.query.price) {
            const price = req.query.price.split(",").map(Number); // Assuming you might want to support a range here.
            filters.price = {
                [Op.between]: [price[0] || 1, price[1] || Infinity]
            };
        }

        if (req.query.skills) {
            const skills = req.query.skills.split(",");
            filters.skills = {
                [Op.overlap]: skills,
            };
        }

        // Fetch products with pagination and count
        const { count, rows: products } = await Product.findAndCountAll({
            where: filters,
            offset: offset,
            limit: limit,
            order: [['createdAt', 'DESC']]
        });

        // Retrieve comments for products concurrently
        const results = await Promise.all(products.map(async product => {
            const comments = await getCommentsByWork(product.id, 'PRODUCT'); // Await this call
            return {
                ...product.toJSON(), // Convert to plain object
                comments: comments
            };
        }));

        const totalPages = Math.ceil(count / limit);
        res.json({
            data: results,
            pagination: {
                totals: count,
                totalPages: totalPages,
                currentPage: page,
            },
        });
    } catch (ex) {
        console.error("Error fetching products:", ex);
        res.status(500).json({ error: "Internal server error" });
    }
};

exports.getMarketplaceProductsbyBuyerId = async (req, res) => {
    try {
        const page = parseInt(req.query.page, 10) || 1;
        const limit = parseInt(req.query.limit, 10) || 10;
        const offset = (page - 1) * limit;

        let user;

        // Check for buyerId and buyerType, and fetch the user accordingly
        if (req.query.buyerId && req.query.buyerType) {
            switch (req.query.buyerType) {
                case 'CANDIDAT':
                    user = await User.findByPk(req.query.buyerId);
                    break;
                case 'RECRUTER':
                    user = await Recruter.findByPk(req.query.buyerId);
                    break;
                case 'ENTREPRISE':
                    user = await Entreprise.findByPk(req.query.buyerId);
                    break;
                default:
                    return res.status(400).json({ error: "Invalid buyerType" });
            }

            if (!user) {
                return res.status(404).json({ error: "Buyer not found" });
            }
        } else {
            return res.status(400).json({ error: "buyerId and buyerType are required" });
        }

        // Fetching marketplace products
        const purchasedMarketPlaceProduct = await MarketplaceProduct.findAll({
            where: {
                buyerId: req.query.buyerId,
                buyerType: req.query.buyerType
            },
            offset: offset,
            limit: limit,
            order: [['createdAt', 'DESC']]
        });


        // Fetching sold products
        const purchasedSoldedProduct = await SoldedProduct.findAll({
            where: {
                buyerId: req.query.buyerId,
                buyerType: req.query.buyerType
            },
            include: [
                {
                    model: Product,
                    where: { type: 'APPLICATION' },
                    required: true
                }
            ],
            offset: offset,
            limit: limit,
            order: [['createdAt', 'DESC']]
        });

        // Process results to include comments
        const results = {
            marketplaceProducts: purchasedMarketPlaceProduct,
            applicationProducts: purchasedSoldedProduct
        };

        const count = results.marketplaceProducts.length + results.applicationProducts.length; // Total count across both product types
        const totalPages = Math.ceil(count / limit);

        res.json({
            data: results,
            pagination: {
                totals: count,
                totalPages: totalPages,
                currentPage: page,
            },
        });
    } catch (ex) {
        console.error("Error fetching products:", ex);
        res.status(500).json({ error: "Internal server error" });
    }
};

exports.getVidesTrainingsbyBuyerId = async (req, res) => {
    try {
        const page = parseInt(req.query.page, 10) || 1;
        const limit = parseInt(req.query.limit, 10) || 10;
        const offset = (page - 1) * limit;

        let user;

        // Validate buyerId and buyerType, and fetch the user accordingly
        if (req.query.buyerId && req.query.buyerType) {
            switch (req.query.buyerType) {
                case 'CANDIDAT':
                    user = await User.findByPk(req.query.buyerId);
                    break;
                case 'RECRUTER':
                    user = await Recruter.findByPk(req.query.buyerId);
                    break;
                case 'ENTREPRISE':
                    user = await Entreprise.findByPk(req.query.buyerId);
                    break;
                default:
                    return res.status(400).json({ error: "Invalid buyerType" });
            }

            if (!user) {
                return res.status(404).json({ error: "Buyer not found" });
            }
        } else {
            return res.status(400).json({ error: "buyerId and buyerType are required" });
        }

        // Fetch purchased sold video trainings
        const purchasedSoldedProductVideosTrainings = await SoldedProduct.findAll({
            where: {
                buyerId: req.query.buyerId,
                buyerType: req.query.buyerType
            },
            include: [
                {
                    model: Product,
                    where: { type: 'VIDEOSTRAINING' },
                    required: true
                }
            ],
            offset: offset,
            limit: limit,
            order: [['createdAt', 'DESC']]
        });

        // Process results to include comments
        const resultsWithComments = await Promise.all(purchasedSoldedProductVideosTrainings.map(async product => {
            const comments = await getCommentsByWork(product.id, 'PRODUCT');  // Ensure this is awaited
            return {
                ...product.toJSON(), // Convert to plain object
                comments: comments
            };
        }));

        const count = resultsWithComments.length; // Total count
        const totalPages = Math.ceil(count / limit);

        res.json({
            data: resultsWithComments,
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



exports.getPublicFieldsProducts = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const offset = (page - 1) * limit;

        const filters = {};

        if (req.query.userId) {
            filters.userId = req.query.userId;
        }

        if (req.query.status) {
            filters.status = req.query.status;
        }
        if (req.query.type) {
            filters.type = req.query.type;
        }

        if (req.query.title) {
            const title = req.query.title;
            filters.title = {
                [Op.iLike]: `%${title}%`,
            };
        }

        if (req.query.description) {
            const description = req.query.description;
            filters.description = {
                [Op.iLike]: `%${description}%`,
            };
        }

        if (req.query.languages) {
            const languages = req.query.languages.split(",");
            filters.languages = {
                [Op.overlap]: languages,
            };
        }

 
        if (req.query.price) {
            filters.price = {
                [Op.between]: [1, req.query.price]
            };
        }

        if (req.query.skills) {
            const skills = req.query.skills.split(",");
            filters.skills = {
                [Op.overlap]: skills,
            };
        }

        const { count, rows: products } = await Product.findAndCountAll({
            attributes: ['id', 'title', 'description', 'languages', 'status', 'skills', 'price', 'rising_star_global'],
            where: filters,
            offset: offset,
            limit: limit,
            order: [
                ['createdAt', 'DESC']
            ]
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

exports.getProduct = async (req, res) => {
    const productToken = req.query.token;
    try {
        const product = await Product.findOne({
            where: {
                display: productToken
            },
            include: [
                {
                    model: User,
                    attributes: [ 'id' , 'email','name', 'first_name'],  // Include recruiter's name and first name
                }, 
             ] 
        });
        if (!product) {
            return res.status(404).json({ error: "product not found" });
        }

        const comments = await getCommentsByWork(product.id, 'PRODUCT');  // Ensure this is awaited
          const result = {
            ...product.toJSON(), // Convert to plain object
            comments: comments,
        };


        return res.status(200).json({ data: result });
    } catch (error) {
        console.error("Failed to fetch product:", error);
        return res.status(500).json({ error: "Failed to fetch product: " + error });
    }
};

exports.addProduct = async (req, res) => {
    const productData = req.body;
    const { error } = validateproduct(productData);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    try {
        const product = await Product.create(productData);

        const user = await User.findByPk(product.userId);
        // Ensure the enterprise exists before updating
        if (user) {
            await user.update({
                count_sharedproduct: user.count_sharedproduct + 1
            });
        }
        return res.status(201).json(product);
    } catch (error) {
        console.error("Failed to add product:", error);
        return res.status(500).json({ error: "Failed to add product : " + error });
    }
};

exports.updateProduct = async (req, res) => {
    const id = req.params.id;
    const productData = req.body;

    const { error } = validateproductUpdate(productData);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    // Verify JWT
    const jwt = await checkjwt(req, res, productData.userId);
    if (!jwt) {
        return res.status(401).json({ error: "JWT verification failed" });
    }

    try {
        const existingproduct = await Product.findOne({
            where: {
                id: id,
                userId: productData.userId
            }
        });

        if (!existingproduct) {
            return res.status(404).json({ error: "product not found" });
        }

        await existingproduct.update(productData);

        const updatedproduct = await Product.findByPk(existingproduct.id);

        return res.status(200).json(updatedproduct);
    } catch (error) {
        console.error("Failed to update product:", error);
        return res.status(500).json({ error: "Failed to update product : " + error });
    }
};

exports.deleteProduct = async (req, res) => {
    const productToken = req.body.token;
    const userId = req.body.userId;
    try {
        const jwt = await checkjwt(req, res, userId);
        if (!jwt) {
            return res.status(401).json({ error: "JWT verification failed" });
        }
        const product = await Product.findOne({
            where: {
                display: productToken,
                userId: userId
            }
        });
        const user = await User.findByPk(product.userId);
        // Ensure the enterprise exists before updating
        if (user) {
            await user.update({
                count_sharedproduct: user.count_sharedproduct - 1
            });
        }

        const deletedproduct = await Product.destroy({
            where: { id: product.id },
            force: false,
        });
        if (deletedproduct === 0) {
            return res.status(404).json({
                success: false,
                message: "product not found or already deleted",
            });
        }
        return res.json({
            success: true,
            message: "product deleted successfully",
        });
    } catch (error) {
        console.error("Error soft deleting product:", error);
        return res.status(500).json({
            success: false,
            message: "An error occurred while soft deleting product : " + error,
        });
    }
};

exports.findPurchasedProductByToken = async (req, res) => {

    const token = req.query.token;
    const idUser = req.query.buyerId;
    const typeUser = req.query.buyerType;

    let user;

    // Fetch user based on user type
    try {
        switch (typeUser) {
            case 'CANDIDAT':
                user = await User.findByPk(idUser);
                break;
            case 'RECRUTER':
                user = await Recruter.findByPk(idUser);
                break;
            case 'ENTREPRISE':
                user = await Entreprise.findByPk(idUser);
                break;
            default:
                return res.status(400).json({ error: "Invalid user type" });
        }
    } catch (error) {
        return res.status(500).json({ error: "Failed to fetch user: " + error.message });
    }



    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }

    // Verify JWT
    const jwt = await checkjwt(req, res, idUser);
    if (!jwt) {
        return res.status(401).json({ error: "JWT verification failed" });
    }

    try {
        // Find the user by the verificationToken
        const product = await Product.findOne({
            where: {
                display: token
            },
            include: [
                {
                    model: User,
                    attributes: [ 'id' , 'email','name', 'first_name'],  // Include recruiter's name and first name
                }, 
             ]             
            });

        if (!product) {
            return res.status(404).json({ message: 'Product not found ' });
        }

        if (product.type === 'VIDEOSTRAINING' || product.type === 'APPLICATION') {

            const soldedProduct = SoldedProduct.findOne({
                where: { productId: product.id, buyerId: idUser, buyerType: typeUser }
            })

            if (!soldedProduct) {
                return res.status(401).json({ error: "User not authorized " });
            }
        }

        // If user is found, return the user data (omit sensitive fields if necessary)
        return res.status(200).json(product);
    } catch (error) {
        console.error(`Error finding product by token: ${error.message}`);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

