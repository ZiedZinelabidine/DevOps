const Exchangerate = require("../models/exchangerate.model");
const {
    validateExchangerate,
    validateExchangerateUpdate
} = require("../validators/exchangerate.validators");

exports.getExchangerates = async(req, res) => {
    try {

        const filters = {};

        filters.currency = req.query.currency;


        const exchangerate  = await Exchangerate.findOne({
            where: filters
        });

        res.json({
            data: exchangerate,
         });
    } catch (ex) {
        console.error("Error fetching exchangerate:", ex);
        res.status(500).json({ error: "Internal server error: " +ex});
    }
};


exports.addExchangerate = async(req, res) => {
    const exchangerateData = req.body;
    const { error } = validateExchangerate(exchangerateData);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    try {
        const exchangerate = await Exchangerate.create(exchangerateData);
        return res.status(201).json(exchangerate);
    } catch (error) {
        console.error("Failed to add exchangerate:", error);
        return res.status(500).json({ error: "Failed to add exchangerate: " +error });
    }
};

exports.updateExchangerate = async(req, res) => {
    const exchangerateId = req.params.id;
    const exchangerateData = req.body;

    const { error } = validateExchangerateUpdate(exchangerateData);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    try {
        const existingexchangerate = await Exchangerate.findByPk(exchangerateId);
        if (!existingexchangerate) {
            return res.status(404).json({ error: "exchangerate not found" });
        }

        await existingexchangerate.update(exchangerateData);

        const updatedexchangerate = await Exchangerate.findByPk(exchangerateId);

        return res.status(200).json(updatedexchangerate);
    } catch (error) {
        console.error("Failed to update exchangerate:", error);
        return res.status(500).json({ error: "Failed to update exchangerate : " +error});
    }
};

exports.deleteExchangerate = async(req, res) => {
    const exchangerateId = req.params.id;
    try {
        const deletedexchangerate = await Exchangerate.destroy({
            where: { id: exchangerateId },
            force: false,
        });
        if (deletedexchangerate === 0) {
            return res.status(404).json({
                success: false,
                message: "exchangerate not found or already deleted",
            });
        }
        return res.json({
            success: true,
            message: "exchangerate deleted successfully",
        });
    } catch (error) {
        console.error("Error soft deleting exchangerate:", error);
        return res.status(500).json({
            success: false,
            message: "An error occurred while soft deleting exchangerate: " +error,
        });
    }
};