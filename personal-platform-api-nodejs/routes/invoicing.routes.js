const express = require('express');
const invoicingController = require("../controllers/invoicing.controller");
const router = express.Router();

router.post("/", invoicingController.addInvoicing);

router.post("/:id", invoicingController.updateInvoicing);

router.get("/", invoicingController.getInvoicings);

router.get("/:id", invoicingController.getInvoicing);

router.delete("/:id", invoicingController.deleteInvoicing);

module.exports = router;