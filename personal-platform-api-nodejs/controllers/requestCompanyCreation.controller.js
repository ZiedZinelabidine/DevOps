const { Op } = require("sequelize");
const RequestCompanyCreation = require("../models/requestCompanyCreation.model");
const Accounting = require("../models/accounting.model");
const User = require("../models/user.model");
const Recruter = require("../models/recruter.model");

const {
  validateRequestCompanyCreation,
  validateRequestCompanyCreationUpdate,
} = require("../validators/requestCompanyCreation.validators");
const { getUserEntity } = require("./utils");

exports.getRequestCompanyCreations = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    const filters = {};

    if (req.query.userId) {
      filters.userId = req.query.userId;
    }
    if (req.query.typeUser) {
      filters.typeUser = req.query.typeUser;
    }

    if (req.query.status) {
      filters.status = req.query.status;
    }

    const { count, rows: requestCompanyCreations } =
      await RequestCompanyCreation.findAndCountAll({
        where: filters,
        offset: offset,
        limit: limit,
        order: [["createdAt", "DESC"]],
      });

        // Create a result array with contacted entities
        const results = await Promise.all(requestCompanyCreations.map(async requestCompanyCreation => {
        const userEntity = await getUserEntity(requestCompanyCreation.presidentType, requestCompanyCreation.presidentId);

          return {
              ...requestCompanyCreation.toJSON(),
              user: userEntity 
          };
      }));



    const totalPages = Math.ceil(count / limit);
    res.json({
      data: results,
      pagination: {
        totals: count,
        totalPages: totalPages,
        currentPage: page,
      },
    });
  } catch (ex) {
    console.error("Error fetching requestCompanyCreations:", ex);
    res.status(500).json({ error: "Internal server error : " + ex });
  }
};

exports.getRequestCompanyCreation = async (req, res) => {

  const requestCompanyCreationId = req.params.id;
  try {
    const requestCompanyCreation = await RequestCompanyCreation.findByPk(
      requestCompanyCreationId
    );
    if (!requestCompanyCreation) {
      return res
        .status(404)
        .json({ error: "requestCompanyCreation not found" });
    }
    const userEntity = await getUserEntity(requestCompanyCreation.typeUser, requestCompanyCreation.userId);


    // Create the result object
    const result = {
      ...requestCompanyCreation.toJSON(),
      user: userEntity 
    };
    return res.status(200).json({ data: result });

  } catch (error) {
    console.error("Failed to fetch requestCompanyCreation:", error);
    return res
      .status(500)
      .json({ error: "Failed to fetch requestCompanyCreation : " + error });
  }
};

exports.findRequestCompanyCreationByToken = async (req, res) => {

  const token = req.params.token;
 
  try {
      // Find the user by the verificationToken
      const requestCompanyCreation = await RequestCompanyCreation.findOne({
          where: {
              display: token
          }
      });

      if (!requestCompanyCreation) {
          return res.status(404).json({ message: 'User not found or token expired' });
      }

      // If user is found, return the user data (omit sensitive fields if necessary)
      return res.status(200).json(requestCompanyCreation);
  } catch (error) {
      console.error(`Error finding requestCompanyCreation by token: ${error.message}`);
      return res.status(500).json({ message: 'Internal server error' });
  }
};

// get request company by president id
exports.getRequestCompanyCreationByPresidentIdAndType = async (req, res) => {
  const presidentId = req.params.id;
  const presidentType = req.params.type;
  try {
    const requestCompanyCreation = await RequestCompanyCreation.findAll({
      where: { presidentId: presidentId, presidentType: presidentType },
    });

    if (!requestCompanyCreation) {
      return res
        .status(404)
        .json({ error: "requestCompanyCreation not found" });
    }
    return res.status(200).json({ data: requestCompanyCreation });
  } catch (error) {
    console.error("Failed to fetch requestCompanyCreation:", error);
    return res
      .status(500)
      .json({ error: "Failed to fetch requestCompanyCreation : " + error });
  }
};
exports.addRequestCompanyCreation = async (req, res) => {
  const requestCompanyCreationData = req.body;
  const { error } = validateRequestCompanyCreation(requestCompanyCreationData);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  try {
    const requestCompanyCreation = await RequestCompanyCreation.create(
      requestCompanyCreationData
    );
    return res.status(201).json(requestCompanyCreation);
  } catch (error) {
    console.error("Failed to add requestCompanyCreation:", error);
    return res
      .status(500)
      .json({ error: "Failed to add requestCompanyCreation : " + error });
  }
};

