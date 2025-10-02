const Entreprise = require("../models/entreprise.model");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const { Op } = require("sequelize");
const db = require("../models");
const crypto = require("crypto");
const axios = require("axios");
const {
  isFieldValueUniqueEntreprise,
  isFieldValueUnique,
  isFieldValueUniqueRecruter,
  deleteUserChat,
} = require("./utils");
const { validateSignupEntreprise } = require("../validators/entreprise.validators");
const { createTokenEntreprise } = require("../controllers/utils");


const generateTokenAndExpiration = () => {
  const token = crypto.randomBytes(32).toString("hex");
  const expires = Date.now() + 999999999000000; // 1 hour
  return { token, expires };
};

exports.signup = async (req, res) => {
  const entrepriseData = req.body;

  // Validate the incoming data for signup
  const { error } = validateSignupEntreprise(entrepriseData);
  if (error) {
      return res.status(400).json({ error: error.details[0].message });
  }

  let transaction;

  try {
      // Validate uniqueness of username and email
      const [isEmailUnique, isEmailUniqueFromUser, isEmailUniqueFromRecruter] = await Promise.all([
          isFieldValueUniqueEntreprise("email", entrepriseData.email),
          isFieldValueUnique("email", entrepriseData.email),
          isFieldValueUniqueRecruter("email", entrepriseData.email),
      ]);

      if (!isEmailUnique || !isEmailUniqueFromUser || !isEmailUniqueFromRecruter) {
          return res.status(400).json({ error: "Email already exists" });
      }

            // Create a customer in Stripe
      const customer = await stripe.customers.create({
              name: entrepriseData.username,
              email: entrepriseData.email,
          });
      entrepriseData.stripe_id = customer.id;

          
      // Generate verification token and expiration
      const { token: verificationToken, expires: verificationExpires } = generateTokenAndExpiration();
      entrepriseData.verificationToken = verificationToken;
      entrepriseData.verificationExpires = verificationExpires;

      // Start a transaction
      transaction = await db.connection.transaction();

      if(entrepriseData.googleid) {
        entrepriseData.status ='ACTIVE' ;
      }
      // Create the entreprise record
      const entreprise = await Entreprise.create(entrepriseData, { transaction });

      // Generate token for the new entreprise
      const token = await createTokenEntreprise(entreprise, "ENTREPRISE");
      await transaction.commit(); // Commit the transaction

      return res.status(200).send({ message: "Signup Successfully", token });      
  } catch (error) {
      // Rollback the transaction in case of error
      if (transaction) await transaction.rollback();
      // Optionally delete user chat if needed
      deleteUserChat(entrepriseData.chatid);
      console.error("Failed to add entreprise:", error);
      return res.status(500).json({ error: "Failed to add entreprise : " + error });
  }
};


exports.verifyEmail = async (req, res) => {
  try {

    const token = req.body.verificationToken	;
    if (!token) return res.status(400).json({ error: "Invalid or expired token" });


    const entreprise = await Entreprise.findOne({
      where: {
        verificationToken: token,
        verificationExpires: { [Op.gt]: Date.now() },
      },
    });

    if (!entreprise) return res.status(400).json({ error: "Invalid or expired token" });

    entreprise.status = "ACTIVE";
    entreprise.verificationToken = null;
    entreprise.verificationExpires = null;

    await entreprise.save();
    res.status(200).json({ message: "Email verified successfully!" });
  } catch (error) {
    console.error("Email verification failed:", error);
    res.status(500).json({ error: "Email verification failed: " + error });
  }
};

exports.forgetPasswordEntreprise = async (req, res) => {
  try {
    const email   = req.query.email;   
    if (!email) {
 
      return null ;

    }
    const entreprise = await Entreprise.findOne({ where: { email } });
    if (!entreprise || entreprise.status != 'ACTIVE') {
      return null ;
    }
 
    const { token: resetToken, expires: resetTokenExpires } = generateTokenAndExpiration();
    entreprise.resetPasswordToken = resetToken;
    entreprise.resetPasswordExpires = resetTokenExpires;
    
    await entreprise.save();
    return res.status(200).json({ message:  "resest password token was generated ",resetToken , type:'ENTREPRISE'});
    
  } catch (error) {
    console.error("Failed to send password reset email:", error);
    return res.status(500).json({ error: "Failed to send password reset emai :" + error });
  }
};

exports.resetPassword = async (req, res) => {
  try {
    const token  = req.query.token;
    const newPassword  = req.body.newPassword;

    if (!token || !newPassword ) {
  
      return res.status(404).json({ error: "Failed to find  token or newPassword " });
    }
    const entreprise = await Entreprise.findOne({
      where: {
        resetPasswordToken: token,
        resetPasswordExpires: { [Op.gt]: Date.now() },
      },
    });
    if (!entreprise || entreprise.status != 'ACTIVE') return res.status(400).json({ error: "Invalid or expired token" });
    entreprise.password = newPassword;
    entreprise.resetPasswordToken = null;
    entreprise.resetPasswordExpires = null;
    await entreprise.save();

    // Return a response indicating success
    return res.status(200).send({ message: "Password has been reset successfully!" });     
  
  } catch (error) {
    console.error("Failed to reset password:", error);
    return res.status(500).json({ error: "Failed to reset password:" + error});
  }
};


exports.ResetVerificationTokenEntreprise = async (req, res) => {
  try {
    const email   = req.query.email;   
    if (!email) {
 
      return null ;

    }
    const entreprise = await Entreprise.findOne({ where: { email } });
 
    const { token: resetToken, expires: resetTokenExpires } = generateTokenAndExpiration();
    entreprise.verificationToken = resetToken;
    entreprise.verificationExpires = resetTokenExpires;
    
    const token = await createTokenEntreprise(entreprise, "ENTREPRISE");
    return res.status(200).send({ message: "Signup Successfully", token });          
    
  } catch (error) {
    console.error("Failed to send password reset email:", error);
    return res.status(500).json({ error: "Failed to send password reset emai :" + error });
  }
};