const { Op } = require("sequelize");
const Recruitment = require("../models/recruitment.model");
const Recruter = require("../models/recruter.model");

const { validateRecruterPatch } = require("../validators/recruter.validators");
const {checkjwt} = require("./utils");

exports.getRecruters = async(req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const offset = (page - 1) * limit;

        const filters = {};

        if (req.query.status) {
            filters.status = req.query.status;
        }

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

        const { count, rows: recruters } = await Recruter.findAndCountAll({
            where: filters,
            offset: offset,
            limit: limit,
        });

        const totalPages = Math.ceil(count / limit);

        res.json({
            data: recruters,
            pagination: {
                totals: count,
                totalPages: totalPages,
                currentPage: page,
            },
        });
    } catch (ex) {
        console.error("Error fetching recruters:", ex);
        res.status(500).json({ error: "Internal server error : " + ex });
    }
};

exports.getRecruter = async(req, res) => {
    const recruterId = req.params.id;
    try {
        const recruter = await Recruter.findByPk(recruterId);
        if (!recruter) {
            return res.status(404).json({ error: "Recruter not found" });
        }
        return res.status(200).json({ data: recruter });
    } catch (error) {
        console.error("Failed to update recruter:", error);
        return res.status(500).json({ error: "Failed to update recruter : " + error});
    }
};

exports.updateRecruter = async(req, res) => {
    const recruterId = req.params.id;
    const recruterData = req.body;
    const { error } = validateRecruterPatch(recruterData);
    const jwt= await checkjwt(req, res, recruterId);

    if(!jwt){
        return res.status(401).json({ error: "checkjwt not ok " });

    }
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    try {
        const existingRecruter = await Recruter.findByPk(recruterId);
        if (!existingRecruter) {
            return res.status(404).json({ error: "Recruter not found" });
        }

        await existingRecruter.update(recruterData);
        const updatedRecruter = await Recruter.findByPk(recruterId);
        return res.status(200).json(updatedRecruter);

    } catch (error) {
        console.error("Failed to update recruter:", error);
        return res.status(500).json({ error: "Failed to update recruter : " + error });
    }
};

exports.deleteRecruter = async(req, res) => {
    const recruterId = req.params.id;
    const jwt= await checkjwt(req, res, recruterId);

    if(!jwt){
        return res.status(401).json({ error: "checkjwt not ok " });

    }
    try {
        const deletedRecruter = await Recruter.destroy({
            where: { id: recruterId },
            force: false,
        });
        if (deletedRecruter === 0) {
            return res
                .status(404)
                .json({ success: false, message: "Recruter not found or already deleted" });
        }
        return res.json({ success: true, message: "Recruter deleted successfully" });
    } catch (error) {
        console.error("Error soft deleting recruter:", error);
        return res.status(500).json({
            success: false,
            message: "An error occurred while soft deleting recruter: " + error,
        });
    }
};


exports.findRecruter = async(recruterId) => {
    try {
        const recruter = await Recruter.findByPk(recruterId);
        if (!recruter) {
            return null;
        }
        return recruter;
    } catch (error) {
        console.error("Failed to fetch recruter:", error);
        return null;
    }
};


exports.findRecruterByToken = async (req, res) => {

    const token = req.params.token;
    try {
        // Find the user by the verificationToken
        const recruter = await Recruter.findOne({
            where: {
                display: token
            }
        });

        if (!recruter) {
            return res.status(404).json({ message: 'User not found or token expired' });
        }

        // If user is found, return the user data (omit sensitive fields if necessary)
        return res.status(200).json(recruter);
    } catch (error) {
        console.error(`Error finding recruter by token: ${error.message}`);
        return res.status(500).json({ message: 'Internal server error' });
    }
};