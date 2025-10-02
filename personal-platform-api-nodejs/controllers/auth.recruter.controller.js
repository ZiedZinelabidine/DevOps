const Recruter = require("../models/recruter.model");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const {
  isFieldValueUnique,
  isFieldValueUniqueEntreprise,
  isFieldValueUniqueRecruter,
  createTokenCandidat,
  deleteUserChat,
} = require("./utils");
const { validateSignupRecruter } = require("../validators/recruter.validators");
const { Op } = require("sequelize");
const db = require("../models");
const crypto = require("crypto");
const axios = require("axios");

// Helper function to generate tokens
const generateTokenAndExpiration = () => {
  const token = crypto.randomBytes(32).toString("hex");
  const expires = Date.now() + 999999999000000; // 1 hour
  return { token, expires };
};

// Sign up Recruter
exports.signup = async (req, res) => {
  const recruterData = req.body;
  let transaction;

  // Validate input data
  const { error } = validateSignupRecruter(recruterData);
  if (error) {
      return res.status(400).json({ error: error.details[0].message });
  }

  try {
      // Check for unique email across different models
      const [isEmailUnique, isEmailUniqueFromUser, isEmailUniqueFromRecruter] = await Promise.all([
          isFieldValueUnique("email", recruterData.email),
          isFieldValueUniqueEntreprise("email", recruterData.email),
          isFieldValueUniqueRecruter("email", recruterData.email),
      ]);

      if (!isEmailUnique || !isEmailUniqueFromUser || !isEmailUniqueFromRecruter) {
          return res.status(400).json({ error: "Email already exists" });
      }

            // Create a customer in Stripe
      const customer = await stripe.customers.create({
              name: recruterData.name,
              email: recruterData.email,
       });
       recruterData.stripe_id = customer.id;
    

      // Generate verification token and expiration
      const { token: verificationToken, expires: verificationExpires } = generateTokenAndExpiration();
      recruterData.verificationToken = verificationToken;
      recruterData.verificationExpires = verificationExpires;

      if(recruterData.googleid) {
        recruterData.status ='ACTIVE' ;
      }

      // Start a transaction
      transaction = await db.connection.transaction();

      // Create recruiter record
      const recruter = await Recruter.create(recruterData, { transaction });
      const token = await createTokenCandidat(recruter, "RECRUTER");

      await transaction.commit(); // Commit the transaction

     return res.status(200).send({ message: "Signup Successfully", token });      
      
  } catch (error) {
      // Rollback the transaction on any error
      if (transaction) await transaction.rollback();
      
      // Log specific error messages with contextual information
      console.error("Failed to signup recruiter:", error.message || error); // Log the error message

      // Provide a generic error message for security reasons without revealing details
      return res.status(500).json({ error: "An unexpected error occurred during the signup process :" + error});
  }
};


// Verify email
exports.verifyEmail = async (req, res) => {
  try {
    
    const token = req.body.verificationToken	;
    if (!token) return res.status(400).json({ error: "Invalid or expired token" });

    const recruter = await Recruter.findOne({
      where: {
        verificationToken: token,
        verificationExpires: { [Op.gt]: Date.now() },
      },
    });

    if (!recruter) return res.status(400).json({ error: "Invalid or expired token" });

    recruter.status = "ACTIVE";
    recruter.verificationToken = null;
    recruter.verificationExpires = null;

    await recruter.save();
    res.status(200).json({ message: "Email verified successfully!" });
  } catch (error) {
    console.error("Email verification failed:", error);
    res.status(500).json({ error: "Email verification failed" });
  }
};

// forget Password
exports.forgetPasswordRecruter = async (req, res) => {
  try {
    const email   = req.query.email;

    if (!email) {
      return null ;

    }

    const recruter = await Recruter.findOne({ where: { email } });
    if (!recruter || recruter.status != 'ACTIVE') {
      return null ;
    }
    const { token: resetToken, expires: resetTokenExpires } = generateTokenAndExpiration();
    recruter.resetPasswordToken = resetToken;
    recruter.resetPasswordExpires = resetTokenExpires;
    await recruter.save();
   return res.status(200).json({ message:  "resest password token was generated ",resetToken , type: "RECRUTER"});
    
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

    const recruter = await Recruter.findOne({
      where: {
        resetPasswordToken: token,
        resetPasswordExpires: { [Op.gt]: Date.now() },
      },
    });

    if (!recruter || recruter.status != 'ACTIVE' ) return res.status(400).json({ error: "Invalid or expired token" });

    recruter.password = newPassword;
    recruter.resetPasswordToken = null;
    recruter.resetPasswordExpires = null;
    await recruter.save();
    // Return a response indicating success
    return res.status(200).send({ message: "Password has been reset successfully!" });      
  
  } catch (error) {
    console.error("Failed to reset password:", error);
    return res.status(500).json({ error: "Failed to reset password :" + error});
  }
};


exports.ResetVerificationTokenRecruter = async (req, res) => {
  try {
    const email   = req.query.email;
    if (!email) {
      return null ;

    }

    const recruter = await Recruter.findOne({ where: { email } });

    const { token: resetToken, expires: resetTokenExpires } = generateTokenAndExpiration();
    recruter.verificationToken = resetToken;
    recruter.verificationExpires = resetTokenExpires;
    await recruter.save();

    const token = await createTokenCandidat(recruter, "RECRUTER");
    return res.status(200).send({ message: "Signup Successfully", token });          

  } catch (error) {
    console.error("Failed to send password reset email:", error);
   return res.status(500).json({ error: "Failed to send password reset email :" + error });
  }
};