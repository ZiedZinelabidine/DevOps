const db = require("./index");
const DataTypes = require("sequelize");
const User = require("./user.model");


const Comment = db.connection.define(
    "comment", {
        userId: {
            type: DataTypes.INTEGER,
            notEmpty: true,
            notNull: true,
        },
        commentedId: {
            type: DataTypes.INTEGER,
            notEmpty: true,
            notNull: true,
        },
        CommentedType: {
            type: DataTypes.TEXT,
            notEmpty: true,
            notNull: true,
        },
        commentedUserName:{
            type: DataTypes.TEXT,
            notEmpty: true,
            notNull: true,
        },
        workId: {
            type: DataTypes.INTEGER,
            notEmpty: true,
            notNull: true,
        },
        workType: {
            type: DataTypes.TEXT,
            notEmpty: true,
            notNull: true,
        },
        stars: {
            type: DataTypes.INTEGER,
            notEmpty: true,
            notNull: true,
        },
        comment_text: {
            type: DataTypes.TEXT,
            notEmpty: true,
            notNull: true,
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.literal("CURRENT_TIMESTAMP"),
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: null,
        }
    }
);

User.hasMany(Comment, { foreignKey: 'userId' });
Comment.belongsTo(User, { foreignKey: 'userId' });
module.exports = Comment;