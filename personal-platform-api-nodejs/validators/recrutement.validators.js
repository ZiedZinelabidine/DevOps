const Joi = require("joi");

const validateCreateRecrutement = (recruterData) => {
    const schema = Joi.object({
        recrutertoken: Joi.string().required(),
        recrutedId: Joi.number().required(),
        recruted_type: Joi.string().required()
    });
    return schema.validate(recruterData);
};

module.exports = { validateCreateRecrutement };