const Joi = require("joi");

const validateProposal = (proposalData) => {
    const schema = Joi.object({
        projectId: Joi.number().required(),
        userId: Joi.number().required(),
        proposal_description: Joi.string().required(),
        price: Joi.number().required(),
        proposal_description: Joi.string()
    });
    return schema.validate(proposalData);
};

const validateUpdateProposal = (proposalData) => {
    const schema = Joi.object({
        projectId: Joi.number().allow(null, ""),
        userId: Joi.number().allow(null, ""),
        status: Joi.string().allow(null, ""),
        proposal_description: Joi.string().allow(null, ""),
        price: Joi.number().allow(null, ""),
        proposal_description: Joi.string().allow(null, ""),
        orderID: Joi.string()
    });
    return schema.validate(proposalData);
};

module.exports = { validateProposal, validateUpdateProposal }