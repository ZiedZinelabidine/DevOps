const crypto = require("crypto");
const db = require("./index");
const DataTypes = require("sequelize");

const User = db.connection.define(
    "user", {
        name: {
            type: DataTypes.STRING,
            set: function(val) {
                this.setDataValue("name", val.toLowerCase());
            },
            notEmpty: true,
            notNull: true,
            unique: false,

        },
        first_name: {
            type: DataTypes.STRING,
            set: function(val) {
                this.setDataValue("first_name", val.toLowerCase());
            },
            allowNull: true,
            unique: false,
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
            defaultValue: "CANDIDAT"
        },
        type_candidat: {
            type: DataTypes.STRING,
            defaultValue: "FREELANCE"  // AGENCY
        },
        job: {
            type: DataTypes.STRING,
        },
        count_sharedproduct: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },    
        hourly_rate: {
            type: DataTypes.FLOAT,
            defaultValue: 0.0
        },
        currency: {
            type: DataTypes.STRING,
            defaultValue: "EURO"
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
        services: {
            type: DataTypes.TEXT,
        },
        skills: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            defaultValue: [],
        },
        balance_details: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0.0,
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
        mobile: {
            type: DataTypes.STRING,
        },
        rising_star_global: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0.0,
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
User.generateSalt = function() {
    return crypto.randomBytes(16).toString("base64");
};


User.encryptPassword = function(plainText, salt) {
    return crypto
        .createHash("RSA-SHA256")
        .update(plainText)
        .update(salt)
        .digest("hex");
};

// Function to set salt and password before creating/updating a user
const setSaltAndPassword = (user) => {
    // Only process if password is provided
    if (user.changed("password") && user.password()) {
        user.salt = User.generateSalt();
        user.password = User.encryptPassword(user.password(), user.salt());
    }
};

// Method to verify the entered password against the stored password
User.prototype.verifyPassword = function(enteredPassword) {
    const salt = this.salt();
    const password = this.password();

    if (!salt || !password) {
        return false; // Return false if there's no salt or password to compare
    }

    return User.encryptPassword(enteredPassword, salt) === password;
};

// Hooks to automatically set salt and password
User.beforeCreate(setSaltAndPassword);
User.beforeUpdate(setSaltAndPassword);

module.exports = User;