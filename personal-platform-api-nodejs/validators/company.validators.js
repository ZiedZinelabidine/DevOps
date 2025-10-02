const Joi = require("joi");

const validateCompany = (validateCompany) => {
    const schema = Joi.object({
        presidentId : Joi.number().integer().required(),
        presidentType: Joi.string().required(),
        company_name: Joi.string().required(),
        company_siren: Joi.string().required(),
        company_location: Joi.string().required(),
        identity_type: Joi.string().allow(null, ""),
        identity_company_type:  Joi.string().allow(null, ""),
        identity_front_status: Joi.string().allow(null, ""),
        identity_number: Joi.string().allow(null, ""),
        identity_back_status: Joi.string().allow(null, ""),
        company_country: Joi.string().allow(null, ""),
    });

    return schema.validate(validateCompany);
};


const validateUpdateCompany = (validateCompany) => {
    const schema = Joi.object({
        company_name: Joi.string().allow(null, ""),
        company_name_status:Joi.string().allow(null, ""),
        company_siren: Joi.string().allow(null, ""),
        company_location: Joi.string().allow(null, ""),
        status: Joi.string().allow(null, ""),
        company_siren_status: Joi.string().allow(null, ""),
        company_location_status: Joi.string().allow(null, ""),
        identity_type: Joi.string().allow(null, ""),
        identity_front_status: Joi.string().allow(null, ""),
        identity_number: Joi.string().allow(null, ""),
        identity_back_status: Joi.string().allow(null, ""),
        identity_company_type:  Joi.string().allow(null, ""),
        company_country: Joi.string().allow(null, ""),
    });

    return schema.validate(validateCompany);
};


module.exports = { validateUpdateCompany, validateCompany };