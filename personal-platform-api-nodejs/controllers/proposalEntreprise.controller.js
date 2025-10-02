const {
  validateProposalEntreprise,
  validateUpdateProposalEntreprise,
} = require("../validators/proposalEntreprise.validators");
const User = require("../models/user.model");
const Project = require("../models/project.model");
const ProposalEntreprise = require("../models/proposalentreprise.model");
const paymentController = require("./payment.controller");
const commentController = require("./comment.controller");
const validateproject = require("../validators/project.validators");
const db = require("../models");
const { findRecrutementIdFromUserId } = require("../controllers/recrutement.controller");
const { calculBalanceRecruterAndRecruted, createChannel, sendMessage, deleteChannel } = require("./utils");
const { getchatidbyUserId } = require("./chatid.controller");
const Entreprise = require("../models/entreprise.model");

exports.addProposalEntreprise = async (req, res) => {
  const { projectData, proposals } = req.body;

  // Validate project data
  const { error } = validateproject.validateProject(projectData);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  // Initialize transaction
  const transaction = await db.connection.transaction();

  try {
    // Create the project first
    const project = await Project.create(projectData, { transaction });
    const entreprise = await getchatidbyUserId(projectData.entrepriseId, 'ENTREPRISE');

    // Validate entreprise
    if (!entreprise) {
      return handleError(transaction, res, "Failed to fetch entreprise");
    }

    // Handle proposals
    const addedProposals = await processProposals(proposals, project.id, entreprise, transaction);

    if (!addedProposals) {
      return handleError(transaction, res, "Failed to create proposals");
    }

    await Entreprise.update(
      { count_shared_proposalentreprise: entreprise.count_shared_proposalentreprise + 1 }, // Correct way to specify the update
      {
        where: { id: entreprise.id },
        transaction,
      }
    );

    // Commit transaction and respond
    await transaction.commit();
    return res.status(201).json({ project, proposals: addedProposals });

  } catch (err) {
    await handleTransactionError(transaction, res, err);
  }
};

// Helper function to process proposals
const processProposals = async (proposals, projectId, entreprise, transaction) => {
  const entrepriseChatId = entreprise.chatid;
  const addedProposals = [];

  for (const proposal of proposals) {
    proposal.projectId = projectId;

    const { error } = validateProposalEntreprise(proposal);
    if (error) {
      return false;
    }

    const proposalEntreprise = await ProposalEntreprise.create(proposal, { transaction });
    const user = await getchatidbyUserId(proposal.userId, 'CANDIDAT');

    if (!user) {
      return false;
    }

    const topicname = `grpCOMPOSED_FREELANCE${proposal.projectId}proposalentreprise${proposalEntreprise.id}`;
    const memberUsername = `CANDIDAT_${user.id}_${user.name.replace(/ /g, '_')}_${user.first_name.replace(/ /g, '_')}_with_ENTREPRISE_${entreprise.id}_${entreprise.username.replace(/ /g, '_')}`;
    const channelId = await createChannel(topicname, entrepriseChatId, user.chatid, memberUsername);

    if (!channelId) {
      return false;
    }

    const message = `Hello, I have a proposal for you: ${proposal.proposal_description} , the budget is ${proposal.price} euro`;
    const sendmessage = await sendMessage(entrepriseChatId, message, channelId);

    if (!sendmessage) {
      return false;
    }


    addedProposals.push({
      ...proposalEntreprise.get(),
      channelId: channelId,
      user : user
    });
  }

  return addedProposals;
};

// Helper function to handle errors during transactions
const handleTransactionError = async (transaction, res, error) => {
  if (transaction) await transaction.rollback();
  console.error("Error:", error.message);
  return res.status(500).json({ error: error.message || "Failed to add proposalEntreprise" });
};

// Helper function to handle error responses
const handleError = async (transaction, res, errorMessage) => {
  if (transaction) await transaction.rollback();
  return res.status(500).json({ error: errorMessage });
};


exports.getProposalEntreprises = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    const filters = {};

    if (req.query.projectId) {
      filters.projectId = req.query.projectId;
    }

    if (req.query.userId) {
      filters.userId = req.query.userId;
    }

    const { count, rows: proposals } = await ProposalEntreprise.findAndCountAll(
      {
        where: filters,
        include: [{ model: User, attributes: ['id', 'name', 'first_name'] }],
        offset: offset,
        limit: limit,
        order: [["createdAt", "DESC"]],
      }
    );
    const totalPages = Math.ceil(count / limit);
    res.json({
      data: proposals,
      pagination: {
        totals: count,
        totalPages: totalPages,
        currentPage: page,
      },
    });
  } catch (ex) {
    console.error("Error fetching proposalEntreprises:", ex);
    res.status(500).json({ error: "Internal server error : " + error });
  }
};

