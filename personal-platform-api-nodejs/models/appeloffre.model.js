const db = require("./index");
const Recruter = require("./recruter.model");
const DataTypes = require("sequelize");
const crypto = require("crypto");


const AppelOffre = db.connection.define(
    "appelOffre", {
        recruterId: {
            type: DataTypes.INTEGER,
            notEmpty: true,
            notNull: true,
        },
       status: {
            type: DataTypes.STRING,
            notEmpty: true,
            notNull: true,
            defaultValue: "ACTIVE",
        },
        type: {
            type: DataTypes.STRING,
            notEmpty: true,
            notNull: true,
            defaultValue: "Contrat",
        },
        orderID: {
            type: DataTypes.STRING,
            allowNull: true
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0.0,        
        },
        sharesTotalPrice: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0.0,        
        },
        category: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            defaultValue: [],
        },
        skills: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            notEmpty: true,
            notNull: true,
            defaultValue: [],
        },
        title: {
            type: DataTypes.STRING,
            notEmpty: true,
            notNull: true,
        },
        languages: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            defaultValue: [],       
        },
        location: {
            type: DataTypes.STRING,
            notEmpty: true,
            notNull: true,
            defaultValue: "REMOTE",
        },
        appeloffre_description: {
            type: DataTypes.TEXT,
            notEmpty: true,
            notNull: true,
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.literal("CURRENT_TIMESTAMP"),
        },
        display: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: () => crypto.randomBytes(32).toString("hex"),
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
AppelOffre.belongsTo(Recruter, { foreignKey: 'recruterId' });
Recruter.hasMany(AppelOffre);

module.exports = AppelOffre;