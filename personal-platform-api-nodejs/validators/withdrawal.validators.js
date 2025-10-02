const Joi = require("joi");

const validateWithdrawal = (withdrawalData, userBalance) => {
  const schema = Joi.object({
    userId: Joi.number().integer().required(),
    typeUser: Joi.string().required(),
    nameUser: Joi.string(),
    emailUser: Joi.string(),
    totalAmount: Joi.number().required().min(0).max(userBalance).messages({
      "number.max": "The amount must be less than or equal to the balance",
    }),
    withdrawalMethodId :  Joi.number().integer().required(), 
    rate : Joi.number().integer().required(), 
    transfertPrice : Joi.number().integer().required(),
    netAmount : Joi.number().integer().required(),
    companyId : Joi.number().integer().required(),

  });
  return schema.validate(withdrawalData);
};

const validateWithdrawalUpdate = (withdrawalData) => {
  const schema = Joi.object({
    status: Joi.string().allow(null, ""),
    withdrawal_description: Joi.string().allow(null, ""),
  });
  return schema.validate(withdrawalData);
};

module.exports = { validateWithdrawal, validateWithdrawalUpdate };
