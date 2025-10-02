const db = require("./index");
const DataTypes = require("sequelize");
const AppelOffre = require("./appeloffre.model");

const AppeloffreProposal = db.connection.define(
"appeloffreProposal", {
    appeloffreId: {
        type: DataTypes.INTEGER,
        notEmpty: true,
        notNull: true,
    },
    applierId: {
        type: DataTypes.INTEGER,
        notEmpty: true,
        notNull: true,
    },
    applierType: {
        type: DataTypes.STRING,
        notEmpty: true,
        notNull: true,
    },
    proposal_description: {
        type: DataTypes.TEXT,
        notEmpty: true,
        notNull: true,
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

AppelOffre.hasMany(AppeloffreProposal, { foreignKey: 'appeloffreId', as: 'appeloffreProposals' });
AppeloffreProposal.belongsTo(AppelOffre, { foreignKey: 'appeloffreId', as: 'appelOffre' });

module.exports = AppeloffreProposal;