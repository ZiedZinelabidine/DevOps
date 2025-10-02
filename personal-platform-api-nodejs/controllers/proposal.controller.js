const Proposal = require("../models/proposal.model");
const Project = require("../models/project.model");
const User = require("../models/user.model");
const Entreprise = require("../models/entreprise.model");
const { validateProposal, validateUpdateProposal } = require("../validators/proposal.validators");
const paymentController = require("../controllers/payment.controller");
const commentController = require("../controllers/comment.controller");
const { calculBalanceRecruterAndRecruted, createChannel, sendMessage, deleteChannel, checkjwt } = require("./utils");
const { findRecrutementIdFromUserId } = require("../controllers/recrutement.controller");
const { getchatidbyProjectId, getchatidbyUserId } = require("./chatid.controller");
const db = require("../models");

exports.addProposal = async (req, res) => {
    const projectId = req.body.projectId;
    const proposalData = req.body;
    let transaction;

    // Verify that the project exists and is of the correct type
    const project = await Project.findByPk(projectId);
    if (!project) {
        return res.status(404).json({ error: `Project not found for ProjectId ${projectId}` });
    }

    if (project.type !== 'SHARETASK') {
        return res.status(404).json({ error: `Project with ProjectId ${projectId} isn't a share task` });
    }

    // Validate the proposal data
    const { error } = validateProposal(proposalData);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    // Check if a proposal already exists for this project and user
    const filters = {
        projectId,
        userId: proposalData.userId
    };

    const { count, rows: proposals } = await Proposal.findAndCountAll({ where: filters });
    if (count > 0) {
        return res.status(400).json({ error: "Failed to add proposal because it already exists" });
    }

    try {
        transaction = await db.connection.transaction();

        // Add projectId to proposal data for creation
        proposalData.projectId = projectId;
        const proposal = await Proposal.create(proposalData, { transaction });

        // Fetch entreprise information
        const entreprise = await getchatidbyProjectId(proposal.projectId);

        if (!entreprise) {
            return await handleTransactionError(transaction, res, "Failed to fetch entreprise");
        }

        const user = await User.findOne({ where: { id: proposalData.userId } });


        // Create a channel for communication
        const topicname = `grpSHARETASK${proposal.projectId}proposal${proposal.id}`;
        const memberUsername = `CANDIDAT_${user.id}_${user.name.replace(/ /g, '_')}_${user.first_name.replace(/ /g, '_')}_with_ENTREPRISE_${entreprise.id}_${entreprise.username.replace(/ /g, '_')}`;
        const channelId = await createChannel(topicname, user.chatid, entreprise.chatid, memberUsername);

        if (!channelId) {
            return await handleTransactionError(transaction, res, "Failed to create channel");
        }

        // Send a message to the channel
        const message = `Hello, I have a proposal for you: ${proposalData.proposal_description} , the budget is ${proposalData.price} euro`;
        const sendmessage = await sendMessage(user.chatid, message, channelId);
        if (!sendmessage) {
            return await handleTransactionError(transaction, res, "Failed to create message on the channel");
        }

        // Prepare and respond with the created proposal data
        const response = {
            ...proposal.get(),
            channelId: channelId,
            entreprise : entreprise
        };

        await transaction.commit();
        return res.status(201).json(response);

    } catch (error) {
        if (transaction) await transaction.rollback();
        console.error("Failed to add proposal:", error);
        return res.status(500).json({ error: "Failed to add proposal: " + error });
    }
};

// Helper function to handle transaction errors and rollback
const handleTransactionError = async (transaction, res, errorMessage) => {
    if (transaction) await transaction.rollback();
    return res.status(500).json({ error: errorMessage });
};


exports.getProposals = async (req, res) => {

    try {
        const projectId = req.query.projectId;
        const project = await Project.findByPk(projectId);
        if (!project) {
            return res.status(404).json({ error: "Project not found for ProjectId " + projectId });
        }
        const proposals = await Proposal.findAll({
            where: {
                projectId: projectId,
            },
        });
        if (!req.user.role == "ENTREPRISE" || project.entrepriseId != req.user.id) {
            return res.status(403).json({
                message: "Forbidden - Insufficient permissions",
            });
        }
        res.json({ data: proposals });
    } catch (ex) {
        console.error("Error fetching projects:", ex);
        res.status(500).json({ error: "Internal server error : " + ex });
    }
};

