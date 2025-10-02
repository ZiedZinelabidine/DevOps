const Joi = require("joi");

const validateSignupRecruter = (recruterData) => {
    const schema = Joi.object({  
        email: Joi.string().email().required(),
        password: Joi.string().pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%_*?&])[A-Za-z\d@$!_%*?&]{8,}$/).allow(null,""),
        name: Joi.string().required(),
        first_name: Joi.string().allow(null,""),
        googleid: Joi.string().allow(null,""),
        method: Joi.string(),
        usernamechat: Joi.string(),
        proxy: Joi.string().allow(null,""),
        chatid: Joi.string(),
    });
    return schema.validate(recruterData);
};

const validateRecruterPatch = (recruterData) => {
    const schema = Joi.object({
        name: Joi.string()
            .allow(null, ""),
        first_name: Joi.string()
            .allow(null, ""),    
        email: Joi.string().email().allow(null, ""),
        chatid:  Joi.string().allow(null, ""),
        url: Joi.string().allow(null, ""),
        adresse: Joi.string().allow(null, ""),
        currency: Joi.string().allow(null, ""),
        telephone: Joi.string().allow(null, ""),
        languages: Joi.array().items(Joi.string()).allow(null, ""),
        country_details: Joi.string().allow(null, ""),
        profile_description: Joi.string().allow(null, ""),
        balance_details: Joi.number().allow(null, ""),
        mobile: Joi.string().allow(null, ""),
        status : Joi.string().allow(null, ""),
        company_name: Joi.string().allow(null, ""),
        linkedin: Joi.string().allow(null, ""),
        company_id: Joi.string().allow(null, ""),
        company_location: Joi.string().allow(null, ""),
        invoicing_nbr: Joi.number().allow(null, ""),
        count_shared_offres: Joi.number().allow(null, ""),
        verificationToken: Joi.string().allow(null, ""),
        verificationExpires: Joi.date().allow(null, ""),
        resetPasswordToken:Joi.string().allow(null, ""),
        resetPasswordExpires:Joi.date().allow(null, "")
    });

    return schema.validate(recruterData);
};

module.exports = { validateRecruterPatch, validateSignupRecruter };