exports.getProposalEntreprise = async (req, res) => {
  try {
    const proposalEntrepriseId = req.params.id;

    const proposalsEntreprise = await ProposalEntreprise.findByPk(
      proposalEntrepriseId,
      {
        include: [
          {
            model: Project,
            attributes: ['id', 'title', 'project_description', 'status', 'price'], // Specify the fields you want from the Project model
          },
          { model: User, attributes: ['id', 'name', 'first_name'] },
        ]
      }
    );

    if (!proposalsEntreprise) {
      return res.status(404).json({ error: "Proposal not found" });
    }

    res.json({ data: proposalsEntreprise });
  } catch (ex) {
    console.error("Error fetching proposalEntreprise:", ex);
    res.status(500).json({ error: "Internal server error: " + ex });
  }
};



exports.deleteProposalEntreprise = async (req, res) => {
  const proposalEntrepriseId = req.params.id;
  try {
    const proposalsEntreprise = await ProposalEntreprise.findByPk(
      proposalEntrepriseId
    );

    if (!proposalsEntreprise) {
      res.status(404).json({
        success: false,
        message: "proposalEntreprise not found or already deleted",
      });
    }
    const deletedproposalEntreprise = await ProposalEntreprise.destroy({
      where: { id: proposalEntrepriseId },
      force: false,
    });
    if (deletedproposalEntreprise === 0) {
      return res.status(404).json({
        success: false,
        message: "proposalEntreprise not found or already deleted",
      });
    }

    const _id = `grpCOMPOSED_FREELANCE${proposalsEntreprise.projectId}proposalentreprise${proposalsEntreprise.id}`;
    const deletechannel = deleteChannel(_id);

    if (deletechannel) {
      console.log('channel dosent delete ');
    }


    return res.json({
      success: true,
      message: "proposalEntreprise deleted successfully",
    });
  } catch (error) {
    console.error("Error soft deleting proposalEntreprise:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while soft deleting proposalEntreprise: " + error,
    });
  }
};

const updateProposalEntrepriseAndBalance = async (
  proposalEntrepriseData,
  existingProposalEntreprise,
  transaction
) => {
  try {
    // Attempt to find the recruitment ID associated with the user ID
    const recruitment = await findRecrutementIdFromUserId(existingProposalEntreprise.userId.toString());

    // If recruitment ID is found, calculate and return balance update
    if (recruitment && recruitment.id) {
      return await calculBalanceRecruterAndRecruted(
        existingProposalEntreprise.price,
        recruitment.recruterId,
        existingProposalEntreprise.userId,
        transaction
      );
    }

    // If recruitment ID not found, find the user
    const user = await User.findOne({
      where: { id: existingProposalEntreprise.userId },
      transaction,
    });

    // Handle case where the user is not found
    if (!user) {
      console.warn('User not found for ID:', existingProposalEntreprise.userId);
      return false; // User not found, return false
    }

    // Calculate new balance
    const newBalance = user.balance_details + existingProposalEntreprise.price;

    // Update user's balance in a single transaction
    await User.update(
      { balance_details: newBalance },
      {
        where: { id: existingProposalEntreprise.userId },
        transaction,
      }
    );

    // Update the proposal with new data
    await ProposalEntreprise.update(proposalEntrepriseData, {
      where: { id: existingProposalEntreprise.id },
      transaction,
    });

    return true; // Successfully updated
  } catch (error) {
    console.error("Transaction failed:", error);
    // Rollback the transaction in case of an error
    if (transaction) {
      await transaction.rollback(); // Ensure rollback on error
    }
    return false; // Indicate failure
  }
};

