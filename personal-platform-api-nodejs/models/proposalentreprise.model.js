const db = require("./index");
const DataTypes = require("sequelize");
const Project = require("./project.model");
const User = require("./user.model");

const Proposalentreprise = db.connection.define("proposalentreprise", {
    projectId: {
        type: DataTypes.INTEGER,
        notEmpty: true,
        notNull: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        notEmpty: true,
        notNull: true,
    },
    status: {
        type: DataTypes.STRING,
        notEmpty: true,
        notNull: true,
        defaultValue: "CREATED",
    },
    type: {
        type: DataTypes.STRING,
        defaultValue: "COMPOSED_FREELANCE",
    },
    proposal_description: {
        type: DataTypes.TEXT,
        notEmpty: true,
        notNull: true,
    },
    orderID: {
        type: DataTypes.STRING,
        allowNull: true,
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
        defaultValue: "EURO",
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
});

// Hooks to calculate totalPrice
Proposalentreprise.beforeCreate(async (proposal) => {
    proposal.totalPrice = parseFloat((proposal.price * 1.35).toFixed(2)); // Total price is 130% of the original price, formatted to 2 decimal places
});

Proposalentreprise.belongsTo(User, { foreignKey: 'userId' });
Proposalentreprise.belongsTo(Project, { foreignKey: 'projectId' });
User.hasMany(Proposalentreprise);
Project.hasMany(Proposalentreprise);

module.exports = Proposalentreprise;
