const Joi = require("joi");

const validateSignupUser = (userData) => {
    const schema = Joi.object({  
        email: Joi.string().email().required(),
        password: Joi.string().allow(null,""),
        name: Joi.string().required(),
        first_name: Joi.string().allow(null,""),
        googleid: Joi.string().allow(null,""),
        type_candidat: Joi.string().allow(null,""),
        method: Joi.string(),
        usernamechat: Joi.string(),
        chatid: Joi.string(),
        proxy: Joi.string().allow(null,"")

    });
    return schema.validate(userData);
};

const validateUserPatch = (userData) => {
    const schema = Joi.object({
        name: Joi.string()
            .allow(null, ""),
        first_name: Joi.string()
            .allow(null, ""),    
        email: Joi.string().email().allow(null, ""),
        telephone: Joi.string().allow(null, ""),
        chatid: Joi.string().allow(null, ""),
        job: Joi.string().allow(null, ""),
        adresse: Joi.string().allow(null, ""),
        hourly_rate: Joi.number().allow(null, ""),
        currency: Joi.string().allow(null, ""),
        languages: Joi.array().allow(null, ""),
        country_details: Joi.string().allow(null, ""),
        profile_description: Joi.string().allow(null, ""),
        services: Joi.string().allow(null, ""),
        skills: Joi.array().allow(null, ""),
        balance_details: Joi.number().allow(null, ""),
        mobile: Joi.string().allow(null, ""),
        status : Joi.string().allow(null, ""),
        rising_star_global : Joi.number().allow(null, ""), 
        password: Joi.string().allow(null, ""),
        invoicing_nbr: Joi.number().allow(null, ""),
        verificationToken: Joi.string().allow(null, ""),
        verificationExpires: Joi.date().allow(null, ""),
        resetPasswordToken:Joi.string().allow(null, ""),
        linkedin:Joi.string().allow(null, ""),
        github:Joi.string().allow(null, ""),
        resetPasswordExpires:Joi.date().allow(null, "")
    });

    return schema.validate(userData);
};

module.exports = { validateUserPatch, validateSignupUser };