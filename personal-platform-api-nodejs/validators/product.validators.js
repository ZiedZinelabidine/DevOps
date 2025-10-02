const Joi = require("joi");

// Validation for Product Creation
const validateproduct = (productData) => {
    const schema = Joi.object({
        userId: Joi.number().required(),
        title: Joi.string().required(),
        type: Joi.string().required(),
        description: Joi.string().required(),
        languages: Joi.string().required(),
        category: Joi.array().allow(null, ""),
        skills: Joi.array().allow(null, ""),
        price: Joi.number().required(),
        repo: Joi.string().allow(null, ""),
        chapters: Joi.object().allow(null).pattern(Joi.string(), Joi.object({
            title: Joi.string().required(),
            description: Joi.string().allow("", null).optional(),
        })).required(),
        sharesTotalPrice: Joi.number().required(),
        orderID: Joi.string().required()
    });

    return schema.validate(productData);
};

// Validation for Product Update
const validateproductUpdate = (productData) => {
    const schema = Joi.object({
        userId: Joi.number().required(),
        title: Joi.string().allow(null, ""),
        description: Joi.string().allow(null, ""),
        status: Joi.string().allow(null, ""),
        skills: Joi.array().allow(null, ""),
        category: Joi.array().allow(null, ""),
        languages: Joi.string().allow(null, ""),
        price: Joi.number().allow(null, ""),
        repo: Joi.string().allow(null, ""),
        chapters: Joi.object().allow(null).pattern(Joi.string(), Joi.object({
            title: Joi.string().allow(null, "").optional(),
            description: Joi.string().allow(null, "").optional(),
        })).optional() // Validate chapters as an object for updates
    });
    
    return schema.validate(productData);
};

module.exports = { validateproduct, validateproductUpdate };
