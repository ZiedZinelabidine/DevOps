const Joi = require("joi");


const validateSessiontrainngProposal = (sessiontrainngProposalData) => {
    const schema = Joi.object({
        productId: Joi.number().required(),
        buyerId: Joi.number().required(),
        buyerType: Joi.string().required(),
        proposal_description: Joi.string().required().allow(null, ""),
        price: Joi.number().required().allow(null, ""),
        currency: Joi.string().required().allow(null, ""),
        nbr_person: Joi.number().required().allow(null, ""),
        type: Joi.string().required().allow(null, ""),


    });
    return schema.validate(sessiontrainngProposalData);
};

const validateUpdateSessiontrainngProposal = (sessiontrainngProposalData) => {
    const schema = Joi.object({
        status: Joi.string().allow(null, ""),
        proposal_description: Joi.string().allow(null, ""),
        orderID: Joi.string().allow(null, ""),
        price: Joi.number().allow(null, ""),
        currency: Joi.string().allow(null, ""),
        nbr_person: Joi.number().allow(null, ""),

    });
    return schema.validate(sessiontrainngProposalData);
};

module.exports = { validateSessiontrainngProposal, validateUpdateSessiontrainngProposal }