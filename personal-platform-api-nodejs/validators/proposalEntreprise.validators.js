const Joi = require("joi");


const validateProposalEntreprise = (proposalData) => {
    const schema = Joi.object({
        projectId: Joi.number().required(),
        userId: Joi.number().required(),
        proposal_description: Joi.string().required().allow(null, ""),
        price: Joi.number().required().allow(null, ""),
    });
    return schema.validate(proposalData);
};

const validateUpdateProposalEntreprise = (proposalData) => {
    const schema = Joi.object({
        status: Joi.string().allow(null, ""),
        proposal_description: Joi.string().allow(null, ""),
        price: Joi.number().allow(null, ""),
        proposal_description: Joi.string().allow(null, ""),
        orderID: Joi.string().allow(null, ""),
        
    });
    return schema.validate(proposalData);
};

module.exports = { validateProposalEntreprise, validateUpdateProposalEntreprise }