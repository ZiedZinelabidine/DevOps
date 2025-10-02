const Joi = require("joi");

const validateContact = (contactData) => {
    const schema = Joi.object({
        contactorId: Joi.number().integer().required(),
        contactedId: Joi.number().integer().required(),
        contactedType: Joi.string().required(),
        proposal_description: Joi.string().required()
    });

    return schema.validate(contactData);
};

module.exports = { validateContact }