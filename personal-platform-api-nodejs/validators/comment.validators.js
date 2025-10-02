const Joi = require("joi")

const validateComment = (commentData) => {
    const schema = Joi.object({
        userId: Joi.number().required(),
        commentedId: Joi.number().required(),
        CommentedType: Joi.string().required(),
        commentedUserName: Joi.string(),
        workId: Joi.number().required(),
        workType: Joi.string().required(),
        stars: Joi.number().required(),
        comment_text: Joi.string().required()
    });
    return schema.validate(commentData);
}


module.exports = { validateComment }