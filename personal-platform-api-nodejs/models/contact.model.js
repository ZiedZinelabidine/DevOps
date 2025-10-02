const db = require("./index");
const DataTypes = require("sequelize");
const Recruter = require("./recruter.model");

const Contact = db.connection.define(
"contact", {
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
        defaultValue: "CONTACTOR"
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

Contact.belongsTo(Recruter , { foreignKey: 'contactorId' });

module.exports = Contact;