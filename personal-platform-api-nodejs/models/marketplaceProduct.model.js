const crypto = require("crypto");
const db = require("./index");
const DataTypes = require("sequelize");
const Product = require("./product.model");

const MarketplaceProduct = db.connection.define(
    "marketplaceProduct", {
        buyerId: {
            type: DataTypes.INTEGER,
            notEmpty: true,
            notNull: true,
        },
        buyerType: {
            type: DataTypes.STRING,
            notEmpty: true,
            notNull: true,
        },
        productType: {
            type: DataTypes.STRING, // SERVER , DATABASE , CV_GEN , INVOICING_GEN 
            notEmpty: true,
            notNull: true,
        },
        type: {
            type: DataTypes.STRING, 
            notEmpty: true,
            notNull: true,
            defaultValue: 'MARKETPLACEPRODUCT'
        },
        details: {
            type: DataTypes.JSON, 
            notEmpty: true,
            notNull: true,
            defaultValue: {}
        },
        orderID: {
            type: DataTypes.STRING,
            allowNull: true
        },
        totalPrice: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0.0,
        },
        currency: {
            type: DataTypes.STRING,
            defaultValue: null,
            defaultValue: 'EUR'
        },
        display: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: () => crypto.randomBytes(32).toString("hex"),
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.literal('CURRENT_TIMESTAMP')
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: null
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

module.exports = MarketplaceProduct;
