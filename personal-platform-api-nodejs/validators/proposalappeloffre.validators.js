const Joi = require("joi");


const validateProposalAppelOffre = (proposalAppeloffreData) => {
    const schema = Joi.object({
        appeloffreId: Joi.number().integer().required(),
        applierId: Joi.number().integer().required(),
        applierType: Joi.string().required(),
        proposal_description: Joi.string().required(),
    });

    return schema.validate(proposalAppeloffreData);
};

module.exports = { validateProposalAppelOffre }