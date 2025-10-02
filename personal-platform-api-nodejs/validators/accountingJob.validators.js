const Joi = require("joi");

const validateAccountingJob = (validateAccountingJob) => {
    const schema = Joi.object({
        accountingFolderId : Joi.number().integer().required(),
        accountingFolderType: Joi.string().required(),
        accountingId: Joi.number().required() ,
        price: Joi.number().integer().required(),
    });

    return schema.validate(validateAccountingJob);
};


const validateUpdateAccountingJob = (validateAccountingJob) => {
    const schema = Joi.object({
        status: Joi.string().allow(null, ""),
        comment:  Joi.string().allow(null, ""),
        companyBINcreated:  Joi.number().allow(null, ""),
    });

    return schema.validate(validateAccountingJob);
};


module.exports = { validateAccountingJob, validateUpdateAccountingJob };