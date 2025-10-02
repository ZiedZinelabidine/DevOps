const db = require("./index");
const DataTypes = require("sequelize");


const Invoicing = db.connection.define(
    "invoicing", {
        type: {
            type: DataTypes.STRING,
            notEmpty: true,
            notNull: true,
            defaultValue: "Paiement",
        },
        payerId: {
            type: DataTypes.INTEGER,
            notEmpty: true,
            notNull: true,
        },
        payerType: {
            type: DataTypes.STRING,
            notEmpty: true,
            notNull: true,
        },
        payerName: {
            type: DataTypes.STRING,
            notEmpty: true,
            notNull: true,
        },
        payerEmail: {
            type: DataTypes.STRING,
            notEmpty: true,
            notNull: true,
        },
        payerCountryDetails :{
            type: DataTypes.STRING,
            notEmpty: true,
            notNull: true,
        },
        targetProductId: {
            type: DataTypes.INTEGER,
            notEmpty: true,
            notNull: true,
        },
        targetProductType: {
            type: DataTypes.STRING,
            notEmpty: true,
            notNull: true,
        },
        invoicingDescription: {
            type: DataTypes.STRING,
            notEmpty: true,
            notNull: true,
        },
        status: {
            type: DataTypes.STRING,
            notEmpty: true,
            notNull: true,
            defaultValue: "SUCCESS",
        },
        paymentType: {
            type: DataTypes.STRING,
            notEmpty: true,
            notNull: true,
            defaultValue: "card",
        },
        orderId: {
            type: DataTypes.STRING,
            allowNull: true
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0.0,
        },
        currency: {
            type: DataTypes.STRING,
            notEmpty: true,
            notNull: true,
            defaultValue: "EURO",
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
    }, {
        paranoid: true,
    }
);


module.exports = Invoicing;