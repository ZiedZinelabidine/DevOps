const Recruter = require("./recruter.model");
const db = require("./index");
const DataTypes = require("sequelize");

const Recruitment = db.connection.define(
    "recruitment", {
        recruterId: {
            type: DataTypes.INTEGER,
        },
        recrutedId: {
            type: DataTypes.INTEGER,
        },
        recruted_type: {
            type: DataTypes.STRING,
        },
        nbre_transactions: {
            type: DataTypes.INTEGER,
        },
        status: {
            type: DataTypes.STRING,
            notEmpty: true,
            notNull: true,
            defaultValue: "ACTIVE"
        },
        type:{
            type: DataTypes.STRING,
            defaultValue: "RECRUITMENT"
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

Recruitment.belongsTo(Recruter, { foreignKey: 'recruterId' });


module.exports = Recruitment;