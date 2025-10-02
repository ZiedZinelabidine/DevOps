const db = require("./index");
const DataTypes = require("sequelize");

const Company = db.connection.define(
  "company", {
  presidentId: {
    type: DataTypes.INTEGER,
    notEmpty: true,
    notNull: true,
  },
  presidentType: {
    type: DataTypes.STRING,
    notEmpty: true,
    notNull: true,
  },
  type: {
    type: DataTypes.STRING,
    defaultValue: "COMPANY"
  },
  type_company: {
    type: DataTypes.STRING,
    notEmpty: true,
    notNull: true,
    defaultValue: "SASU",
  },
  identity_type: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  identity_company_type: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  company_country: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  identity_front_status: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "VERIFICATION",
  },
  identity_number: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  identity_back_status: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "VERIFICATION",
  },
  company_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  company_name_status: {
    type: DataTypes.TEXT,
    allowNull: true,
    defaultValue: "VERIFICATION",
  },
  company_siren: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  company_siren_status: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "VERIFICATION"
  },
  company_location: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  company_location_status: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "VERIFICATION"
  },
  status: {
    type: DataTypes.STRING,
    notEmpty: true,
    notNull: true,
    defaultValue: "VERIFICATION"
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

module.exports = Company;