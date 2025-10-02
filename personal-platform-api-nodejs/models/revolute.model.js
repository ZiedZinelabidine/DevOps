const crypto = require("crypto");
const db = require("./index");
const DataTypes = require("sequelize");

const Revolute = db.connection.define(
    "revolute", {
        refresh_token: {
            type: DataTypes.STRING,
        },
        access_token: {
            type: DataTypes.STRING,

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


module.exports = Revolute;