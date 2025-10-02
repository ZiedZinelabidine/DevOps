const { Op } = require("sequelize");
const MarketplaceProduct = require("../models/marketplaceProduct.model");
const { validateMarketplaceProduct } = require("../validators/marketplaceProduct.validators");
const { checkjwt } = require("./utils");
const AWS = require('aws-sdk');
const User = require("../models/user.model");
const Recruter = require("../models/recruter.model");
const Entreprise = require("../models/entreprise.model");
require('dotenv').config();

let s3Config = { 
    region: `${process.env.REGION}` // e.g., 'us-east-1'
  };
  
  // Conditionally add credentials when working in a local environment
  if (`${process.env.MODE}` === 'local') {
    s3Config.credentials = {
        accessKeyId: `${process.env.ACCESSKEYID}`,
        secretAccessKey: `${process.env.SECRETACCESSKEY}`,
    };
  }

  
const lambda = new AWS.Lambda(s3Config);


exports.addMarketplaceProduct = async (req, res) => {
    const marketplaceProductData = req.body;
    const { error } = validateMarketplaceProduct(marketplaceProductData);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    const jwt= await checkjwt(req, res, marketplaceProductData.buyerId);
    if(!jwt){
        return res.status(401).json({ error: "checkjwt not ok " });

    }

    try {
        let result;
        const marketplaceProduct = await MarketplaceProduct.create(marketplaceProductData);

        switch (marketplaceProduct.productType) {
            case 'SERVER':
                result = await actionProductServer(marketplaceProduct);

            case 'DATABASE':
                result = await actionProductDatabase(marketplaceProduct);

        }

        if (!marketplaceProduct) {
            return res.status(500).json({ error: "Failed to add product : " + error });

        }

        return res.status(201).json(marketplaceProduct);
    } catch (error) {
        console.error("Failed to add product:", error);
        return res.status(500).json({ error: "Failed to add product : " + error });
    }
};

const actionProductServer = async (marketplaceProduct) => {

    const params = {
        FunctionName: `${process.env.LAMBDA_CREATE_SERVER}`,
        InvocationType: 'RequestResponse', // or 'Event' for async invocation
        Payload: JSON.stringify({
            TYPE: marketplaceProduct.details.TYPE,
            OS: marketplaceProduct.details.OS,
            USER: marketplaceProduct.details.USER,
            PASSWORD: marketplaceProduct.details.PASSWORD,
            RESERVATION_TIME: marketplaceProduct.details.RESERVATION_TIME,
            PRODUCT_ID: marketplaceProduct.id.toString(),

        })
    };
    try {
        const response = await lambda.invoke(params).promise();
       if (response) {
            return response;
        } else {

            return false;
        }

    } catch (error) {
        console.log('Error during creating instance', error);
        return false;
    }
}


const actionProductDatabase = async (marketplaceProduct) => {

    const params = {
        FunctionName: `${process.env.LAMBDA_CREATE_DATABASE}`,
        InvocationType: 'RequestResponse', // or 'Event' for async invocation
        Payload: JSON.stringify({

            RESSOURCE : marketplaceProduct.details.RESSOURCE,
            TYPE : marketplaceProduct.details.TYPE,
            VERSION : marketplaceProduct.details.VERSION,
            RESSOURCE_CAPACITY : marketplaceProduct.details.RESSOURCE_CAPACITY,
            RESSOURCE_STORAGE : marketplaceProduct.details.RESSOURCE_STORAGE,
            RESSOURCE_PASSWORD : marketplaceProduct.details.RESSOURCE_PASSWORD,
            RESSOURCE_USERNAME : marketplaceProduct.details.RESSOURCE_USERNAME,
            RESSOURCE_DATABASE_NAME : marketplaceProduct.details.RESSOURCE_DATABASE_NAME,
            RESERVATION_TIME : marketplaceProduct.details.RESERVATION_TIME,
            PRODUCT_ID : marketplaceProduct.id.toString(),
        })
    };

    try {
        const response = await lambda.invoke(params).promise();

        if (response) {

            return response;
        } else {

            return false;
        }

    } catch (error) {
        return false;
    }
}


exports.getMarketplaceProduct = async (req, res) => {
    const marketplaceProductToken = req.query.token;
    const idUser = req.query.buyerId;
    const typeUser = req.query.buyerType;

    let result;
    let user;
    let aws_details;
    let marketplaceProduct;

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

    // Fetch the marketplace product
    try {
        marketplaceProduct = await findByToken(marketplaceProductToken,typeUser,idUser);
      
        if (!marketplaceProduct) {
            return res.status(404).json({ error: "Marketplace product not found with the provided token" });
        }
    } catch (error) {
        console.error("Error finding product by token:", error);
        return res.status(500).json({ error: "Failed to fetch marketplace product: " + error.message });
    }

    // Fetch AWS details based on product type
    try {
        switch (marketplaceProduct.productType) {
            case 'SERVER':
                aws_details = await getDetailsProductServer(marketplaceProduct.id.toString()); // Assuming id is used
                break;

            case 'DATABASE':
                aws_details = await getDetailsProductDatabase(marketplaceProduct.id.toString()); // Assuming id is used
                break;

            default:
                aws_details = null; // Handle any other types if needed
                break;
        }

        result = {
            ...marketplaceProduct.toJSON(),
            aws_details: aws_details
        };

        return res.status(200).json({ data: result });
    } catch (error) {
        console.error("Failed to fetch AWS details for marketplace product:", error);
        return res.status(500).json({ error: "Failed to fetch marketplace product details: " + error.message });
    }
};


const getDetailsProductServer = async (id) => {

    const params = {
        FunctionName: `${process.env.LAMBDA_GET_SERVER_DETAILS}`,
        InvocationType: 'RequestResponse', // or 'Event' for async invocation
        Payload: JSON.stringify({

            PRODUCT_ID: id

        })
    };
    try {
        const response = await lambda.invoke(params).promise();
        if (response.StatusCode === 200) {
            const responseObject = JSON.parse(response.Payload);

            return responseObject;
        } else {

            return false;
        }

    } catch (error) {
        console.error("Failed to fetch marketplaceProduct:", error);
        return false;
    }
}

const getDetailsProductDatabase = async (id) => {

    const params = {
        FunctionName: `${process.env.LAMBDA_GET_DATABASE_DETAILS}`,
        InvocationType: 'RequestResponse', // or 'Event' for async invocation
        Payload: JSON.stringify({

            PRODUCT_ID: id

        })
    };
    try {
        const response = await lambda.invoke(params).promise();

        if (response.StatusCode === 200) {
            const responseObject = JSON.parse(response.Payload);


            return responseObject;
        } else {

            return false;
        }

    } catch (error) {
        console.error("Failed to fetch marketplaceProduct:", error);
        return false;
    }
}

const findByToken = async function (marketplaceProductToken,typeUser,idUser) {
    try {
        const product = await MarketplaceProduct.findOne({
            where : { display : marketplaceProductToken ,buyerId : idUser  , buyerType : typeUser  }
        })

        return product;
    } catch (error) {
        console.error("Error finding marketplace product by token:", error);
        return false;

    }
};