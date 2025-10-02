const crypto = require("crypto");
const db = require("./index");
const DataTypes = require("sequelize");

const Recruter = db.connection.define(
    "recruter", {
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
            allowNull: true
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
        googleid: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: true
        },
        chatid: {
            type: DataTypes.STRING,
            notEmpty: true,
            notNull: true,
            unique: true,
        },
        recruitment_token: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: () => crypto.randomBytes(32).toString("hex"),
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
        count_shared_offres:{
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        type: {
            type: DataTypes.STRING,
            defaultValue: "RECRUTER"
        },
        linkedin: {
            type: DataTypes.STRING,
            allowNull: true
        },          
        currency: {
            type: DataTypes.STRING,
            defaultValue: "EURO"
        },
        telephone: {
           type: DataTypes.STRING,
            allowNull: true,  // or false if required
        },
        languages: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            defaultValue: [],       
        },
        stripe_id: {
            type: DataTypes.STRING,
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
        status: {
            type: DataTypes.STRING,
            notEmpty: true,
            notNull: true,
            defaultValue: "CREATED"
        },
        mobile: {
            type: DataTypes.STRING,
        },
        url: {
            type: DataTypes.STRING,
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
        display: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: () => crypto.randomBytes(32).toString("hex"),
        },
      password: {
            type: DataTypes.STRING,
            get() {
                return () => this.getDataValue("password");
            },
            allowNull: true        // Allow null password
        },
        salt: {
            type: DataTypes.STRING,
            notEmpty: true,
            notNull: true,
            get() {
                return () => this.getDataValue("salt");
            },
          },
    }, {
        paranoid: true,
    }
);

Recruter.generateSalt = function() {
    return crypto.randomBytes(16).toString("base64");
};
Recruter.encryptPassword = function(plainText, salt) {
    return crypto
        .createHash("RSA-SHA256")
        .update(plainText)
        .update(salt)
        .digest("hex");
};

const setSaltAndPassword = (recruter) => {
    // Only process if password is provided
    if (recruter.changed("password") && recruter.password()) {
        recruter.salt = Recruter.generateSalt();
        recruter.password = Recruter.encryptPassword(recruter.password(), recruter.salt());
    }
};

Recruter.prototype.verifyPassword = function(enteredPassword) {
    const salt = this.salt();
    const password = this.password();

    if (!salt || !password) {
        return false; // Return false if there's no salt or password to compare
    }

    return Recruter.encryptPassword(enteredPassword, salt) === password;
};

Recruter.beforeCreate(setSaltAndPassword);
Recruter.beforeUpdate(setSaltAndPassword);

module.exports = Recruter;