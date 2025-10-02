const express = require('express');
const paymentController = require("../controllers/payment.controller");
const paymentWithWallet = require("../controllers/paymentWithWallet.controller.js");
const { verifyToken } = require("../middlewares/jwt.middleware.js");

const router = express.Router();

router.post("/create-payment" , verifyToken, paymentController.createAndCapturePayment);
router.post("/refund-payment" , verifyToken, paymentController.refundPayment);


router.get("/paymentwithwallet" , verifyToken, paymentWithWallet.getpaymentWithWallets);
router.get("/paymentwithwallet/:id", verifyToken, paymentWithWallet.getpaymentWithWallet);
router.post("/create-payment-wallet/", verifyToken, paymentWithWallet.createpaymentWithWallet);
router.post("/refundwithwallet/", verifyToken, paymentWithWallet.createRefundWithWallet);



module.exports = router;