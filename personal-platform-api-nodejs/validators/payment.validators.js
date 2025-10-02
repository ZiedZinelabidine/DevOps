const Joi = require("joi");

const validatePaymentIntents = (paymentData) => {
    const schema = Joi.object({
        amount: Joi.number().required(),
    });

    return schema.validate(paymentData);
};
module.exports = { validatePaymentIntents}