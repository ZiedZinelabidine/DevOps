const Joi = require("joi");

const validateMarketplaceProduct = (Data) => {
    const schema = Joi.object({  
        buyerId: Joi.number().required(),
        buyerType: Joi.string().required(),
        productType: Joi.string().required(),
        details: Joi.object().allow(null),
        orderID: Joi.string().required(),
        totalPrice: Joi.number().required()
    });
    return schema.validate(Data);   
}

module.exports = { validateMarketplaceProduct };