exports.updateRequestCompanyCreation = async (req, res) => {
  const requestCompanyCreationId = req.params.id;
  const requestCompanyCreationData = req.body;

  const { error } = validateRequestCompanyCreationUpdate(
    requestCompanyCreationData
  );
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  try {
    const existingRequestCompanyCreation =
      await RequestCompanyCreation.findByPk(requestCompanyCreationId);
    if (!existingRequestCompanyCreation) {
      return res
        .status(404)
        .json({ error: "RequestCompanyCreation not found : " + error });
    }

    // If status is "FINISHED" update proposal and update user balance
    if (requestCompanyCreationData.status == "FINISHED") {
      return await finishRequestCompanyCreation(
        existingRequestCompanyCreation,
        requestCompanyCreationData,
        res
      );
    } else {
      await existingRequestCompanyCreation.update(requestCompanyCreationData);

      const updatedRequestCompanyCreation =
        await RequestCompanyCreation.findByPk(requestCompanyCreationId);

      return res.status(200).json(updatedRequestCompanyCreation);
    }
  } catch (error) {
    console.error("Failed to update RequestCompanyCreation:", error);
    return res
      .status(500)
      .json({ error: "Failed to update RequestCompanyCreation: " + error });
  }
};

exports.deleteRequestCompanyCreation = async (req, res) => {
  const requestCompanyCreationId = req.params.id;
  try {
    const deletedRequestCompanyCreation = await RequestCompanyCreation.destroy({
      where: { id: requestCompanyCreationId },
      force: false,
    });
    if (deletedRequestCompanyCreation === 0) {
      return res.status(404).json({
        success: false,
        message: "RequestCompanyCreation not found or already deleted",
      });
    }
    return res.json({
      success: true,
      message: "RequestCompanyCreation deleted successfully",
    });
  } catch (error) {
    console.error("Error soft deleting RequestCompanyCreation:", error);
    return res.status(500).json({
      success: false,
      message:
        "An error occurred while soft deleting RequestCompanyCreation : " +
        error,
    });
  }
};

const finishRequestCompanyCreation = async (
  existingRequestCompanyCreation,
  requestCompanyCreationData,
  res
) => {


  await updateRequestCompanyCreationAndBalanceAccounting(
    requestCompanyCreationData,
    existingRequestCompanyCreation
  );

  const updatedRequestCompanyCreation = await RequestCompanyCreation.findByPk(
    existingRequestCompanyCreation.id
  );
  return res.status(200).json({ data: updatedRequestCompanyCreation });
};

const updateRequestCompanyCreationAndBalanceAccounting = async (
  requestCompanyCreationData,
  existingRequestCompanyCreation
) => {
  let transaction;
  try {
    transaction = await db.connection.transaction();

    const accounting = await Accounting.findOne({
      where: { id: existingRequestCompanyCreation.accountingId },
      transaction,
    });

    const newBalance =
      accounting.balance_details + existingRequestCompanyCreation.price;

    await accounting.update(
      { balance_details: newBalance },
      {
        where: { id: existingRequestCompanyCreation.accountingId },
        transaction,
      }
    );

    await RequestCompanyCreation.update(requestCompanyCreationData, {
      where: { id: existingRequestCompanyCreation.id },
      transaction,
    });

    return true;
  } catch (error) {
    console.error("Transaction failed:", error);
    return false;
  }
};
