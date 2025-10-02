const db = require("./index");
const { DataTypes } = require("sequelize");
const WithdrawalMethod = require("./withdrawalMethod.model");
const Company = require("./company.model");

const Withdrawal = db.connection.define("withdrawal", {
    withdrawalMethodId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    companyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    nameUser: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    emailUser: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    typeUser: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "CANDIDAT",
    },
    totalAmount: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    feeItGalaxy: {
        type: DataTypes.FLOAT,
    },
    rate: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0.0,
    },
    netAmount: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0.0,
    },
    transfertPrice: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0.0,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "SUCCESS",
    },
    revoluteId: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    withdrawal_description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
    },
}, {
    paranoid: true,
});

Withdrawal.belongsTo(WithdrawalMethod, { foreignKey: 'withdrawalMethodId' });
Withdrawal.belongsTo(Company, { foreignKey: 'companyId' });



Withdrawal.beforeCreate(async (withdrawal) => {
    if (withdrawal.totalAmount) {
        withdrawal.feeItGalaxy = parseFloat((withdrawal.totalAmount * 0.20).toFixed(2));
    }
});

module.exports = Withdrawal;
