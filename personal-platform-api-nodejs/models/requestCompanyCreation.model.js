const db = require("./index");
const DataTypes = require("sequelize");

const RequestCompanyCreation = db.connection.define(
    "requestCompanyCreation",
    {
        presidentId: {
            type: DataTypes.INTEGER,
            notEmpty: true,
            notNull: true,
        },
        presidentType: {
            type: DataTypes.STRING,
            notEmpty: true,
            notNull: true
        },
        type: {
            type: DataTypes.STRING,
            defaultValue: "REQUEST_COMPANY_CREATION",
        },
        status: {
            type: DataTypes.STRING,
            notEmpty: true,
            notNull: true,
            defaultValue: "CREATED",
        },
        company_location: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        company_location_status: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: "VERIFICATION",
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
        identity_company_type: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        rib: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        rib_status: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: "VERIFICATION",
        },
        orderID: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        company_name: {
            type: DataTypes.TEXT,
            notEmpty: true,
            notNull: true,
        },
        company_name_status: {
            type: DataTypes.TEXT,
            allowNull: true,
            defaultValue: "VERIFICATION",
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

// Hooks to calculate totalPrice
RequestCompanyCreation.beforeCreate(async (request) => {
    if (request.price != null) {
        request.totalPrice = request.price + (request.price * 0.30); // Add 30% of , the budget
    }
});

RequestCompanyCreation.beforeUpdate(async (request) => {
    if (request.price != null) {
        request.totalPrice = request.price + (request.price * 0.30); // Recalculate totalPrice on update
    }
});

module.exports = RequestCompanyCreation;
