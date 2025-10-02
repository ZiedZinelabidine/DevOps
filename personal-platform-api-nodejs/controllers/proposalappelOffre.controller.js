const { Op } = require("sequelize");
const AppelOffre = require("../models/appeloffre.model");
const AppeloffreProposal = require("../models/appeloffreProposal.model");

const Recruter   = require("../models/recruter.model");
const User   = require("../models/user.model");
const Entreprise   = require("../models/entreprise.model");
const { getchatidbyAppelOffreId } = require("./chatid.controller") ;
const { createChannel, sendMessage, deleteChannel, checkjwt} = require("./utils");


const { validateProposalAppelOffre } = require("../validators/proposalappeloffre.validators");
const db = require("../models");


exports.getProposalsAppelOffre = async(req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const offset = (page - 1) * limit;

        const filters = {};

   
        if (req.query.appeloffreId) {
            filters.appeloffreId = req.query.appeloffreId;
        }

        if (req.query.applierId && req.query.applierType) {
            filters.applierId = req.query.applierId;
            filters.applierType = req.query.applierType;

        }
   
        const { count, rows: ProposalAppelOffre } = await AppeloffreProposal.findAndCountAll({
            where: filters,
            offset: offset,
            limit: limit,
            order: [
                ['createdAt', 'DESC']
            ]
        });

        const totalPages = Math.ceil(count / limit);
        res.json({
            data: ProposalAppelOffre,
            pagination: {
                totals: count,
                totalPages: totalPages,
                currentPage: page,
            },
        });
    } catch (ex) {
        console.error("Error fetching ProposalAppelOffre:", ex);
        res.status(500).json({ error: "Internal server error" });
    }
};

exports.getAppeloffreProposal = async (req, res) => {
    const proposalappelOffreId = req.params.id;

    try {
        // Retrieve the proposal
        const proposalappelOffre = await AppeloffreProposal.findByPk(proposalappelOffreId);

        // Check if proposal exists before accessing its properties
        if (!proposalappelOffre) {
            return res.status(404).json({ error: "ProposalappelOffre not found" });
        }

        // Retrieve the related appelOffre using the associated ID from the proposal
        const appelOffre = await AppelOffre.findByPk(proposalappelOffre.appeloffreId);
        
        // Verify if appelOffre exists
        if (!appelOffre) {
            return res.status(404).json({ error: "AppelOffre not found" });
        }

        // Fetch user entities using the appropriate types
        const recruterEntity = await getUserEntity("RECRUTER", appelOffre.recruterId);
        const applierEntity = await getUserEntity(proposalappelOffre.applierType, proposalappelOffre.applierId);

        // Create the result object
        const result = {
            ...proposalappelOffre.toJSON(),
            recruter: recruterEntity, // Append recruiter entity
            applier: applierEntity     // Append applicant entity
        };

        return res.status(200).json({ data: result });
    } catch (error) {
        console.error("Failed to fetch appelOffre:", error);
        return res.status(500).json({ error: "Failed to fetch appelOffre" });
    }
};


