const db = require("./index");
const DataTypes = require("sequelize");

const paymentWithWallet = db.connection.define(
    "paymentWithWallet", {
        amount: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0.0,
        },
        currency: {
            type: DataTypes.STRING,
            defaultValue: "EURO",
        },
        customerId :{
            type: DataTypes.INTEGER,
        },
        customerType :{
            type: DataTypes.STRING,
        },
        status: {
            type: DataTypes.STRING,
            notEmpty: true,
            notNull: true,
            defaultValue: "SUCCESS",
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

module.exports = paymentWithWallet;