const authAccountingController = require("../controllers/auth.accounting.controller.js");
const loginAccountingController = require("../controllers/login-accounting.controller.js");

const router = require("express").Router();

router.post("/signup", authAccountingController.signup);

router.post("/login", loginAccountingController.login);

router.get("/verify-email", authAccountingController.verifyEmail );

router.post("/refresh-verif", authAccountingController.ResetVerificationTokenAccounting);

router.get("/reset-password", authAccountingController.resetPassword );


module.exports = router;