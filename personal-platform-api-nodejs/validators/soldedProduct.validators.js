const Joi = require("joi");


const validateSoldedproduct = (soldedproductData) => {
    const schema = Joi.object({
        productId: Joi.number().required(),
        buyerId: Joi.number().required(),
        buyerType: Joi.string().required(),
        orderID: Joi.string().allow(null, "")
    });

    return schema.validate(soldedproductData);
};

const validateSoldedProductUpdate = (soldedproductData) => {
    const schema = Joi.object({
        orderID: Joi.string().allow(null, ""),
        soldedProduct_description: Joi.string().allow(null, ""),
    });

    return schema.validate(soldedproductData);
};

module.exports = { validateSoldedProductUpdate , validateSoldedproduct }