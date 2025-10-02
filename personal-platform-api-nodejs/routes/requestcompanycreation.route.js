const express = require("express");
const requestcompanycreationController = require("../controllers/requestCompanyCreation.controller");
const router = express.Router();
const { verifyToken } = require("../middlewares/jwt.middleware.js");


router.post("/", requestcompanycreationController.addRequestCompanyCreation);

router.get("/sharerequestcompanycreation/:token", verifyToken, requestcompanycreationController.findRequestCompanyCreationByToken);


router.post(
  "/:id/",
  requestcompanycreationController.updateRequestCompanyCreation
);

router.get("/", requestcompanycreationController.getRequestCompanyCreations);

router.get("/:id/", requestcompanycreationController.getRequestCompanyCreation);

router.get(
  "/president/:id/type/:type",
  requestcompanycreationController.getRequestCompanyCreationByPresidentIdAndType
);

router.delete(
  "/:id/",
  requestcompanycreationController.deleteRequestCompanyCreation
);

module.exports = router;
