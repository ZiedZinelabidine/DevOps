const Invoicing = require("../models/invoicing.model");
const { Op, where } = require("sequelize");

const {
    validateInvoicing,
    validateInvoicingUpdate,
} = require("../validators/invoicing.validators");

exports.getInvoicings = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const offset = (page - 1) * limit;

        let filters = {};


        if (req.query.payerId && req.query.payerType ) {
            filters.payerId = req.query.payerId;
            filters.payerType = req.query.payerType;
        }

        if (req.query.targetProductId && req.query.targetProductType ) {
            filters.targetProductType = req.query.targetProductType;
            filters.targetProductType = req.query.targetProductType;
        }
       
        if (req.query.paymentType) {
            filters.paymentType = req.query.paymentType;
        }

        if (req.query.status) {
            filters.status = req.query.status;
        }
        if (req.query.orderID) {
            filters.orderID = req.query.orderID;
        }
   
        const { count, rows: invoicings } = await Invoicing.findAndCountAll({
            where: filters,
            offset: offset,
            limit: limit,
            order: [
                ['createdAt', 'DESC']
            ]
        });


        const totalPages = Math.ceil(count / limit);
        res.json({
            data: invoicings,
            pagination: {
                totals: count,
                totalPages: totalPages,
                currentPage: page,
            },
        });
    } catch (ex) {
        console.error("Error fetching invoicings:", ex);
        res.status(500).json({ error: "Internal server error" });
    }
};


exports.getInvoicing = async (req, res) => {
    const invoicingId = req.params.id;
    try {
        const invoicing = await Invoicing.findByPk(invoicingId);
        if (!invoicing) {
            return res.status(404).json({ error: "invoicing not found" });
        }

        return res.status(200).json({ data: invoicing });
    } catch (error) {
        console.error("Failed to fetch invoicing:", error);
        return res.status(500).json({ error: "Failed to fetch invoicing: " +error });
    }
};

exports.addInvoicing = async (req, res) => {
    const invoicingData = req.body;
    const { error } = validateInvoicing(invoicingData);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    try {
        const invoicing = await Invoicing.create(invoicingData);

        return res.status(201).json(invoicing);
    } catch (error) {
        console.error("Failed to add invoicing:", error);
        return res.status(500).json({ error: "Failed to add invoicing : " +error });
    }
};

exports.updateInvoicing = async (req, res) => {
    const invoicingId = req.params.id;
    const invoicingData = req.body;

    const { error } = validateInvoicingUpdate(invoicingData);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    try {
        const existinginvoicing = await Invoicing.findByPk(invoicingId);
        if (!existinginvoicing) {
            return res.status(404).json({ error: "invoicing not found" });
        }

        await existinginvoicing.update(invoicingData);

        const updatedinvoicing = await Invoicing.findByPk(invoicingId);

        return res.status(200).json(updatedinvoicing);
    } catch (error) {
        console.error("Failed to update invoicing:", error);
        return res.status(500).json({ error: "Failed to update invoicing : " +error });
    }
};

exports.deleteInvoicing = async (req, res) => {
    const invoicingId = req.params.id;
    try {
        const deletedinvoicing = await Invoicing.destroy({
            where: { id: invoicingId },
            force: false,
        });
        if (deletedinvoicing === 0) {
            return res.status(404).json({
                success: false,
                message: "invoicing not found or already deleted",
            });
        }
        return res.json({
            success: true,
            message: "invoicing deleted successfully",
        });
    } catch (error) {
        console.error("Error soft deleting invoicing:", error);
        return res.status(500).json({
            success: false,
            message: "An error occurred while soft deleting invoicing : " +error,
        });
    }
};
