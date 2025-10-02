const db = require("./index");
const DataTypes = require("sequelize");
const Entreprise = require("./entreprise.model");
const crypto = require("crypto");


const Project = db.connection.define(
    "project", {
        entrepriseId: {
            type: DataTypes.INTEGER,
            notEmpty: true,
            notNull: true,
        },
        type: {
            type: DataTypes.STRING,
            notEmpty: true,
            notNull: true,
            defaultValue: "SHARETASK",
        },
        category: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            defaultValue: [],
        },
        status: {
            type: DataTypes.STRING,
            notEmpty: true,
            notNull: true,
            defaultValue: "ACTIVE",
        },
        languages: {
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
        currency: {
            type: DataTypes.STRING,
            notEmpty: true,
            notNull: true,
            defaultValue: "EURO",
        },
        location: {
            type: DataTypes.STRING,
            notEmpty: true,
            notNull: true,
            defaultValue: "REMOTE",
        },
        project_description: {
            type: DataTypes.TEXT,
            notEmpty: true,
            notNull: true,
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

module.exports = Project;
Project.belongsTo(Entreprise, { foreignKey: 'entrepriseId' });
Entreprise.hasMany(Project);