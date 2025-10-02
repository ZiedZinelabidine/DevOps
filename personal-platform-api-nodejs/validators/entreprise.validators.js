const Joi = require("joi");

const validateSignupEntreprise = (userData) => {
    const schema = Joi.object({
        username: Joi.string()
            .required(),
        email: Joi.string().email().required(),
        password: Joi.string().allow(null,""),
        googleid: Joi.string().allow(null,""),
        usernamechat: Joi.string(),
        method: Joi.string(),
        chatid: Joi.string(),
        proxy: Joi.string().allow(null,"")
    });
    return schema.validate(userData);
};

const validateEntreprisePatch = (userData) => {
    const schema = Joi.object({
        username: Joi.string()
            .allow(null, ""),
        email: Joi.string().email().allow(null, ""),
        telephone: Joi.string().allow(null, ""),
        languages: Joi.array().items(Joi.string()).allow(null, ""),
        entreprise_description: Joi.string().allow(null, ""),
        country_details: Joi.string().allow(null, ""),
        chatid: Joi.string().allow(null, ""),
        mobile: Joi.string().allow(null, ""),
        status: Joi.string().allow(null, ""),
        password: Joi.string().allow(null,""),
        company_name: Joi.string().allow(null, ""),
        website: Joi.string().allow(null, ""),
        company_id: Joi.string().allow(null, ""),
        company_location: Joi.string().allow(null, ""),
        invoicing_nbr: Joi.number().allow(null, ""),
        verificationToken: Joi.string().allow(null, ""),
        verificationExpires: Joi.date().allow(null, ""),
        resetPasswordToken:Joi.string().allow(null, ""),
        resetPasswordExpires:Joi.date().allow(null, "")
    });

    return schema.validate(userData);
};

module.exports = { validateSignupEntreprise, validateEntreprisePatch };