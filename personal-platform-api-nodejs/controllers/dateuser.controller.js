const { Op } = require("sequelize");
const Dateuser   = require("../models/dateuser.model");

const {validateUserPatch , validateContact } = require("../validators/dateuser.validators");
const db = require("../models");
const { sendMessage, createChannel, checkjwt, deleteChannel } = require("./utils");

exports.getDateUsers = async (req, res) => {

    try {
        // Initialize filters
        const filters = { status: 'ACTIVE' };

        if (req.query.id) {
            filters.id = { [Op.ne]: req.query.id }; // Use Op.ne for "not equal"
        }
        
        if (req.query.gender) {
            filters.gender = req.query.gender;
        }

        // Fetch contacts
        const dateusers = await Dateuser.findAll({
            where: filters,
            order: [['createdAt', 'DESC']] // Make sure 'createdAt' is a valid field in your model
        });

        // Send the response along with the contacts
        res.status(200).json({
            data: dateusers,
        });

    } catch (error) {
        console.error('Error fetching dateusers:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.findDatauserByToken = async (req, res) => {

    const token = req.params.token;
   
    try {
        // Find the user by the verificationToken
        const user = await Dateuser.findOne({
            where: {
                display: token
            }
        });

        if (!user) {
            return res.status(404).json({ message: 'User not found or token expired' });
        }

        // If user is found, return the user data (omit sensitive fields if necessary)
        return res.status(200).json(user);
    } catch (error) {
        console.error(`Error finding user by token: ${error.message}`);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

exports.getDateuser = async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await Dateuser.findByPk(userId);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        return res.status(200).json({ data: user });
    } catch (error) {
        console.error("Failed to update user:", error);
        return res.status(500).json({ error: "Failed to update user : " + error });
    }
};


exports.updateDateuser = async (req, res) => {
    const userId = req.params.id;
    const userData = req.body;
    const { error } = validateUserPatch(userData);


    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    try {
        const existingUser = await Dateuser.findByPk(userId);
        if (!existingUser) {
            return res.status(404).json({ error: "User not found" });
        }

        await existingUser.update(userData);
        const updatedUser = await Dateuser.findByPk(userId);
        return res.status(200).json(updatedUser);

    } catch (error) {
        console.error("Failed to update user:", error);
        return res.status(500).json({ error: "Failed to update user : " + error });
    }
};


exports.getContact = async (req, res) => {
    const ContactId = req.params.id;
    try {
        const contact = await Contact.findByPk(ContactId);
        if (!contact) {
            return res.status(404).json({ error: "Contact not found" });
        }

        // Fetch contacted and contactor entities
        const contactedEntity = await getContactedEntity(contact.contactedType, contact.contactedId);
        const contactorEntity = await getContactedEntity('RECRUTER', contact.contactorId);

        // Create the result object
        const result = {
            ...contact.toJSON(),
            contacted: contactedEntity, // Append contacted entity
            contactor: contactorEntity   // Append contactor entity
        };

        return res.status(200).json({ data: result });
    } catch (error) {
        console.error("Failed to fetch contact:", error);
        return res.status(500).json({ error: "Failed to fetch contact: " + error.message });
    }
};
