const User = require("../models/user.model");
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
  isFieldValueUniqueRecruter,
  isFieldValueUniqueEntreprise,
} = require("./utils");
const { validateSignupUser } = require("../validators/user.validators");
const { response } = require("express");


// Helper function to generate tokens
const generateTokenAndExpiration = () => {
  const token = crypto.randomBytes(32).toString("hex");
  const expires = Date.now() + 999999999000000; // 1 hour
  return { token, expires };
};

// User signup
exports.signup = async (req, res) => {
  const userData = req.body;

  // Validate input data
  const { error } = validateSignupUser(userData);
  if (error) {
      return res.status(400).json({ error: error.details[0].message });
  }

  let transaction;

  try {
      // Start a database transaction
      transaction = await db.connection.transaction();

      // Check if email is unique
      const [isEmailUnique, isEmailUniqueFromUser, isEmailUniqueFromRecruter] = await Promise.all([
        isFieldValueUnique("email", userData.email),
        isFieldValueUniqueEntreprise("email", userData.email),
        isFieldValueUniqueRecruter("email", userData.email),
    ]);

    if (!isEmailUnique || !isEmailUniqueFromUser || !isEmailUniqueFromRecruter) {
        return res.status(400).json({ error: "Email already exists" });
    }

    // Create a Stripe customer
       const customer = await stripe.customers.create({
            name: userData.name,
            email: userData.email,
        });
        userData.stripe_id = customer.id;
  

      // Generate verification token
       const { token: verificationToken, expires: verificationExpires } = generateTokenAndExpiration();
       userData.verificationToken = verificationToken;
       userData.verificationExpires = verificationExpires;
      
       if(userData.googleid) {
        userData.status ='ACTIVE' ;
      }

      // Create the user record in the database
      const user = await User.create(userData, { transaction });

      // Create and return authentication token
      const token = await createTokenCandidat(user, "CANDIDAT");

      // Commit the transaction
      await transaction.commit();

      res.status(200).send({ message: "Signup Successfully", token });      

  } catch (error) {
      // Rollback the transaction if it exists
      if (transaction) await transaction.rollback();
      
      // Optional: Delete user chat if applicable
      deleteUserChat(userData.chatid);

      // Log the error and respond with a generic message
      console.error("Failed to signup user:", error);
      return res.status(500).json({ error: "Failed to add user :" + error});
  }
};

// Verify email
exports.verifyEmail = async (req, res) => {
  try {
    
    const token = req.body.verificationToken	;
    if (!token) return res.status(400).json({ error: "Invalid or expired token" });

    const user = await User.findOne({
      where: {
        verificationToken: token,
        verificationExpires: { [Op.gt]: Date.now() },
      },
    });

    if (!user) return res.status(400).json({ error: "Invalid or expired token" });

    user.status = "ACTIVE";
    user.verificationToken = null;
    user.verificationExpires = null;

    await user.save();
    res.status(200).json({ message: "Email verified successfully!" });
  } catch (error) {
    console.error("Email verification failed:", error);
    res.status(500).json({ error: "Email verification failed :" + error});
  }
};

// forget Password
exports.forgetPasswordUser = async (req, res) => {
  try {
    const email   = req.query.email;
    if (!email) {
      return null ;

    }
    
    const user = await User.findOne({ where: { email } });

    if (!user || user.status != 'ACTIVE') {
      return null ;

    }

    const { token: resetToken, expires: resetTokenExpires } = generateTokenAndExpiration();
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = resetTokenExpires;
    await user.save();
    return res.status(200).json({ message:  "resest password token was generated ",resetToken , type: "CANDIDAT"});
    
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

    const user = await User.findOne({
      where: {
        resetPasswordToken: token,
        resetPasswordExpires: { [Op.gt]: Date.now() },
      },
    });

    if (!user || user.status != 'ACTIVE') return res.status(400).json({ error: "Invalid or expired token" });

    user.password = newPassword;
    user.resetPasswordToken = null;
    user.resetPasswordExpires = null;
    await user.save();

    // Return a response indicating success
    return res.status(200).send({ message: "Password has been reset successfully!" });      

  } catch (error) {
    console.error("Failed to reset password:", error);
    return res.status(500).json({ error: "Failed to reset password :" + error });
  }
};

// forget Password
exports.ResetVerificationTokenUser = async (req, res) => {
  try {
    const email   = req.query.email;
    if (!email) {
      return null ;

    }
    
    const user = await User.findOne({ where: { email } });

    const { token: resetToken, expires: resetTokenExpires } = generateTokenAndExpiration();
    user.verificationToken = resetToken;
    user.verificationExpires = resetTokenExpires;
    await user.save();

    const token = await createTokenCandidat(user, "CANDIDAT");
    return res.status(200).send({ message: "Signup Successfully", token });          
    
  } catch (error) {
    console.error("Failed to send password reset email:", error);
    return res.status(500).json({ error: "Failed to send password reset email :" + error });
  }
};