const crypto = require("crypto");
const db = require("./index");
const DataTypes = require("sequelize");

const Accounting = db.connection.define(
    "accounting", {
        name: {
            type: DataTypes.STRING,
            set: function(val) {
                this.setDataValue("name", val.toLowerCase());
            },
            notEmpty: true,
            notNull: true,
        },
        first_name: {
            type: DataTypes.STRING,
            set: function(val) {
                this.setDataValue("first_name", val.toLowerCase());
            },
            notEmpty: true,
            notNull: true,
        },
        email: {
            type: DataTypes.STRING,
            set: function(val) {
                this.setDataValue("email", val.toLowerCase());
            },
            isEmail: true,
            notEmpty: true,
            notNull: true,
            unique: true,
        },
        chatid: {
            type: DataTypes.STRING,
            notEmpty: true,
            notNull: true,
            unique: true,
        },
        verificationToken: {
            type: DataTypes.STRING,
            allowNull: true,
          },
        verificationExpires: {
            type: DataTypes.DATE,
            allowNull: true,
         },
        resetPasswordToken: {
            type: DataTypes.STRING,
            allowNull: true,
          },
        resetPasswordExpires: {
            type: DataTypes.DATE,
            allowNull: true,
          },         
        currency: {
            type: DataTypes.STRING,
            defaultValue: "EURO"
        },
        languages: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            defaultValue: [],       
        },
        usernamechat: {
            type: DataTypes.STRING,
            notEmpty: true,
            notNull: true,
            unique: true,
        },
        country_details: {
            type: DataTypes.STRING,
            notEmpty: true,
            notNull: true,
        },
        profile_description: {
            type: DataTypes.TEXT,
        },
        balance_details: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0.0,
        },
        stripe_id: {
            type: DataTypes.STRING,
        },
        status: {
            type: DataTypes.STRING,
            notEmpty: true,
            notNull: true,
            defaultValue: "ACTIVE"
        },
        type: {
            type: DataTypes.STRING,
            defaultValue: "ACCOUNTING",
        },
        folder_nbr_inprogress:{
            type: DataTypes.INTEGER,
            defaultValue: 0,

        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.literal('CURRENT_TIMESTAMP')
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: null
        },
        deletedAt: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: null,
        },
        password: {
            type: DataTypes.STRING,
            get() {
                return () => this.getDataValue("password");
            },
            allowNull: false        },
        salt: {
            type: DataTypes.STRING,
            notEmpty: true,
            notNull: true,
            get() {
                return () => this.getDataValue("salt");
            },
        display: {
                type: DataTypes.STRING,
                allowNull: false,
                defaultValue: () => crypto.randomBytes(32).toString("hex"),
            },
        },
    }, {
        paranoid: true,
    }
);

Accounting.generateSalt = function() {
    return crypto.randomBytes(16).toString("base64");
};
Accounting.encryptPassword = function(plainText, salt) {
    return crypto
        .createHash("RSA-SHA256")
        .update(plainText)
        .update(salt)
        .digest("hex");
};

const setSaltAndPassword = (accounting) => {
    if (accounting.changed("password")) {
        accounting.salt = Accounting.generateSalt();
        accounting.password = Accounting.encryptPassword(accounting.password(), accounting.salt());
    }
};

Accounting.prototype.verifyPassword = function(enteredPassword) {

    const salt = this.salt();
    const password = this.password();

    if (!salt || !password) {
        return false;
    }
    return Accounting.encryptPassword(enteredPassword, salt) === password;
};

Accounting.beforeCreate(setSaltAndPassword);
Accounting.beforeUpdate(setSaltAndPassword);

module.exports = Accounting;