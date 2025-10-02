const { Op } = require("sequelize");
const Dateuser = require("../models/dateuser.model");
const Datewithtechcontact = require("../models/datewithtechcontact.model");
const { validateContact } = require("../validators/contact.validators");
const db = require("../models");
const { sendMessage, createChannel, checkjwt, deleteChannel } = require("./utils");


exports.getContacts = async (req, res) => {
    try {

        let contacts;

        if (req.query.filter === 'envoie') {
            contacts = await Datewithtechcontact.findAll({
                where: { contactorId: req.query.id },
                order: [
                    ["createdAt", "DESC"]
                ]
            });
        } else {
            contacts = await Datewithtechcontact.findAll({
                where: { contactedId: req.query.id },
                order: [
                    ["createdAt", "DESC"]
                ]
            });
        }

        // Create a result array with contacted entities
        const results = await Promise.all(contacts.map(async contact => {
            const contactedEntity = await getContactedEntity(contact.contactedId);
            const contactorEntity = await getContactedEntity(contact.contactorId);

            return {
                ...contact.toJSON(),
                contacted: contactedEntity,// Append contacted entity
                contactor: contactorEntity
            };
        }));

        res.json({
            data: results,
        });
    } catch (error) {
        console.error("Error fetching contacts:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};


exports.getContact = async (req, res) => {
    const ContactId = req.params.id;
    try {
        const contact = await Datewithtechcontact.findByPk(ContactId);
        if (!contact) {
            return res.status(404).json({ error: "Contact not found" });
        }

        // Fetch contacted and contactor entities
        const contactedEntity = await getContactedEntity(contact.contactedId);
        const contactorEntity = await getContactedEntity(contact.contactorId);

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



exports.addContact = async (req, res) => {
    const ContactData = req.body;

    // Validate incoming contact data
    const { error: validationError } = validateContact(ContactData);
    if (validationError) {
        return res.status(400).json({ error: validationError.details[0].message });
    }

    // Check JWT before proceeding
    const jwt = await checkjwt(req, res, ContactData.contactorId);
    if (!jwt) {
        return res.status(401).json({ error: "Invalid or expired JWT token" });
    }

    try {

        const contacted = await Dateuser.findByPk(ContactData.contactedId, {
            attributes: ['id', 'name', 'gender', 'type', 'chatid', 'display'], // Retrieve only id and name
        });

        if (!contacted) {
            return res.status(404).json({ error: "Contacted entity not found" });
        }

        const contactor = await Dateuser.findByPk(ContactData.contactorId, {
            attributes: ['id', 'name', 'gender', 'type', 'chatid', 'display'], // Retrieve only id and name
        });

        if (!contactor) {
            return res.status(404).json({ error: "Contacted entity not found" });
        }

        // Create a contact record
        const contact = await Datewithtechcontact.create(ContactData);

        // Generate a topic name for the channel
        const topicname = `grpDateContactor${contact.id}contacted${contact.contactedId}`;
        const memberUsername = createMemberUsername(contacted, contactor);

        // Create a channel
        const channelId = await createChannel(topicname, contactor.chatid, contacted.chatid, memberUsername);
        if (!channelId) {
            return res.status(500).json({ error: "Failed to create channel" });
        }

        // Send a message to the channel
        const message = `${ContactData.proposal_description}`;
        const sendMessageResult = await sendMessage(contactor.chatid, message, channelId);
        if (!sendMessageResult) {
            return res.status(500).json({ error: "Failed to send message on the channel" });
        }

        // Prepare and send response
        const response = { ...contact.get(), channelId };
        return res.status(201).json(response);

    } catch (error) {
        console.error("Failed to add contact:", error);
        return res.status(500).json({ error: "Failed to add contact: " + error.message });
    }
};

const getContactedEntity = async (contactedId) => {

    const user = await Dateuser.findByPk(contactedId, {
        attributes: ['id', 'name', 'gender', 'chatid', 'display'], // Retrieve only id and name
    });
    return user ? user.toJSON() : null; // Convert to plain object
};

// Helper function to create member username
const createMemberUsername = (contacted, contactor) => {
    return `DATECONTACTED_${contacted.id}_${contacted.name.replace(/ /g, '_')}_with_DATECONTACTOR_${contactor.id}_${contactor.name.replace(/ /g, '_')}`;
};

exports.deleteContact = async (req, res) => {
    const ContactId = req.params.id;
    try {
        const contact = await Datewithtechcontact.findByPk(ContactId);
        if (!contact) {
            return res
                .status(404)
                .json({
                    success: false,
                    message: "Contact not found or already deleted",
                });
        }
        const topicname = `grpDateContactor${contact.id}contacted${contact.contactedId}`;
        const deletedContact = await Datewithtechcontact.destroy({
            where: { id: ContactId },
            force: false,
        });
        if (deletedContact === 0) {
            return res
                .status(404)
                .json({
                    success: false,
                    message: "Contact not found or already deleted",
                });
        }
        const deletechannel = deleteChannel(topicname);
        if (!deletechannel) {
            console.log('failed to delete channel')
        }
        return res.json({ success: true, message: "Contact deleted successfully" });

    } catch (error) {
        console.error("Error soft deleting Contact:", error);
        return res.status(500).json({
            success: false,
            message: "An error occurred while soft deleting Contact: " + error,
        });
    }
};

