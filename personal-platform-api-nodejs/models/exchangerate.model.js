const db = require("./index");
const DataTypes = require("sequelize");

const Exchangerate = db.connection.define(
    "exchangerate", {
        currency: {
            type: DataTypes.STRING,
            defaultValue: null,
        },
        exchangerate: {
            type: DataTypes.FLOAT,
            defaultValue: null,
        }
    }, {
        paranoid: true,
    }
);
module.exports = Exchangerate;