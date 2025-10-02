const { Op } = require("sequelize");
const Accounting = require("../models/accounting.model");
const { validateAccountingPatch } = require("../validators/accounting.validators");
const { checkjwt } = require("./utils");

exports.getAccountings = async(req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const offset = (page - 1) * limit;

        const filters = {};

        filters.status = "ACTIVE";

        if (req.query.skills) {
            const skills = req.query.skills.split(",");
            filters.skills = {
                [Op.overlap]: skills,
            };
        }

        if (req.query.id) {
            filters.id = req.query.id;
        }

        if (req.query.rising_star_global) {
            filters.rising_star_global = {
                [Op.gte]: req.query.rising_star_global
            };
        }

        if (req.query.country_details) {
            const country_details = req.query.country_details.split(",");
            filters.country_details = {
                [Op.overlap]: country_details,
            };
        }

        if (req.query.email) {
            filters.email = req.query.email;
        }

        if (req.query.job) {
            filters.job = req.query.job;
        }
        if (req.query.country_details) {
            filters.country_details = req.query.country_details;    
        }
        if (req.query.currency) {
            filters.currency = req.query.currency;
        }
        if (req.query.hour_rate_max && !req.query.hour_rate_min) {
            filters.hour_rate = {
                [Op.between]: [1, req.query.hour_rate_max]
            };
        }

        if (req.query.hour_rate_min && !req.query.hour_rate_max) {
            filters.hour_rate = {
                [Op.between]: [req.query.hour_rate_min , 10000]
            };
        }
        if (req.query.hour_rate_min && req.query.hour_rate_max) {
                filters.hour_rate = {
                    [Op.between]: [req.query.hour_rate_min , req.query.hour_rate_max]
            };
        }

        if (req.query.languages) {
            const languages = req.query.languages.split(",");
            filters.languages = {
                [Op.overlap]: languages,
            };
        }

        const { count, rows: accountings } = await Accounting.findAndCountAll({
            where: filters,
            offset: offset,
            limit: limit,
        });

        const totalPages = Math.ceil(count / limit);

        res.json({
            data: accountings,
            pagination: {
                totals: count,
                totalPages: totalPages,
                currentPage: page,
            },
        });
    } catch (ex) {
        console.error("Error fetching accountings:", ex);
        res.status(500).json({ error: "Internal server error" });
    }
};

exports.getAccounting = async(req, res) => {
    const accountingId = req.params.id;
    const jwt= await checkjwt(req, res, accountingId);

    if(!jwt){
        return res.status(401).json({ error: "checkjwt not ok " });
    }
    try {
        const accounting = await Accounting.findByPk(accountingId);
        if (!accounting) {
            return res.status(404).json({ error: "Accounting not found" });
        }
        return res.status(200).json({ data: accounting });
    } catch (error) {
        console.error("Failed to update accounting:", error);
        return res.status(500).json({ error: "Failed to update accounting" });
    }
};

exports.updateAccounting = async(req, res) => {
    const accountingId = req.params.id;
    const accountingData = req.body;
    const jwt= await checkjwt(req, res, accountingId);

    if(!jwt){
        return res.status(401).json({ error: "checkjwt not ok " });

    }
    const { error } = validateAccountingPatch(accountingData);

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    try {
        const existingAccounting = await Accounting.findByPk(accountingId);
        if (!existingAccounting) {
            return res.status(404).json({ error: "Accounting not found" });
        }

        await existingAccounting.update(accountingData);
        const updatedAccounting = await Accounting.findByPk(accountingId);
        return res.status(200).json(updatedAccounting);

    } catch (error) {
        console.error("Failed to update accounting:", error);
        return res.status(500).json({ error: "Failed to update accounting" });
    }
};

exports.deleteAccounting = async(req, res) => {
    const accountingId = req.params.id;
    const jwt= await checkjwt(req, res, accountingId);

    if(!jwt){
        return res.status(401).json({ error: "checkjwt not ok " });

    }
    try {
        const deletedAccounting = await Accounting.destroy({
            where: { id: accountingId },
            force: false,
        });
        if (deletedAccounting === 0) {
            return res
                .status(404)
                .json({ success: false, message: "Accounting not found or already deleted" });
        }
        return res.json({ success: true, message: "Accounting deleted successfully" });
    } catch (error) {
        console.error("Error soft deleting accounting:", error);
        return res.status(500).json({
            success: false,
            message: "An error occurred while soft deleting accounting",
        });
    }
};


exports.findAccounting = async(accountingId) => {
    try {
        const accounting = await Accounting.findByPk(accountingId);
        if (!accounting) {
            return null;
        }
        return accounting;
    } catch (error) {
        console.error("Failed to fetch accounting:", error);
    }
};

