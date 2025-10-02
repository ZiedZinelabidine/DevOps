const Joi = require("joi");


const validateExchangerate = (exchangerateData) => {
    const schema = Joi.object({
        currency: Joi.string().required(),
        exchangerate: Joi.number().required(),
    });

    return schema.validate(exchangerateData);
};

const validateExchangerateUpdate = (exchangerateData) => {
    const schema = Joi.object({
        exchangerate: Joi.number().allow(null, ""),
    });

    return schema.validate(exchangerateData);
};

module.exports = { validateExchangerate, validateExchangerateUpdate }