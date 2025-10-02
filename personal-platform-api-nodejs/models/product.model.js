const crypto = require("crypto");
const db = require("./index");
const DataTypes = require("sequelize");
const User = require("./user.model");

const Product = db.connection.define(
    "product", {
        userId: {
            type: DataTypes.INTEGER,
            notEmpty: true,
            notNull: true,
        },
        type: {
            type: DataTypes.STRING, 
            notEmpty: true,
            notNull: true,
            defaultValue: 'MARKETPLACE'
        },
        category: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            defaultValue: [],
        },
        title: {
            type: DataTypes.STRING,
            notEmpty: true,
            notNull: true,
        },
        description: {
            type: DataTypes.TEXT,
            notEmpty: true,
            notNull: true,
        },
        languages: {
            type: DataTypes.STRING,
            notEmpty: true,
            notNull: true,     
            defaultValue: 'English'
        },
        repo: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        status: {
            type: DataTypes.STRING,
            notEmpty: true,
            notNull: true,
            defaultValue: 'OPENED'
        },
        skills: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            notEmpty: true,
            notNull: true,
        },
        orderID: {
            type: DataTypes.STRING,
            allowNull: true
        },
        sharesTotalPrice: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0.0,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0.0,
        },
        totalPrice: {
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
        rising_star_global: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0.0,
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
        chapters: {
            type: DataTypes.JSON,
            allowNull: true,
            defaultValue: {}
        },
    }, {
        paranoid: true,
    }
);

// Hooks to calculate totalPrice
Product.beforeCreate(async (product) => {
    if (product.price != null) {
        product.totalPrice = parseFloat((product.price * 1.35).toFixed(2));
    }
});
Product.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Product);

module.exports = Product;
