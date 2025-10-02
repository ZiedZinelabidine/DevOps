const db = require("./index");
const DataTypes = require("sequelize");
const Dateuser = require("./dateuser.model");

const Datewithtechcontact = db.connection.define(
"datewithtechcontact", {
    contactorId:{
        type: DataTypes.INTEGER,
        notEmpty: true,
        notNull: true,
    },
    contactedId: {
        type: DataTypes.INTEGER,
        notEmpty: true,
        notNull: true,
    },
    contactedType: {
        type: DataTypes.STRING,
        notEmpty: true,
        notNull: true,
    },
    proposal_description: {
        type: DataTypes.STRING,
        notEmpty: true,
        notNull: true,
    },
    type:{
        type: DataTypes.STRING,
        defaultValue: "DATE_CONTACTOR"
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

Datewithtechcontact.belongsTo(Dateuser , { foreignKey: 'contactorId' });

module.exports = Datewithtechcontact;