exports.getProposal = async (req, res) => {
    const proposalId = req.params.id;
    try {
        const proposal = await Proposal.findByPk(proposalId, {
            include: [
                {
                    model: Project,
                    attributes: ['id', 'title', 'project_description', 'status', 'price'],
                    include: [
                        {
                            model: Entreprise,
                            attributes: ['id', 'username'] // Add the entreprise username here
                        }
                    ]
                },
                {
                    model: User,
                    attributes: ['id', 'name', 'first_name']
                },
            ]
        });

        if (!proposal) {
            return res.status(404).json({ error: "Proposal not found" });
        }
        return res.status(200).json({ data: proposal });
    } catch (error) {
        console.error("Failed to fetch proposal:", error);
        return res.status(500).json({ error: "Failed to fetch proposal: " + error });
    }
};



exports.getUserProposals = async (req, res) => {
    const userId = req.body.userId;
    const jwt = await checkjwt(req, res, userId);

    if (!jwt) {
        return res.status(401).json({ error: "checkjwt not ok " });
    }

    try {
        const proposals = await Proposal.findAll({
            where: { userId: userId },
            order: [
                ["createdAt", "DESC"]
            ]
        });
        return res.json({
            data: proposals,
        });
    } catch (error) {
        console.error("Error on fetching proposals:", error);
        return res.status(500).json({
            success: false,
            message: "An error occurred while fetching proposals : " + error,
        });
    }
}

const updateProposalAndBalance = async (proposalData, existingProposal, transaction) => {
    try {
        const recruitement = await findRecrutementIdFromUserId(existingProposal.userId);

        // If recruitment ID exists, calculate balance for recruiter and recruited
        if (recruitement.id) {
            return await calculBalanceRecruterAndRecruted(
                existingProposal.price,
                recruitement.id,
                existingProposal.userId,
                transaction
            );
        }

        // Fetch the user to update balance
        const user = await User.findOne({
            where: { id: existingProposal.userId },
            transaction
        });

        // Handle user not found
        if (!user) {
            await rollbackTransactionIfExists(transaction);
            console.error("User not found for userId:", existingProposal.userId);
            return false;
        }

        // Calculate and update user's balance
        const newBalance = user.balance_details + existingProposal.price;
        await User.update(
            { balance_details: newBalance },
            { where: { id: existingProposal.userId }, transaction }
        );

        // Update the proposal with new data
        await Proposal.update(proposalData, {
            where: { id: existingProposal.id },
            transaction,
        });

        return true;

    } catch (error) {
        console.error('Transaction failed:', error);
        await rollbackTransactionIfExists(transaction); // Ensure rollback on error
        return false;
    }
};

// Helper function to rollback transaction if it exists
const rollbackTransactionIfExists = async (transaction) => {
    if (transaction) {
        await transaction.rollback();
    }
};


const finish = async (existingProposal, proposalData, comment, req, transaction, res , user) => {
    try {

        // Update proposal and balance
        const isUpdated = await updateProposalAndBalance(proposalData, existingProposal, transaction);
        if (!isUpdated) {
            return res.status(500).json({ error: "Failed to update proposal and balance" });
        }

        // Prepare comment data
        const commentData = {
            userId: existingProposal.userId,
            commentedId: req.user.id,
            CommentedType: req.user.role,
            commentedUserName: req.user.username,
            workId: existingProposal.id,
            workType: "SHARETASK",
            stars: comment.stars,
            comment_text: comment.comment_text
        };

        // Create comment
        const isCommentCreated = await commentController.createComment(commentData);
        if (!isCommentCreated) {
            return res.status(500).json({ error: "Failed to create comment" });
        }

        // Retrieve the updated proposal
        const updatedProposal = await Proposal.findByPk(existingProposal.id);

        const entreprise = await getchatidbyUserId(req.user.id, 'ENTREPRISE');

        if (!entreprise) {
            return res.status(500).json({ error: "Failed to create comment" });
        }

        const topicname = `grpSHARETASK${existingProposal.projectId}proposal${existingProposal.id}`;
        const message = `Hello, the client was statifad by your work , and the payment is activated `;
        await sendMessage(entreprise.chatid, message, topicname);

        await Project.update(
            { status: 'INPROGRESS' }, // This is the data object
            { 
                where: { id: updatedProposal.projectId }, // Here is the where clause for the condition
                transaction: transaction // Passing the transaction object if you're using transactions
            }
           );

        // Commit the transaction
        await transaction.commit();
        return res.status(200).json({
            data: updatedProposal,
            user: user
          });

    } catch (error) {
        console.error("Error finishing proposal:", error);
        if (transaction) await transaction.rollback();
        return res.status(500).json({ error: "Failed to finish proposal: " + error });
    }
};

