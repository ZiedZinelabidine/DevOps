const authRecruterController = require("../controllers/auth.recruter.controller.js");
const router = require("express").Router();
const {refreshtokenRecruter} = require("../controllers/utils.js" );


router.post("/signup", authRecruterController.signup);

router.post("/verify-email", authRecruterController.verifyEmail );

router.post("/reset-password", authRecruterController.resetPassword );

router.post("/refresh-verif", authRecruterController.ResetVerificationTokenRecruter);

router.post("/refresh-token", refreshtokenRecruter );

module.exports = router;