const finishProposal = async (
  existingProposalEntreprise,
  proposalEntrepriseData,
  comment,
  req,
  transaction,
  res,
  user
) => {
  // Ensure orderID exists
  if (!existingProposalEntreprise.orderID) {
    return res.status(400).json({ error: "Failed to find orderID" });
  }

  // Update proposal and balance
  const isUpdated = await updateProposalEntrepriseAndBalance(
    proposalEntrepriseData,
    existingProposalEntreprise,
    transaction
  );

  if (!isUpdated) {
    return res.status(500).json({ error: "Failed to update proposal and balance" });
  }

  // Create comment
  const commentData = {
    userId: existingProposalEntreprise.userId,
    commentedId: req.user.id,
    CommentedType: req.user.role,
    commentedUserName: req.user.username,
    workId: existingProposalEntreprise.id,
    workType: "COMPOSED_FREELANCE",
    stars: comment.stars,
    comment_text: comment.comment_text,
  };

  const isCommentCreated = await commentController.createComment(commentData, transaction);
  if (!isCommentCreated) {
    return res.status(500).json({ error: "Failed to create comment" });
  }


  const entreprise = await getchatidbyUserId(req.user.id, 'ENTREPRISE');


  if (!entreprise) {
    return res.status(500).json({ error: "Failed to create comment" });
  }
  
 
  const topicname = `grpCOMPOSED_FREELANCE${existingProposalEntreprise.projectId}proposalentreprise${existingProposalEntreprise.id}`;
  const message = `Hello, the client was statifed by your work , and the payment is activated `;
  await sendMessage(entreprise.chatid, message, topicname);


  // Fetch the updated proposal
  await Project.update(
    { status: 'INPROGRESS' }, // This is the data object
    { 
        where: { id: existingProposalEntreprise.projectId }, // Here is the where clause for the condition
        transaction: transaction // Passing the transaction object if you're using transactions
    }
   );

   await ProposalEntreprise.update(proposalEntrepriseData, { where : {id : existingProposalEntreprise.id}, transaction });

  // Commit the transaction if all operations succeed
  await transaction.commit();
  const updatedProposalEntreprise = await ProposalEntreprise.findByPk(existingProposalEntreprise.id);


  // Return the updated proposal

  return res.status(200).json({
    data: updatedProposalEntreprise,
    user: user // Include the user object in the response
  });

};


exports.updateProposalEntreprise = async (req, res) => {
  const proposalEntrepriseId = req.params.id;
  const proposalEntrepriseData = req.body.proposalData;
  const comment = req.body.comment;
  let transaction;

  // Validate incoming proposal data
  const { error } = validateUpdateProposalEntreprise(proposalEntrepriseData);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

 
  try {
    transaction = await db.connection.transaction();

    const existingProposalEntreprise = await ProposalEntreprise.findByPk(proposalEntrepriseId);
    if (!existingProposalEntreprise) {
      return res.status(404).json({ error: "Proposal Entreprise not found" });
    }

    const entreprise = await getchatidbyUserId(req.user.id, 'ENTREPRISE');

    if (!entreprise) {
      return res.status(500).json({ error: "Entreprise not found" });
    }

    const user = await getchatidbyUserId(existingProposalEntreprise.userId, 'CANDIDAT');

    if (!user) {
      return res.status(500).json({ error: "User not found" });
    }
 

    if (proposalEntrepriseData.status === "FINISHED") {
      return await finishProposal(existingProposalEntreprise, proposalEntrepriseData, comment, req, transaction, res , user);

    } else {
      await existingProposalEntreprise.update(proposalEntrepriseData, { transaction });
      

      if(proposalEntrepriseData.status === "DECLINED") {
        
        await Project.update(
          { status: 'INPROGRESS' }, // This is the data object
          { 
              where: { id: existingProposalEntreprise.projectId }, // Here is the where clause for the condition
              transaction: transaction // Passing the transaction object if you're using transactions
          }
         );

        const topicname = `grpCOMPOSED_FREELANCE${existingProposalEntreprise.projectId}proposalentreprise${existingProposalEntreprise.id}`;
        const message = `Hello, your proposal was declined by the client for this reason : ${proposalEntrepriseData.proposal_description}`;
        await sendMessage(entreprise.chatid, message, topicname);

      } else if(proposalEntrepriseData.status === "VALIDATED") { 
        
        await Project.update(
          { status: 'INPROGRESS' }, // This is the data object
          { 
              where: { id: existingProposalEntreprise.projectId }, // Here is the where clause for the condition
              transaction: transaction // Passing the transaction object if you're using transactions
          }
         );

        const topicname = `grpCOMPOSED_FREELANCE${existingProposalEntreprise.projectId}proposalentreprise${existingProposalEntreprise.id}`;
        const message = `Hello, your proposal was validated, and the budget ${existingProposalEntreprise.price} euro was payed and blocked , you need to finish the work to Activate the payment`;
        await sendMessage(entreprise.chatid, message, topicname);

      }

      await transaction.commit(); // Commit the transaction after updating

      return res.status(200).json({
        data: existingProposalEntreprise,
        user: user // Include the user object in the response
      });
    
    };

  } catch (error) {
    console.error("Error on updating proposalEntreprise:", error);
    if (transaction) await transaction.rollback(); // Ensure rollback on error
    return res.status(500).json({
      success: false,
      message: "An error occurred while updating proposalEntreprise: " + error.message,
    });
  }
};