exports.updateProposal = async (req, res) => {
    const proposalId = req.params.id;
    const proposalData = req.body.proposalData;
    const comment = req.body.comment;
    let transaction;

    const { error } = validateUpdateProposal(proposalData);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    try {
        transaction = await db.connection.transaction();
        const existingProposal = await Proposal.findByPk(proposalId);
        if (!existingProposal) {
            return res.status(404).json({ error: "Proposal not found" });
        }
        const entreprise = await getchatidbyUserId(req.user.id, 'ENTREPRISE');

        if (!entreprise) {
            throw new Error("Failed to fetch user");
        }

         const user = await getchatidbyUserId(existingProposal.userId, 'CANDIDAT');

        if (!user) {
          return res.status(500).json({ error: "User not found" });
        }
     

        // If status is "VALIDATED" update proposal and execute payment
        if (proposalData.status == "FINISHED") {

            return await finish(existingProposal, proposalData, comment, req, transaction, res);

        } else {

            await existingProposal.update(proposalData);
            const updatedProposal = await Proposal.findOne({ where: { id: proposalId } });

            if (proposalData.status == "DECLINED") {

                await Project.update(
                    { status: 'INPROGRESS' }, // This is the data object
                    { 
                        where: { id: existingProposal.projectId }, // Here is the where clause for the condition
                        transaction: transaction // Passing the transaction object if you're using transactions
                    }
                   );

                const topicname = `grpSHARETASK${existingProposal.projectId}proposal${existingProposal.id}`;
                const message = `Hello, your proposal was declined by the client for this reason : ${existingProposal.proposal_description}`;
                await sendMessage(entreprise.chatid, message, topicname);

            } else if (proposalData.status == "VALIDATED") {

                await Project.update(
                    { status: 'INPROGRESS' }, // This is the data object
                    { 
                        where: { id: existingProposal.projectId }, // Here is the where clause for the condition
                        transaction: transaction // Passing the transaction object if you're using transactions
                    }
                   );

                const topicname = `grpSHARETASK${existingProposal.projectId}proposal${existingProposal.id}`;
                const message = `Hello, your proposal was validated, and the budget ${existingProposal.price} euro was payed and blocked , you need to finish the work to Activate the payment`;
                await sendMessage(entreprise.chatid, message, topicname);

            }

            return res.status(200).json({
                data: updatedProposal,
                user: user
              });
        }
    } catch (error) {
        console.error("Error on updating proposal:", error);
        return res.status(500).json({
            success: false,
            message: "An error occurred while updating proposal : " + error,
        });
    }
}

exports.deleteProposal = async (req, res) => {
    const proposalId = req.params.id;
    try {
        const proposal = await Proposal.findByPk(proposalId);

        if (!proposal) {
            return res.status(404).json({
                success: false,
                message: "Proposal not found or already deleted",
            });
        }
        const deleteProposal = await Proposal.destroy({
            where: { id: proposalId },
            force: false,
        });

        if (deleteProposal === 0) {
            return res.status(404).json({
                success: false,
                message: "Proposal not found or already deleted",
            });
        }

        const _id = `grpSHARETASK${proposal.projectId}proposal${proposal.id}`;
        const deletechannel = deleteChannel(_id);

        if (!deletechannel) {
            console.log('failed to delete channel')
        }

        return res.json({
            success: true,
            message: "Proposal deleted successfully",
        });
    } catch (error) {
        console.error("Error on deleting proposal:", error);
        return res.status(500).json({
            success: false,
            message: "An error occurred while deleting proposal : " + error,
        });
    }
};