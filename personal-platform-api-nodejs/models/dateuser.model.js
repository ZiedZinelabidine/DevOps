const crypto = require("crypto");
const db = require("./index");
const DataTypes = require("sequelize");

const Dateuser = db.connection.define(
    "dateuser", {
        name: {
            type: DataTypes.STRING,
            set: function(val) {
                this.setDataValue("name", val.toLowerCase());
            },
            notEmpty: true,
            notNull: true,
            unique: false,

        },
        gender: {
            type: DataTypes.STRING,
            defaultValue: "HOMME"
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
        stripe_id: {
            type: DataTypes.STRING,
        },
        chatid: {
            type: DataTypes.STRING,
            notEmpty: true,
           // notNull: true,
            unique: true,
        },
        type: {
            type: DataTypes.STRING,
            defaultValue: "DATEUSER"
        },
        website: {
                type: DataTypes.STRING,
        },
        job: {
            type: DataTypes.STRING,
        },
        languages: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            defaultValue: [],       
        },
        telephone: {
            type: DataTypes.STRING,
            allowNull: true,  // or false if required
        },
        usernamechat: {
            type: DataTypes.STRING,
            notEmpty: true,
           // notNull: true,
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
        passions: {
            type: DataTypes.TEXT,
        },
        skills: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            defaultValue: [],
        },
        github: {
            type: DataTypes.STRING,
            allowNull: true
        },
        linkedin: {
            type: DataTypes.STRING,
            allowNull: true
        },
        status: {
            type: DataTypes.STRING,
            notEmpty: true,
            notNull: true,
            defaultValue: "CREATED"
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
        display: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: () => crypto.randomBytes(32).toString("hex"),
        },
    }, {
        paranoid: true,  // Enable soft deletes
    }
);

// Methods for password handling
Dateuser.generateSalt = function() {
    return crypto.randomBytes(16).toString("base64");
};


Dateuser.encryptPassword = function(plainText, salt) {
    return crypto
        .createHash("RSA-SHA256")
        .update(plainText)
        .update(salt)
        .digest("hex");
};

// Function to set salt and password before creating/updating a user
const setSaltAndPassword = (dateuser) => {
    // Only process if password is provided
    if (dateuser.changed("password") && dateuser.password()) {
        dateuser.salt = Dateuser.generateSalt();
        dateuser.password = Dateuser.encryptPassword(dateuser.password(), dateuser.salt());
    }
};

// Method to verify the entered password against the stored password
Dateuser.prototype.verifyPassword = function(enteredPassword) {
    const salt = this.salt();
    const password = this.password();

    if (!salt || !password) {
        return false; // Return false if there's no salt or password to compare
    }

    return Dateuser.encryptPassword(enteredPassword, salt) === password;
};

// Hooks to automatically set salt and password
Dateuser.beforeCreate(setSaltAndPassword);
Dateuser.beforeUpdate(setSaltAndPassword);

module.exports = Dateuser;