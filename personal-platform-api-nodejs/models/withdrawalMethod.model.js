const db = require("./index");
const DataTypes = require("sequelize");

const WithdrawalMethod = db.connection.define(
    "withdrawal_method", {
        userId: {
            type: DataTypes.INTEGER,
            notEmpty: true,
            notNull: true,
        },
        typeUser: {
            type: DataTypes.STRING,
            notEmpty: true,
            notNull: true,
            defaultValue: "CANDIDAT", // RECRUTER // ACCOUNTING
        },
        nameUser : {
            type: DataTypes.STRING,
        },
        emailUser : {
            type: DataTypes.STRING,
        },
        revolute_counterpartieId: {
            type: DataTypes.STRING,
            notEmpty: true,
            notNull: true,
        },
        revolute_counterpartie_accountId: {
            type: DataTypes.STRING,
            notEmpty: true,
            notNull: true,
        },
        bank_country:{
            type: DataTypes.STRING,
            allowNull: true
        },
        iban:{
            type: DataTypes.STRING,
            allowNull: true
        },
        owner_bank_account:{
            type: DataTypes.STRING,
            allowNull: true
        },        
        status: {
            type: DataTypes.STRING,
            notEmpty: true,
            notNull: true,
            defaultValue: "VERIFICATION"
        },
        control_comment: {
            type: DataTypes.STRING,
            allowNull: true
        },
        currency: {
            type: DataTypes.STRING,
            allowNull: true
        },
        withdrawalMethod_description: {
            type: DataTypes.STRING,
            allowNull: true
        },       
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.literal("CURRENT_TIMESTAMP"),
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: null,
        },
        deletedAt: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: null,
        },
    });

module.exports = WithdrawalMethod;