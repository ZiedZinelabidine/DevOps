const Entreprise = require("../models/entreprise.model");
const {
    validateEntreprisePatch,
} = require("../validators/entreprise.validators");
const { isFieldValueUniqueExceptCurrentEntreprise ,checkjwt } = require("../controllers/utils");

exports.getEntreprises = async(req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const offset = (page - 1) * limit;

        const filters = {};

        if (req.query.entreprise_name) {
            filters.username = req.query.entreprise_name;
        }

        if (req.query.status) {
            filters.status = req.query.status;
        }

        if (req.query.id) {
            filters.id = req.query.id;
        }

        if (req.query.email) {
            filters.email = req.query.email;
        }

        const { count, rows: entreprises } = await Entreprise.findAndCountAll({
            where: filters,
            offset: offset,
            limit: limit,
        });

        const totalPages = Math.ceil(count / limit);

        res.json({
            data: entreprises,
            pagination: {
                totals: count,
                totalPages: totalPages,
                currentPage: page,
            },
        });
    } catch (error) {
        console.error("Error fetching entreprises:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

exports.getEntreprise = async(req, res) => {
    const entrepriseId = req.params.id;
    try {
        const entreprise = await Entreprise.findByPk(entrepriseId);
        if (!entreprise) {
            return res.status(404).json({ error: "Entreprise not found" });
        }
        return res.status(200).json({
            data: entreprise
        });
    } catch (error) {
        console.error("Failed to update entreprise:", error);
        return res.status(500).json({ error: "Failed to update entreprise" });
    }
};

exports.updateEntreprisePatch = async(req, res) => {
    const entrepriseId = req.params.id;
    const entrepriseData = req.body;

    const { error } = validateEntreprisePatch(entrepriseData);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    const jwt= await checkjwt(req, res, entrepriseId);

    if(!jwt){
        return res.status(401).json({ error: "checkjwt not ok " });

    }
    try {

        const existingEntreprise = await Entreprise.findByPk(entrepriseId);
        if (!existingEntreprise) {
            return res.status(404).json({ error: "Entreprise not found" });
        }
        
        if (entrepriseData.username !== undefined) {
            const isUsernameUnique = await isFieldValueUniqueExceptCurrentEntreprise(
                "username",
                entrepriseData.username,
                entrepriseId
            );
            if (!isUsernameUnique) {
                return res.status(400).json({ error: "Username already exists" });
            }
        }

        if (entrepriseData.email !== undefined) {
            const isEmailUnique = await isFieldValueUniqueExceptCurrentEntreprise(
                "email",
                entrepriseData.email,
                entrepriseId
            );
            if (!isEmailUnique) {
                return res.status(400).json({ error: "Email already exists" });
            }
        }
      

        await existingEntreprise.update(entrepriseData);

        const updatedEntreprise = await Entreprise.findByPk(entrepriseId);

        return res.status(200).json(updatedEntreprise);
    } catch (error) {
        console.error("Failed to update entreprise:", error);
        return res.status(500).json({ error: "Failed to update entreprise" });
    }
};

exports.deleteEntreprise = async (req, res) => {
    const entrepriseId = req.params.id;
   
    const jwt= await checkjwt(req, res, entrepriseId);

    if(!jwt){
        return res.status(401).json({ error: "checkjwt not ok " });

    }
    
    try {
        // Check if the entreprise exists before deletion
        const entreprise = await Entreprise.findByPk(entrepriseId);
        if (!entreprise) {
            return res.status(404).json({
                success: false,
                message: "Entreprise not found",
            });
        }

        // Perform the soft delete
        const deletedEntreprise = await Entreprise.destroy({
            where: { id: entrepriseId },
            force: false, // This should indicate soft delete since paranoid is true
        });

        // Check the result of the delete operation
        if (deletedEntreprise === 0) {
            return res.status(404).json({
                success: false,
                message: "Entreprise not found or already deleted",
            });
        }

        // Optionally, log the deleted record state
        const checkDeleted = await Entreprise.findByPk(entrepriseId);
        console.log("Deleted Entreprise State:", checkDeleted); // log state

        return res.json({
            success: true,
            message: "Entreprise deleted successfully",
        });
    } catch (error) {
        console.error("Error soft deleting entreprise:", error);
        return res.status(500).json({
            success: false,
            message: "An error occurred while soft deleting entreprise",
        });
    }
};

exports.findEntrepriseByToken = async (req, res) => {

    const token = req.params.token;
   
    try {
        // Find the user by the verificationToken
        const entreprise = await Entreprise.findOne({
            where: {
                display: token
            }
        });

        if (!entreprise) {
            return res.status(404).json({ message: 'User not found or token expired' });
        }

        // If user is found, return the user data (omit sensitive fields if necessary)
        return res.status(200).json(entreprise);
    } catch (error) {
        console.error(`Error finding entreprise by token: ${error.message}`);
        return res.status(500).json({ message: 'Internal server error' });
    }
};