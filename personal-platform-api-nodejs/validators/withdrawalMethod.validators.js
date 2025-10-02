const Joi = require("joi");

const validateWithdrawalMethod = (withdrawalMethodData) => {
    const schema = Joi.object({
        userId: Joi.number().integer().required(),
        typeUser: Joi.string().required(),
        nameUser: Joi.string().required(),
        emailUser: Joi.string().required(),
        iban: Joi.string().required(),
        bank_country: Joi.string().required(),
        owner_bank_account: Joi.string().required(),
        currency: Joi.string().required(),

    });
    return schema.validate(withdrawalMethodData);
};

const validateWithdrawalMethodUpdate = (withdrawalMethodData) => {
    const schema = Joi.object({
        revolute_counterpartieId: Joi.string().allow(null, ""),
        revolute_counterpartie_accountId: Joi.string().allow(null, ""),
        status: Joi.string().allow(null, ""),
        iban: Joi.string().allow(null, ""),
        bank_country: Joi.string().allow(null, ""),
        withdrawalMethod_description: Joi.string().allow(null, ""),
        owner_bank_account: Joi.string().allow(null, ""),
        control_comment: Joi.string().allow(null, ""),
    });
    return schema.validate(withdrawalMethodData);
};

module.exports = { validateWithdrawalMethod, validateWithdrawalMethodUpdate };