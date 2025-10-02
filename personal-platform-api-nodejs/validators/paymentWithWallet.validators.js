const Joi = require("joi");

const validatepaymentWithWallet = (paymentWithWalletData, customerBalance) => {
  const schema = Joi.object({
    customerId: Joi.number().integer().required(),
    customerType: Joi.string().required(),
    status: Joi.string().allow(null, ""),
    amount: Joi.number().required().min(0).max(customerBalance).messages({
      "number.max": "The amount must be less than or equal to the balance",
    }),
  });
  return schema.validate(paymentWithWalletData);
};

module.exports = { validatepaymentWithWallet };
