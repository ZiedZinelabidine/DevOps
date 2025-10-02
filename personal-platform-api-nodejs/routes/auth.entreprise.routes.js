const authEntrepriseController = require("../controllers/auth.entreprise.controller.js");
const router = require("express").Router();
const {refreshtokenEntreprise} = require("../controllers/utils.js" );


router.post("/signup", authEntrepriseController.signup);

router.post("/verify-email", authEntrepriseController.verifyEmail );

router.post("/reset-password", authEntrepriseController.resetPassword );

router.post("/refresh-verif", authEntrepriseController.ResetVerificationTokenEntreprise );


router.post("/refresh-token", refreshtokenEntreprise );


module.exports = router;