const WithdrawalMethod = require("../models/withdrawalMethod.model");
const axios = require('axios');
const User = require("../models/user.model");
const Recruter = require("../models/recruter.model");
const Accounting = require("../models/accounting.model");
const { validateWithdrawalMethod, validateWithdrawalMethodUpdate } = require("../validators/withdrawalMethod.validators");
const { findWithdrawalMethodByUserId, checkjwt } = require("./utils");
const revoluteController = require("../controllers/revolute.controller.js");


exports.createWithdrawalMethod = async (req, res) => {
    const withdrawalMethodData = req.body;
    const jwt = await checkjwt(req, res, withdrawalMethodData.userId);

    if (!jwt) {
        return res.status(401).json({ error: "Checkjwt not ok." });
    }

    try {
        let user;
        switch (withdrawalMethodData.typeUser) {
            case 'CANDIDAT':
                user = await User.findByPk(withdrawalMethodData.userId);
                break;
            case 'RECRUTER':
                user = await Recruter.findByPk(withdrawalMethodData.userId);
                break;
            case 'ACCOUNTING':
                user = await Accounting.findByPk(withdrawalMethodData.userId);
                break;
            default:
                return res.status(400).json({ error: "Invalid user type." });
        }

        if (!user) {
            return res.status(404).json({ error: "User not found." });
        }

        const existingWithdrawalMethods = await findWithdrawalMethodByUserId(withdrawalMethodData.userId, withdrawalMethodData.typeUser);

        if (existingWithdrawalMethods && existingWithdrawalMethods.dataValues) {
            return res.status(400).json({ error: "Withdrawal method already exists." });
        }

        const { error } = validateWithdrawalMethod(withdrawalMethodData);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        const withdrawalMethod = await WithdrawalMethod.create(withdrawalMethodData);

        const counterPartyData = {
            name: `${user.name} ${user.first_name}`,
            company_name: withdrawalMethod.owner_bank_account,
            accountType: 'BUSINESS',
            currency: withdrawalMethod.currency,
            iban: withdrawalMethod.iban,
            bank_country: withdrawalMethod.bank_country,
        };

        // Ensure that createCounterparty returns a promise
        const counterParty = await revoluteController.createCounterparty(counterPartyData);
  
        // Check if the counterparty creation was successful
        if (counterParty.success) {
            await WithdrawalMethod.update({ withdrawalMethod_description: 'CREATED_ON_REVOLUT', revolute_counterpartieId: counterParty.id ,revolute_counterpartie_accountId: counterParty.accountId }, { where: { id: withdrawalMethod.id } });

        } else {
            await WithdrawalMethod.update({ withdrawalMethod_description: 'ERROR_CREATION_REVOLUT', control_comment: counterParty.error }, { where: { id: withdrawalMethod.id } });
        }

        return res.status(201).json({ data: withdrawalMethod });


    } catch (error) {
        console.error("Error creating withdrawal method:", error);
        return res.status(500).json({ error: "An error occurred while creating withdrawal method: " + error.message });
    }
};

exports.getWithdrawalMethods = async (req, res) => {
    try {
        const userId = req.query.userId;
        const typeUser = req.query.typeUser;
        const withdrawalMethods = await WithdrawalMethod.findAll({
            where: { userId: userId, typeUser: typeUser },
            order: [
                ["createdAt", "DESC"]
            ],
        });
        return res.json({ data: withdrawalMethods });
    } catch (error) {
        console.error("Error fetching withdrawal methods:", error);
        return res.status(500).json({ error: "An error occurred while fetching withdrawal methods : " + error });
    }
};

exports.getWithdrawalMethod = async (req, res) => {
    try {
        const withdrawalMethodId = req.params.id;
        const withdrawalMethod = await WithdrawalMethod.findByPk(withdrawalMethodId);
        return res.json({ data: withdrawalMethod });
    } catch (error) {
        console.error("Error fetching withdrawal methods:", error);
        return res.status(500).json({ error: "An error occurred while fetching withdrawal methods : " + error });
    }
};

exports.updateWithdrawalMethod = async (req, res) => {
    const withdrawalMethodId = req.params.id;
    const withdrawalMethodData = req.body;

    const { error } = validateWithdrawalMethodUpdate(withdrawalMethodData);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    try {
        const existingWithdrawalMethod = await WithdrawalMethod.findByPk(withdrawalMethodId);
        if (!existingWithdrawalMethod) {
            return res.status(404).json({ error: "Withdrawal method not found" });
        }

        await existingWithdrawalMethod.update(withdrawalMethodData);
        const updatedWithdrawalMethod = await WithdrawalMethod.findByPk(withdrawalMethodId);

        return res.status(200).json(updatedWithdrawalMethod);

    } catch (error) {
        console.error("Failed to update withdrawal method:", error);
        return res.status(500).json({ error: "Failed to update withdrawal method : " + error });
    }
};

exports.deleteWithdrawalMethod = async (req, res) => {
    const withdrawalMethodId = req.params.id;
    try {
        const withdrawalMethod = await WithdrawalMethod.findByPk(withdrawalMethodId);
       
        if (!withdrawalMethod) {
            return res.status(404).json({ error: "Withdrawal method not found." });
        }

        // Ensure you have the correct ID for the counterparty linked to this withdrawal method
        const counterpartyId = withdrawalMethod.revoluteId; // Adjust this as per your withdrawal method model
        const deletedCounterParty = await revoluteController.deleteCounterparty(counterpartyId);

        // Check if the counterparty deletion was successful
        if (!deletedCounterParty.success) {
            return res.status(500).json({
                success: false,
                message: "An error occurred while deleting the counterparty: " + deletedCounterParty.error,
            });
        }

        const deletedWithdrawalMethod = await WithdrawalMethod.destroy({
            where: { id: withdrawalMethodId },
            force: false,
        });

        if (deletedWithdrawalMethod === 0) {
            return res.status(404).json({
                success: false,
                message: "Withdrawal method not found or already deleted.",
            });
        }

        return res.json({ success: true, message: "Withdrawal method deleted successfully." });
    } catch (error) {
        console.error("Error deleting withdrawal method:", error);
        return res.status(500).json({
            success: false,
            message: "An error occurred while deleting the withdrawal method: " + error.message,
        });
    }
};