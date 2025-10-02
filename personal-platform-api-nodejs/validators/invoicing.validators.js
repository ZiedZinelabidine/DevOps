const Joi = require("joi");

const validateInvoicing = (invoicingData) => {
    const schema = Joi.object({
        type: Joi.string().allow(null,""),
        payerId: Joi.number().required(),
        payerType: Joi.string().required(),
        payerName: Joi.string().required(),
        payerEmail: Joi.string().required(),
        targetProductId: Joi.number().required(),
        targetProductType: Joi.string().required(),
        orderId: Joi.string().required(),
        price: Joi.number().required(),
        paymentType: Joi.string().required(),
        status:Joi.string().allow(null,""),
        invoicingDescription: Joi.string().required(),  
        payerCountryDetails: Joi.string().allow(null,""),    
    });
    return schema.validate(invoicingData);
};

const validateInvoicingUpdate = (invoicingData) => {
    const schema = Joi.object({
        status: Joi.string().allow(null, ""),
    });
    return schema.validate(invoicingData);
};

module.exports = { validateInvoicing, validateInvoicingUpdate };