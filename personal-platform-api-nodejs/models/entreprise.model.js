const crypto = require("crypto");
const db = require("./index");
const DataTypes = require("sequelize");

// Define the Entreprise model
const Entreprise = db.connection.define(
    "entreprise", {
    username: {
        type: DataTypes.STRING,
        set(val) {
            this.setDataValue("username", val.toLowerCase());
        },
        notEmpty: true,
        notNull: true,
    },
    email: {
        type: DataTypes.STRING,
        set(val) {
            this.setDataValue("email", val.toLowerCase());
        },
        isEmail: true,
        notEmpty: true,
        notNull: true,
        unique: true,
    },
    telephone: {
        type: DataTypes.STRING,
        allowNull: true,  // or false if required
    },
    languages: {
       type: DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: [],       
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
    stripe_id: {
        type: DataTypes.STRING,
    },
    usernamechat: {
        type: DataTypes.STRING,
        notEmpty: true,
        notNull: true,
        unique: true,
    },
    status: {
        type: DataTypes.STRING,
        notEmpty: true,
        notNull: true,
        defaultValue: "CREATED"
    },
    type: {
        type: DataTypes.STRING,
        defaultValue: "ENTREPRISE"
    },
    entreprise_description: {
        type: DataTypes.TEXT,
    },
    verificationToken: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    verificationExpires: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    count_shared_proposalentreprise: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    count_shared_projectsharetask: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    resetPasswordToken: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    resetPasswordExpires: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    country_details: {
        type: DataTypes.STRING
    },
    mobile: {
        type: DataTypes.STRING,
    },
    website: {
        type: DataTypes.STRING,
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
    paranoid: true,
}
);

// Salt and password generation methods
Entreprise.generateSalt = function () {
    return crypto.randomBytes(16).toString("base64");
};

Entreprise.encryptPassword = function (plainText, salt) {
    return crypto
        .createHash("RSA-SHA256")
        .update(plainText)
        .update(salt)
        .digest("hex")
};

// Function to set salt and password before creating/updating an entreprise
const setSaltAndPassword = (entreprise) => {
    // Only process if the password is provided
    if (entreprise.changed("password") && entreprise.password()) {
        entreprise.salt = Entreprise.generateSalt();
        entreprise.password = Entreprise.encryptPassword(entreprise.password(), entreprise.salt());
    }
};

// Method to verify the entered password against the stored password
Entreprise.prototype.verifyPassword = function (enteredPassword) {
    const salt = this.salt();
    const password = this.password();

    if (!salt || !password) {
        return false; // Return false if there's no salt or password to compare
    }

    return Entreprise.encryptPassword(enteredPassword, salt) === password;
};

// Hooks to automatically set salt and password
Entreprise.beforeCreate(setSaltAndPassword);
Entreprise.beforeUpdate(setSaltAndPassword);

module.exports = Entreprise;
