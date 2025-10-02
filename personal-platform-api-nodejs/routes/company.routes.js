const express = require("express");
const companyController = require("../controllers/company.controller.js");
const { verifyToken } = require("../middlewares/jwt.middleware.js");

const router = express.Router();

router.get("/", verifyToken, companyController.getCompanys);

router.get("/:id", verifyToken, companyController.getCompany);

router.get("/sharecompany/:token", verifyToken, companyController.findCompanyByToken);

router.get(
  "/president/:id/type/:type",
  verifyToken,
  companyController.getCompanyByPresidentId
);

router.get("/sharecompany/:token", verifyToken, companyController.findCompanyByToken);

router.post("/", companyController.addCompany);

router.post("/:id", verifyToken, companyController.updateCompany);

router.delete("/:id", verifyToken, companyController.deleteCompany);

module.exports = router;
