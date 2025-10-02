const Joi = require("joi");

const validateRequestCompanyCreation = (requestCompanyCreation) => {
  const schema = Joi.object({
    presidentId: Joi.number().required(),
    presidentType: Joi.string().required(),
    company_location: Joi.string().required().allow(null, ""),
    company_name: Joi.string().required().allow(null, ""),
    price: Joi.number().required().allow(null, ""),
    identity_type: Joi.string().required().allow(null, ""),
    identity_number: Joi.string().required().allow(null, ""),
    rib: Joi.string().required().allow(null, ""),
    company_country: Joi.string().allow(null, ""),
  });
  return schema.validate(requestCompanyCreation);
};

const validateRequestCompanyCreationUpdate = (requestCompanyCreation) => {
  const schema = Joi.object({
    status: Joi.string().allow(null, ""),
    company_location: Joi.string().allow(null, ""),
    company_location_status: Joi.string().allow(null, ""),
    type_company: Joi.string().allow(null, ""),
    company_name: Joi.string().allow(null, ""),
    orderID: Joi.string().allow(null, ""),
    price: Joi.number().allow(null, ""),
    identity_type: Joi.string().allow(null, ""),
    identity_front_status: Joi.string().allow(null, ""),
    company_name_status: Joi.string().allow(null, ""),
    identity_number: Joi.string().allow(null, ""),
    identity_back_status: Joi.string().allow(null, ""),
    rib: Joi.string().allow(null, ""),
    rib_status: Joi.string().allow(null, ""),
    company_country: Joi.string().allow(null, ""),
  });
  return schema.validate(requestCompanyCreation);
};

module.exports = {
  validateRequestCompanyCreation,
  validateRequestCompanyCreationUpdate,
};
