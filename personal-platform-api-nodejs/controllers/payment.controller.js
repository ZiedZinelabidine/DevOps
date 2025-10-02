const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { validatePaymentIntents } = require("../validators/payment.validators");
const proposalEntrepriseController = require("./proposalEntreprise.controller");
const proposalController = require("../controllers/proposal.controller");
const soldedProductController = require("../controllers/soldedProduct.controller");
//const paymentIntentWithWallet = require("../controllers/paymentIntentWithWallet.controller");
const requestCompanyCreation = require("../controllers/requestCompanyCreation.controller");
const { updateInvoicingPayer,checkjwt } = require("./utils");
const db = require("../models");



// Create and capture payment
exports.createAndCapturePayment = async (req, res) => {
  const {
    paymentData,
  } = req.body;

  const stripeData = {
    amount: paymentData.amount,
    currency: paymentData.currency,
    customer: paymentData.customer,
    confirm: paymentData.confirm,
  };

  const jwt = await checkjwt(req, res, paymentData.payerId);
  if (!jwt) {
    return res.status(401).json({ error: "Unauthorized user" });
  } 

  try {
    const paymentIntent = await createPaymentIntent(stripeData);

    if(!paymentIntent) {
      res.status(500).send({ message: "Error creating and capturing PaymentIntent" });
    }
  
    return res.status(200).json({
      message: "PaymentIntent created and captured successfully",
      data: paymentIntent,
    });

  } catch (error) {
    console.error("Error creating and capturing PaymentIntent:", error);
    res.status(500).send({ error: error.message });

  }
};

  const createPaymentIntent = async (stripeData) => {
  try {
 
      return await stripe.paymentIntents.create(stripeData); // Assumes `stripe` is already imported/configured
    
  } catch (error) {
    console.error("Error creating payment intent:", error);
    return false;

  }
};


exports.refundPayment = async (req, res) => {

const { paymentIntentId, amount } = req.body; // Expecting paymentIntentId and optional amount

try {
    // Create the refund
    const refund = await stripe.refunds.create({
        payment_intent: paymentIntentId,
        amount: amount, // Optional amount to refund
    });

    res.json(refund); // Respond with the refund data
  } catch (error) {
      res.status(500).send({ error: error.message });
  }
}