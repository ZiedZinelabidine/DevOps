const Joi = require("joi");


const validateAppelOffre = (appeloffreData) => {
    const schema = Joi.object({
        recruterId: Joi.number().integer().required(),
        skills: Joi.array().allow(null, ""),
        category: Joi.array().allow(null, ""),
        languages: Joi.array().allow(null, ""),
        title: Joi.string().required().allow(null, ""),
        appeloffre_description: Joi.string().allow(null, ""),
        location: Joi.string().allow(null, ""),
        status: Joi.string().allow(null, ""),
        sharesTotalPrice: Joi.number().required(),
        orderID: Joi.string().required(),
        price: Joi.number().allow(null, ""),
    });

    return schema.validate(appeloffreData);
};

const validateAppelOffreUpdate = (appeloffreData) => {
    const schema = Joi.object({
        skills: Joi.array().allow(null, ""),
        category: Joi.array().allow(null, ""),
        languages: Joi.array().allow(null, ""),
        title: Joi.string().allow(null, ""),
        appeloffre_description: Joi.string().allow(null, ""),
        location: Joi.string().allow(null, ""),
        status: Joi.string().allow(null, ""),
        price: Joi.number().allow(null, ""),
    });

    return schema.validate(appeloffreData);
};

module.exports = { validateAppelOffre, validateAppelOffreUpdate }