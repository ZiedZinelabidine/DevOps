const Accounting = require("./accounting.model");
const db = require("./index");
const DataTypes = require("sequelize");

const AccountingJob = db.connection.define(
  "accountingJob",
  {
    accountingFolderId: {
      type: DataTypes.INTEGER,
      notEmpty: true,
      notNull: true,
    },
    accountingFolderType: {
      type: DataTypes.STRING,
      notEmpty: true,
      notNull: true
    },
    accountingId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
   status: {
      type: DataTypes.STRING,
      notEmpty: true,
      notNull: true,
      defaultValue: "IN_PROGRESS",
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
      notEmpty: true,
      notNull: true,
      defaultValue: "EURO",
    },
    comment: {
        type: DataTypes.TEXT,
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
  },
  {
    paranoid: true,
  }
);


AccountingJob.belongsTo(Accounting, { foreignKey: 'accountingId' });
Accounting.hasMany(AccountingJob);

module.exports = AccountingJob;
