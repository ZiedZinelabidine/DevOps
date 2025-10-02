const Joi = require("joi");


const validateProject = (projectData) => {
    const schema = Joi.object({
        entrepriseId: Joi.number().integer().required(),
        languages: Joi.array().allow(null, ""),
        category: Joi.array().allow(null, ""),
        type: Joi.string().required().allow(null, ""),
        skills: Joi.array().allow(null, ""),
        title: Joi.string().required().allow(null, ""),
        project_description: Joi.string().allow(null, ""),
        status: Joi.string().allow(null, ""),
        sharesTotalPrice: Joi.number().required(),
        price: Joi.number().allow(null, ""),
        orderID: Joi.string().required()
    });

    return schema.validate(projectData);
};

const validateProjectUpdate = (projectData) => {
    const schema = Joi.object({
        proposals: Joi.array().items(Joi.number()).allow(null, ""),
        type: Joi.string().allow(null, ""),
        category: Joi.array().allow(null, ""),
        languages: Joi.array().allow(null, ""), 
        skills: Joi.array().allow(null, ""),
        title: Joi.string().allow(null, ""),
        project_description: Joi.string().allow(null, ""),
        status: Joi.string().allow(null, ""),
    });

    return schema.validate(projectData);
};

module.exports = { validateProject, validateProjectUpdate }