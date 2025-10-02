const Recrutement = require("../models/recruitment.model");
const Recruter = require("../models/recruter.model");
const Entreprise = require("../models/entreprise.model");
const User = require("../models/user.model");
const { Op, where } = require("sequelize");
const db = require("../models");
const {
  validateCreateRecrutement,
  validateCreateRrecrutedWithRecrutement,
} = require("../validators/recrutement.validators");
const { getRecruterByToken, sendMessage, createChannel } = require("./utils");
const {getchatidbyUserId}  = require("./chatid.controller");

exports.getRecrutements = async (req, res) => {
  try {
      const page = parseInt(req.query.page, 10) || 1;
      const limit = parseInt(req.query.limit, 10) || 10;
      const offset = (page - 1) * limit;

      const filters = {};

      // Add recuterId filter if present
      if (req.query.recruterId) {
          filters.recruterId = req.query.recruterId;
      }

      // Apply additional filters
      if (req.query.type) {
          filters.type = req.query.type;
      }
      if (req.query.status) {
          filters.status = req.query.status;
      }

      if (req.query.recruted_type) {
        filters.recruted_type = req.query.recruted_type;
     }

      if (req.query.recrutedId && req.query.recruted_type) {
          filters.recrutedId = req.query.recrutedId;
          filters.recruted_type = req.query.recruted_type;      
      }

      // Fetch recrutements with filters
      const { count, rows: recrutements } = await Recrutement.findAndCountAll({
          where: filters,
          offset: offset,
          limit: limit,
          order: [["createdAt", "DESC"]],
      });

      // Create a result array with recruted entities
      const results = await Promise.all(recrutements.map(async recrutement => {
          const recrutedId = recrutement.recrutedId; // Get the recrutedId
          const recruted_type = recrutement.recruted_type; // Get the recruted_type
          const recruterId = recrutement.recruterId;

          let recrutedDetails = null;
          let recruiterDetails = null;

          recruiterDetails = await Recruter.findByPk(recruterId, {
            attributes: ['id', 'name', 'first_name', 'display','type' ] // Retrieve only relevant attributes
          });
            
          if (recrutedId && recruted_type) { 
              recrutedDetails = await User.findByPk(recrutedId, {
                attributes: ['id', 'name', 'first_name', 'display','type' , 'job', 'languages', 'country_details' , 'profile_description','skills' ], // Retrieve only relevant attributes
              })}

          return {
              ...recrutement.toJSON(), // Convert to plain object
              recruted: recrutedDetails ? recrutedDetails.toJSON() : null, // Attach recruted details
              recruter: recruiterDetails ? recruiterDetails.toJSON() : null,
          };
      }));

      const totalPages = Math.ceil(count / limit); // Calculate total pages

      res.json({
          data: results, // Return the enriched results
          pagination: {
              totals: count,
              totalPages: totalPages,
              currentPage: page,
          },
      });
  } catch (ex) {
      console.error("Error fetching recrutements:", ex);
      res.status(500).json({ error: "Internal server error: " + ex.message });
  }
};


exports.getRecrutement = async (req, res) => {
  const recrutementId = req.params.id;
  try {
    const recrutement = await Recrutement.findByPk(recrutementId);
    if (!recrutement) {
      return res.status(404).json({ error: "recrutement not found" });
    }
    let recrutedDetails = null;
    let recruterDetails = null;

    recruterDetails = await Recruter.findByPk(recrutement.recruterId, {
      attributes: ['id', 'name', 'first_name', 'display' ,'type'], // Retrieve only relevant attributes
  });

    if (recrutement.recrutedId && recrutement.recruted_type) {

      recrutedDetails = await User.findByPk(recrutement.recrutedId, {
        attributes: ['id', 'name', 'first_name', 'display','type' , 'job', 'languages', 'country_details' , 'profile_description','skills' ], // Retrieve only relevant attributes
        });
     }
 
    const result = {
        ...recrutement.toJSON(),
        recruted: recrutedDetails, // Append contacted entity
        recruter: recruterDetails   // Append contactor entity
      };

    return res.status(200).json({ data: result });
  } catch (error) {
    console.error("Failed to fetch recrutement:", error);
    return res.status(500).json({ error: "Failed to fetch recrutement " + error });
  }
};

exports.addRecrutement = async (req, res) => {
  const recruitmentData = req.body;

  // Validate incoming data
  const { error: validationError } = validateCreateRecrutement(recruitmentData);
  if (validationError) {
      return res.status(400).json({ error: validationError.details[0].message });
  }

  // Get recruiter by token
  const recruter = await getRecruterByToken(recruitmentData.recrutertoken);
  if (!recruter) {
      return res.status(404).json({ error: "Recruter not found" });
  }


  let transaction;
  try {
      // Start a database transaction
      transaction = await db.connection.transaction();
      recruitmentData.recruterId = recruter.id ;

       // Create recruitment record
      const recrutement = await Recrutement.create(recruitmentData, { transaction });

      // Create channel
      const topicname = `grpRecruitment${recrutement.id}recruted${recruitmentData.recruted_type}${recruitmentData.recrutedId}`;
      const recruted = await getchatidbyUserId(recruitmentData.recrutedId , recruitmentData.recruted_type);
      const memberUsername = createMemberUsername(recruted, recruitmentData.recruted_type , recruter);

      const channelId = await createChannel(topicname, recruter.chatid, recruted.chatid, memberUsername);

      if (!channelId) {
          throw new Error("Failed to create channel");
      }

      // Send a welcome message to the channel
      const message = `Hello, you have been recruted by: ${recruter.name} ${recruter.first_name}`;
      const sendMessageResult = await sendMessage(recruter.chatid, message, channelId);
      if (!sendMessageResult) {
          throw new Error("Failed to create message on the channel");
      }

      // Commit transaction if everything was successful
      await transaction.commit();

      return res.status(200).send({
          message: "Recrutment created",
          recrutement: recrutement,
      });
      
  } catch (error) {
      if (transaction) await transaction.rollback();
      console.error("Failed to add recrutement:", error);
      return res.status(500).json({ error: "Failed to add recrutement: " + error.message });
  }
};

// Helper function to create member username
const createMemberUsername = (recruted, recruted_type , recruter) => {
  if (recruted_type === 'ENTREPRISE') {
        return `${recruted_type}_${recruted.id}_${recruted.username}_with_RECRUTER_${recruted.id}_${recruter.name}_${recruter.first_name}`;
    } else {
        return `${recruted_type}_${recruted.id}_${recruted.name}_${recruted.first_name}_with_RECRUTER_${recruter.id}_${recruter.name}_${recruter.first_name}`;
    }
};

exports.deleteRecrutement = async (req, res) => {
  const recrutementId = req.params.id;
  try {
    const deletedrecrutement = await Recrutement.destroy({
      where: { id: recrutementId },
      force: false,
    });
    if (deletedrecrutement === 0) {
      return res.status(404).json({
        success: false,
        message: "recrutement not found or already deleted",
      });
    }
    return res.json({
      success: true,
      message: "recrutement deleted successfully",
    });
  } catch (error) {
    console.error("Error soft deleting recrutement:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while soft deleting recrutement : " + error,
    });
  }
};

exports.findRecrutementIdFromUserId = async (recrutedId) => {
  try {
    let filters = {};
    filters.recrutedId = recrutedId;
   const  recruitment  = await Recrutement.findOne({
      where: filters
    });
    if (!recruitment) {
      console.error("No recruter associate to this user");
      return false;
    }
    return recruitment.dataValues;
  } catch (error) {
    console.error("Failed to fetch recruitment:", error);
    return false;

  }
};
