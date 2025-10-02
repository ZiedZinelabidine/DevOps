const db = require("./index");
const crypto = require("crypto");
const DataTypes = require("sequelize");
const Product = require("./product.model");

const SoldedProduct = db.connection.define(
"soldedProduct", {
    productId: {
        type: DataTypes.INTEGER,
        notEmpty: true,
        notNull: true,
    },
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
    type:{
        type: DataTypes.STRING,
        defaultValue: "SOLDEDPRODUCT"
    },
    orderID: {
        type: DataTypes.STRING,
        allowNull: true
    },
    soldedProduct_description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    display: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: () => crypto.randomBytes(32).toString("hex"),
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
SoldedProduct.belongsTo(Product, { foreignKey: 'productId' });
Product.hasMany(SoldedProduct);

module.exports = SoldedProduct;