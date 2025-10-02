const { Op } = require("sequelize");
const Contact   = require("../models/contact.model");
const Recruter   = require("../models/recruter.model");
const Entreprise   = require("../models/entreprise.model");
const User   = require("../models/user.model");
const { getchatidbyUserId } = require("./chatid.controller");
const {validateContact } = require("../validators/contact.validators");
const db = require("../models");
const { sendMessage, createChannel, getContacts, checkjwt, deleteChannel } = require("./utils");

// Adjusting the getItGalaxyContacts function
exports.getItGalaxyContacts = async (req, res) => {
    try {
        // Pagination parameters
        const page = parseInt(req.query.page, 10) || 1; // Current page
        const limit = parseInt(req.query.limit, 10) || 10; // Number of results per page
        const offset = (page - 1) * limit; // Calculate offset for pagination

        // Initialize filters
        const filters = {};
        filters.status = 'ACTIVE'; 

        // Apply filters based on query parameters
        if (req.query.type) {
            filters.type = req.query.type; // Filter by User, Recruiter, etc.
        } else {
            filters.type = 'ALL'; // Default to fetching all types if not specified
        }

          // Optional filters
        if (req.query.name) {
            filters.name = req.query.name; // Filter by name
        }

        if (req.query.email) {
            filters.email = req.query.email; // Filter by email
        }

        if (req.query.usernamechat) {
            filters.usernamechat = req.query.usernamechat; // Filter by username
        }

        if (req.query.country_details) {
            filters.country_details = req.query.country_details; // Filter by country details
        }

        if (req.query.search) {
            const search = req.query.search;
            filters.description = {
                [Op.iLike]: `%${search}%`,
            };
        }
     
        // Call the getContacts function with filters and pagination
        const contactsData = await getContacts(filters, { offset, limit });

        const totalUsers = contactsData.counts.users;  // Get total users count
        const totalEntreprises = contactsData.counts.entreprises; // Get total entreprises count

        // Combine all results from different categories
        const allContacts = [
            ...contactsData.users,
            ...contactsData.entreprises,
        ];

        // Calculate total count and total pages
        const totalCount = totalUsers + totalEntreprises ; // Total number of contacts
        const totalPages = Math.ceil(totalCount / limit); // Calculate total pages

        // Sort the combined contacts by the 'created' field (if it exists)
        allContacts.sort((a, b) => new Date(b.created) - new Date(a.created)); // Sort in descending order

        // Send the response along with the contacts and pagination details
        res.status(200).json({
            data: allContacts,
            pagination: {
                total: totalCount,
                totalPages: totalPages,
                currentPage: page,
            },
        });

    } catch (error) {
        console.error('Error fetching contacts:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


exports.getContacts = async (req, res) => {
    try {
        const page = parseInt(req.query.page, 10) || 1; // Current page
        const limit = parseInt(req.query.limit, 10) || 10; // Number of results per page
        const offset = (page - 1) * limit; // Calculate offset for pagination

        // Initialize the filters object to build dynamic queries
        const filters = {};

        if (req.query.contactorId) {
            filters.contactorId = req.query.contactorId;
        }

        if (req.query.contactedType) {
            filters.contactedType = req.query.contactedType;
        }

        if (req.query.contactedId && req.query.contactedType) {
            filters.contactedId = req.query.contactedId;
            filters.contactedType = req.query.contactedType;      
        }

        // Fetch contacts
        const { count, rows: contacts } = await Contact.findAndCountAll({
            where: filters,
            offset: offset,
            limit: limit,
        });

        const totalPages = Math.ceil(count / limit);

        // Create a result array with contacted entities
        const results = await Promise.all(contacts.map(async contact => {
            const contactedEntity = await getContactedEntity(contact.contactedType, contact.contactedId);
            const contactorEntity = await getContactedEntity('RECRUTER', contact.contactorId);

            return {
                ...contact.toJSON(),
                contacted: contactedEntity ,// Append contacted entity
                contactor: contactorEntity
            };
        }));

        res.json({
            data: results,
            pagination: {
                totals: count,
                totalPages: totalPages,
                currentPage: page,
            },
        });
    } catch (error) {
        console.error("Error fetching contacts:", error);
        res.status(500).json({ error: "Internal server error" });
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
        // Fetch recruiter and contacted entity
        const recruter = await Recruter.findByPk(ContactData.contactorId);
        if (!recruter) {
            return res.status(404).json({ error: "Recruiter not found" });
        }

        const contacted = await getContactedEntity(ContactData.contactedType, ContactData.contactedId);
        if (!contacted) {
            return res.status(404).json({ error: "Contacted entity not found" });
        }

        // Create a contact record
        const contact = await Contact.create(ContactData);

        // Generate a topic name for the channel
        const topicname = `grpContactor${contact.id}contacted${contact.contactedType}${contact.contactedId}`;
        const memberUsername = createMemberUsername(contacted, recruter);

        // Create a channel
        const channelId = await createChannel(topicname, recruter.chatid, contacted.chatid, memberUsername);
        if (!channelId) {
            return res.status(500).json({ error: "Failed to create channel" });
        }

        // Send a message to the channel
        const message = `Hello, I have a proposal for you: ${ContactData.proposal_description}`;
        const sendMessageResult = await sendMessage(recruter.chatid, message, channelId);
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

const getContactedEntity = async (contactedType, contactedId) => {
    switch (contactedType) {
        case 'ENTREPRISE':
            const entreprise = await Entreprise.findByPk(contactedId, {
                attributes: ['id', 'username', 'type','chatid', 'display'], // Retrieve only id and name
            });
            return entreprise ? entreprise.toJSON() : null; // Convert to plain object
        case 'CANDIDAT':
            const candidat = await User.findByPk(contactedId, {
                attributes: ['id', 'name', 'first_name', 'type','chatid', 'display'], // Retrieve only id and name
            });
            return candidat ? candidat.toJSON() : null; // Convert to plain object
        case 'RECRUTER':
            const recruter = await Recruter.findByPk(contactedId, {
                attributes: ['id', 'name', 'first_name' , 'type','chatid', 'display'], // Retrieve only id and name
            });
            return recruter ? recruter.toJSON() : null; // Convert to plain object
        default:
            throw new Error("Invalid contacted type");
    }
};

// Helper function to create member username
const createMemberUsername = (contacted, recruter) => {
    if (contacted.type === 'ENTREPRISE') {
        return `${contacted.type}_${contacted.id}_${contacted.username.replace(/ /g, '_')}_with_recruter_${recruter.id}_${recruter.name.replace(/ /g, '_')}_${recruter.first_name.replace(/ /g, '_')}`;
    } else {
        return `${contacted.type}_${contacted.id}_${contacted.name.replace(/ /g, '_')}_${contacted.first_name.replace(/ /g, '_')}_with_recruter_${recruter.id}_${recruter.name.replace(/ /g, '_')}_${recruter.first_name.replace(/ /g, '_')}`;
    }
};


exports.deleteContact = async(req, res) => {
    const ContactId = req.params.id;
    try {
        const contact = await Contact.findByPk(ContactId);       
        if(!contact) {
            return res
            .status(404)
            .json({
                success: false,
                message: "Contact not found or already deleted",
            });
        }
        const topicname = `grpContactor${contact.id}contacted${contact.contactedType}${contact.contactedId}`;
        const deletedContact = await Contact.destroy({
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
        const deletechannel = deleteChannel(topicname) ;
        if(!deletechannel) {
            console.log('failed to delete channel')
        }
        return res.json({ success: true, message: "Contact deleted successfully" });

    } catch (error) {
        console.error("Error soft deleting Contact:", error);
        return res.status(500).json({
            success: false,
            message: "An error occurred while soft deleting Contact: " +error,
        });
    }
};