exports.addProposalAppelOffre = async (req, res) => {
    const proposalAppelOffreData = req.body;

    // Validate incoming proposal data
    const { error } = validateProposalAppelOffre(proposalAppelOffreData);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    // Fetch the associated appelOffre
    const appelOffre = await AppelOffre.findByPk(proposalAppelOffreData.appeloffreId);
    if (!appelOffre) {
        return res.status(404).json({ error: "AppelOffre not found" });
    }

    const jwt= await checkjwt(req, res, proposalAppelOffreData.applierId);

    if(!jwt){
        return res.status(401).json({ error: "checkjwt not ok " });

    }

    // Fetch the user based on the applicant type
    const user = await findUserByType(proposalAppelOffreData.applierId, proposalAppelOffreData.applierType);
    if (!user) {
        return res.status(500).json({ error: "Failed to fetch applier" });
    }

    // Check for existing proposals
    const proposalExists = await checkExistingProposals(proposalAppelOffreData);
    if (proposalExists) {
        return res.status(400).json({ error: "Failed to add proposal because it already exists" });
    }

    let transaction;
    try {
        transaction = await db.connection.transaction();

        // Create the new proposal
        const appeloffreProposal = await AppeloffreProposal.create(proposalAppelOffreData, { transaction });

        // Create chat channel with the recruiter
        const recruter = await getchatidbyAppelOffreId(appeloffreProposal.appeloffreId);
        if (!recruter) {
            await transaction.rollback();
            return res.status(500).json({ error: "Failed to fetch recruter" });
        }

        const topicname = `grpContrat${appeloffreProposal.appeloffreId}appeloffreproposal${appeloffreProposal.id}`;
        const memberUsername = `CANDIDAT_${user.id}_${user.name.replace(/ /g, '_')}_${user.first_name.replace(/ /g, '_')}_with_RECRUTER_${recruter.id}_${recruter.name.replace(/ /g, '_')}_${recruter.first_name.replace(/ /g, '_')}`;
        const channelId = await createChannel(topicname, user.chatid, recruter.chatid,memberUsername );
        if (!channelId) {
            await transaction.rollback();
            return res.status(500).json({ error: "Failed to create channel: " +error });
        }
       
           // Send a message to the channel
           const message = `Hello, I have a proposal for you: ${proposalAppelOffreData.proposal_description} `;
           const sendmessage = await sendMessage(user.chatid, message, channelId);
           
           if (!sendmessage) {
              return res.status(500).json({ error: "Failed to create channel: " +error });
           }

        // Prepare the response
        const response = { ...appeloffreProposal.get(), channelId , recruter: recruter  };

        // Commit the transaction
        await transaction.commit();
        return res.status(201).json(response);

    } catch (error) {
        if (transaction) await transaction.rollback();
        console.error("Failed to add proposal:", error);
        return res.status(500).json({ error: "Failed to add proposal: " +error });
    }
};

// Function to find user based on type
const findUserByType = async (userId, userType) => {
    switch (userType) {
        case 'ENTREPRISE':
            return await Entreprise.findByPk(userId);
        case 'CANDIDAT':
            return await User.findByPk(userId);
        case 'RECRUTER':
            return await Recruter.findByPk(userId);
        default:
            return null; // Invalid user type
    }
};

// Function to check for existing proposals
const checkExistingProposals = async (proposalAppelOffreData) => {
    const filters = {
        appeloffreId: proposalAppelOffreData.appeloffreId,
        applierId: proposalAppelOffreData.applierId,
        applierType: proposalAppelOffreData.applierType,
    };

    const { count } = await AppeloffreProposal.findAndCountAll({ where: filters });
    return count > 0;
};


exports.deleteProposalAppelOffre = async(req, res) => {
    const proposalAppelOffreId = req.params.id;
    const appelOffreProposal = await AppeloffreProposal.findByPk(proposalAppelOffreId);

    try {
        const deletedProposalAppelOffre = await AppeloffreProposal.destroy({
            where: { id: proposalAppelOffreId },
            force: false,
        });

        if (deletedProposalAppelOffre === 0) {
            return res
                .status(404)
                .json({
                    success: false,
                    message: "proposalAppelOffre not found or already deleted",
                });
        }

        const _id = `grpContrat${appelOffreProposal.appeloffreId}appeloffreproposal${appelOffreProposal.id}`;   
        const deletechannel = deleteChannel(_id) ;
        if(!deletechannel) {
            console.log('failed to delete channel')
        }

        return res.json({ success: true, message: "proposalAppelOffre deleted successfully" });
    } catch (error) {
        console.error("Error soft deleting proposalAppelOffre:", error);
        return res.status(500).json({
            success: false,
            message: "An error occurred while soft deleting proposalAppelOffre: " +error,
        });
    }
};

const getUserEntity = async (userType, userId) => {
    switch (userType) {
        case 'ENTREPRISE':
            const entreprise = await Entreprise.findByPk(userId, {
                attributes: ['id', 'username', 'type','chatid', 'display'], // Retrieve only id and name
            });
            return entreprise ? entreprise.toJSON() : null; // Convert to plain object
        case 'CANDIDAT':
            const candidat = await User.findByPk(userId, {
                attributes: ['id', 'name', 'first_name', 'type','chatid', 'display'], // Retrieve only id and name
            });
            return candidat ? candidat.toJSON() : null; // Convert to plain object
        case 'RECRUTER':
            const recruter = await Recruter.findByPk(userId, {
                attributes: ['id', 'name', 'first_name' , 'type','chatid', 'display'], // Retrieve only id and name
            });
            return recruter ? recruter.toJSON() : null; // Convert to plain object
        default:
            throw new Error("Invalid contacted type");
    }
};