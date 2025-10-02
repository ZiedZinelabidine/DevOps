const Accounting = require("../models/accounting.model");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const { Op } = require("sequelize");
const db = require("../models");
const dotenv = require('dotenv');
// Load environment variables
dotenv.config();
const crypto = require("crypto");
const axios = require("axios");
const {
  isFieldValueUnique,
  createTokenCandidat,
  deleteUserChat,
} = require("./utils");
const { validateSignupAccounting } = require("../validators/accounting.validators");
const { response } = require("express");


// Helper function to generate tokens
const generateTokenAndExpiration = () => {
  const token = crypto.randomBytes(32).toString("hex");
  const expires = Date.now() + 3600000; // 1 hour
  return { token, expires };
};

// Accounting signup
exports.signup = async (req, res) => {
  const accountingData = req.body;

  // Validate input data
  const { error } = validateSignupAccounting(accountingData);
  if (error) {
      return res.status(400).json({ error: error.details[0].message });
  }

  let transaction;

  try {
      // Start a database transaction
      transaction = await db.connection.transaction();

      // Check if email is unique
      const isEmailUnique = await isFieldValueUnique("email", accountingData.email);
      if (!isEmailUnique) {
          return res.status(400).json({ error: "Email already exists" });
      }

            // Create a Stripe customer
      const customer = await stripe.customers.create({
              name: accountingData.name,
              email: accountingData.email,
      });
      accountingData.stripe_id = customer.id;
         
      // Generate verification token
       const { token: verificationToken, expires: verificationExpires } = generateTokenAndExpiration();
       accountingData.verificationToken = verificationToken;
       accountingData.verificationExpires = verificationExpires;
      

      // Create the accounting record in the database
      const accounting = await Accounting.create(accountingData, { transaction });

      // Create and return authentication token
      const token = await createTokenCandidat(accounting, "ACCOUNTING");

      // Commit the transaction
      await transaction.commit();

      res.status(200).send({ message: "Signup Successfully", token });      

  } catch (error) {
      // Rollback the transaction if it exists
      if (transaction) await transaction.rollback();
      
      // Optional: Delete accounting chat if applicable
      deleteUserChat(accountingData.chatid);

      // Log the error and respond with a generic message
      console.error("Failed to signup accounting:", error);
      return res.status(500).json({ error: "Failed to add accounting :" + error});
  }
};

// Verify email
exports.verifyEmail = async (req, res) => {
  try {
    
    const token = req.body.verificationToken	;
    if (!token) return res.status(400).json({ error: "Invalid or expired token" });

    const accounting = await Accounting.findOne({
      where: {
        verificationToken: token,
        verificationExpires: { [Op.gt]: Date.now() },
      },
    });

    if (!accounting) return res.status(400).json({ error: "Invalid or expired token" });

    accounting.status = "ACTIVE";
    accounting.verificationToken = null;
    accounting.verificationExpires = null;

    await accounting.save();
    res.status(200).json({ message: "Email verified successfully!" });
  } catch (error) {
    console.error("Email verification failed:", error);
    res.status(500).json({ error: "Email verification failed :" + error});
  }
};

// forget Password
exports.forgetPasswordAccounting = async (req, res) => {
  try {
    const email   = req.query.email;
    if (!email) {
      return null ;

    }
    
    const accounting = await Accounting.findOne({ where: { email } });

    if (!accounting || accounting.status != 'ACTIVE') {
      return null ;

    }

    const { token: resetToken, expires: resetTokenExpires } = generateTokenAndExpiration();
    accounting.resetPasswordToken = resetToken;
    accounting.resetPasswordExpires = resetTokenExpires;
    await accounting.save();
    return res.status(200).json({ message:  "resest password token was generated ",resetToken , type: "ACCOUNTING"});
    
  } catch (error) {
    console.error("Failed to send password reset email:", error);
    return res.status(500).json({ error: "Failed to send password reset email :" + error });
  }
};

// Reset Password
exports.resetPassword = async (req, res) => {
  try {
    const token  = req.query.token;
    const newPassword  = req.body.newPassword;

    if (!token || !newPassword ) {
  
      return res.status(404).json({ error: "Failed to find  token or newPassword " });
    }

    const accounting = await Accounting.findOne({
      where: {
        resetPasswordToken: token,
        resetPasswordExpires: { [Op.gt]: Date.now() },
      },
    });

    if (!accounting || accounting.status != 'ACTIVE') return res.status(400).json({ error: "Invalid or expired token" });

    accounting.password = newPassword;
    accounting.resetPasswordToken = null;
    accounting.resetPasswordExpires = null;
    await accounting.save();

    // Return a response indicating success
    return res.status(200).send({ message: "Password has been reset successfully!" });      

  } catch (error) {
    console.error("Failed to reset password:", error);
    return res.status(500).json({ error: "Failed to reset password :" + error });
  }
};




exports.ResetVerificationTokenAccounting = async (req, res) => {
  try {
    const email   = req.query.email;
    if (!email) {
      return null ;

    }
   
    const accounting = await Accounting.findOne({ where: { email } });
    const { token: resetToken, expires: resetTokenExpires } = generateTokenAndExpiration();
    accounting.verificationToken = resetToken;
    accounting.verificationExpires = resetTokenExpires;
    await accounting.save();
    
      // Create and return authentication token
      const token = await createTokenCandidat(accounting, "ACCOUNTING");
      res.status(200).send({ message: "Signup Successfully", token });      

  } catch (error) {
    console.error("Failed to send password reset email:", error);
    return res.status(500).json({ error: "Failed to send password reset email :" + error });
  }
};