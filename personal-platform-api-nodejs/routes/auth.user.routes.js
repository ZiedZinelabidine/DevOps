const authUserController = require("../controllers/auth.user.controller.js");
const router = require("express").Router();
const {refreshtokenCandidat} = require("../controllers/utils.js" );

// User auth routes
router.post("/signup", authUserController.signup);

router.post("/verify-email", authUserController.verifyEmail );

router.post("/reset-password", authUserController.resetPassword );

router.post("/refresh-verif", authUserController.ResetVerificationTokenUser);

router.post("/refresh-token", refreshtokenCandidat);

module.exports = router;