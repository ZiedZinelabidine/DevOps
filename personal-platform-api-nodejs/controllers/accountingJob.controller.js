const { Op } = require("sequelize");
const AccountingJob = require("../models/accountingJob.model");
const {
  validateAccountingJob,
  validateUpdateAccountingJob,
} = require("../validators/accountingJob.validators");
const db = require("../models");
const RequestCompanyCreation = require("../models/requestCompanyCreation.model");
const Company = require("../models/company.model");
const { getUserEntity, getJobAccountingEntity, checkjwt, updateJobAccountingEntity, addCompanyFromAcountingJobByAccounting, createChannel, sendMessage } = require("./utils");
const Accounting = require("../models/accounting.model");

exports.getAccountingJobs = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    const filters = {};


    if (req.query.accountingFolderId && req.query.accountingFolderType) {
      filters.accountingFolderId = req.query.accountingFolderId;
      filters.accountingFolderType = req.query.accountingFolderType;
    }


    if (req.query.accountingId) {
      filters.accountingId = req.query.accountingId;
    }


    const { count, rows: accountingJobs } = await AccountingJob.findAndCountAll({
      where: filters,
      offset: offset,
      limit: limit,
      order: [["createdAt", "DESC"]],
    });


    // Create a result array with contacted entities
    const results = await Promise.all(accountingJobs.map(async item => {
      const jobEntity = await getJobAccountingEntity(item.accountingFolderType, item.accountingFolderId);

      return {
        ...item.toJSON(),
        job: jobEntity
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
    console.error("Error fetching AccountingJob:", ex);
    res.status(500).json({ error: "Internal server error" });
  }
};


exports.getAccountingJobsByAccountId = async (req, res) => {
  const accountingId = req.params.id;

  // Check if accountingId is provided
  if (!accountingId) {
    return res.status(400).json({ error: "Accounting ID is required" });
  }

  // Extract pagination parameters
  const page = parseInt(req.query.page) || 1; // Default to page 1
  const limit = parseInt(req.query.limit) || 10; // Default limit
  const offset = (page - 1) * limit; // Calculate offset

  try {
    // Set up filters based on request parameters
    const filters_job_affected = {
      accountingId,
    };

    // Fetch accounting jobs with pagination
    const accountingJobs = await AccountingJob.findAll({
      where: filters_job_affected,
      order: [['createdAt', 'DESC']],
      limit,
      offset,
    });

    // Get the total count of jobs for pagination
    const totalCount = await AccountingJob.count({
      where: filters_job_affected,
    });

    // Create a result array with corresponding job entities and user entities
    const results = await Promise.all(accountingJobs.map(async (item) => {
      const jobEntity = await getJobAccountingEntity(item.accountingFolderType, item.accountingFolderId);
      const userEntity = await getUserEntity(jobEntity.presidentType, jobEntity.presidentId);

      return {
        ...item.toJSON(),    // Convert the accounting job to JSON format
        job: jobEntity,      // Include the corresponding job entity
        president: userEntity // Include the corresponding user entity
      };
    }));

    // Calculate total pages based on the unified total count
    const totalPages = Math.ceil(totalCount / limit);

    // Send response with results and pagination info
    res.json({
      data: results,
      pagination: {
        totals: totalCount,
        totalPages: totalPages,
        currentPage: page,
      },
    });

  } catch (ex) {
    console.error("Error fetching AccountingJob:", ex); // More detailed logging
    res.status(500).json({ error: "Internal server error", details: ex.message }); // Return error details for debugging
  }
};

exports.getAccountingJob = async (req, res) => {
  const accountingjobId = req.params.id;
  try {
    const accountingjob = await AccountingJob.findByPk(accountingjobId);
    if (!accountingjob) {
      return res.status(404).json({ error: "AccountingJob not found" });
    }

    // Fetch entities in parallel
    const jobEntityPromise = getJobAccountingEntity(accountingjob.accountingFolderType, accountingjob.accountingFolderId);
    const accountingEntityPromise = getUserEntity("ACCOUNTING", accountingjob.accountingId);

    // Resolve job entity first to get the presidentType and presidentId
    const jobEntity = await jobEntityPromise;
    const userEntityPromise = getUserEntity(jobEntity.presidentType, jobEntity.presidentId);
    
    const userEntity = await userEntityPromise;

    const result = {
      ...accountingjob.toJSON(),    // Convert the accounting job to JSON format
      job: jobEntity,               // Include the corresponding job entity
      president: userEntity,        // Include the corresponding user entity
      accounting: await accountingEntityPromise  // Include the corresponding accounting entity
    };

    return res.status(200).json({ data: result });
  } catch (error) {
    console.error("Failed to fetch accounting job:", error);
    return res.status(500).json({ error: "Failed to fetch accounting job" });
  }
};



exports.getAccountingAllJobs = async (req, res) => {
  const page = parseInt(req.query.page) || 1; // Default to page 1 if not specified
  const limit = parseInt(req.query.limit) || 10; // Default to 10 items per page if not specified
  const offset = (page - 1) * limit; // Calculate the offset for pagination

  // Extract filter parameters from the query
  const typeFilter = req.query.type; // Example: "COMPANY", "REQUEST_COMPANY_CREATION", or "All"
  const locationFilter = req.query.location; // Example: "Paris", "New York"

  try {
    // Prepare where clauses for filtering jobs
    const companyWhere = {
      status: "VERIFICATION",
      ...(typeFilter && typeFilter !== 'All' && { type: typeFilter }),
      ...(locationFilter && { company_location: locationFilter }),
    };

    const requestCompanyCreationWhere = {
      status: "CREATED",
      ...(typeFilter && typeFilter !== 'All' && { type: typeFilter }),
      ...(locationFilter && { company_location: locationFilter }),
    };

    // Fetch jobs based on the filters with pagination
    const [companies, requestCompanyCreations] = await Promise.all([
      Company.findAll({
        where: companyWhere,
        order: [["createdAt", "DESC"]],
        offset: offset,
        limit: limit,
      }),
      RequestCompanyCreation.findAll({
        where: requestCompanyCreationWhere,
        order: [["createdAt", "DESC"]],
        offset: offset,
        limit: limit,
      }),
    ]);


    // Count total jobs for pagination
    const totalCompanies = await Company.count({ where: companyWhere });
    const totalRequestCreations = await RequestCompanyCreation.count({ where: requestCompanyCreationWhere });

    // Create result array with user entities for companies
    const companiesResults = await Promise.all(companies.map(async item => {
      const userEntity = await getUserEntity(item.presidentType, item.presidentId);

      return {
        ...item.toJSON(),
        user: userEntity
      };
    }));

    // Create result array with user entities for request company creations
    const requestCreationsResults = await Promise.all(requestCompanyCreations.map(async item => {
      const userEntity = await getUserEntity(item.presidentType, item.presidentId);
      return {
        ...item.toJSON(),
        user: userEntity
      };
    }));

    // Combine results from both queries into one array
    const combinedResults = [
      ...companiesResults,
      ...requestCreationsResults,
    ];

    // Sort combined results by createdAt
    combinedResults.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    
    // Calculate total count for pagination
    const totalCount = totalCompanies + totalRequestCreations;

    // Calculate total pages based on the unified total count
    const totalPages = Math.ceil(totalCount / limit);

    // Send response with results and pagination info
    res.json({
      data: combinedResults,
      pagination: {
        totals: totalCount,
        totalPages: totalPages,
        currentPage: page,
      },
    });

  } catch (error) {
    console.error("An error occurred while fetching data:", error);
    res.status(500).json({ error: "An error occurred while fetching data." });
  }
};

exports.getJobByPresidentId = async (req, res) => {
  const presidentId = req.params.id;
  const presidentType = req.params.type;

  try {
    const companyWhere = { presidentType, presidentId };
    const requestCompanyCreationWhere = { presidentType, presidentId };

    // Fetch the company and request company creation concurrently
    const [company, requestCompanyCreation] = await Promise.all([
      Company.findAll({ where: companyWhere }),
      RequestCompanyCreation.findAll({ where: requestCompanyCreationWhere }),
    ]);

    // Structure the result with more context
    // Construct the result object
    const combinedResults = [
      ...company,
      ...requestCompanyCreation
    ]

    return res.status(200).json({ data: combinedResults });

  } catch (error) {
    console.error("Failed to fetch accounting job:", error);
    return res.status(500).json({ error: "Failed to fetch accounting job" });
  }
}


exports.getAccountingJobByPresidentId = async (req, res) => {
  const presidentId = req.params.id;
  const presidentType = req.params.type;

  try {
    const companyWhere = { presidentType, presidentId };
    const requestCompanyCreationWhere = { presidentType, presidentId };

    // Fetch the company and request company creation concurrently
    const [company, requestCompanyCreation] = await Promise.all([
      Company.findAll({ where: companyWhere }),
      RequestCompanyCreation.findAll({ where: requestCompanyCreationWhere }),
    ]);

    // Prepare an empty array for accounting jobs
    let accountingJobs = [];

    // Check if the company exists and fetch accounting jobs
    if (company.length > 0) {
      accountingJobs = await AccountingJob.findAll({
        where: {
          accountingFolderId: company[0].id,
          accountingFolderType: 'COMPANY',
        },
      });
    }

    // If no company found, check for request company creation
    else if (requestCompanyCreation.length > 0) {
      accountingJobs = await AccountingJob.findAll({
        where: {
          accountingFolderId: requestCompanyCreation[0].id,
          accountingFolderType: 'REQUEST_COMPANY_CREATION',
        },
      });
    }
    if (accountingJobs) {
      result = {
        ...accountingJobs,    // Convert the accounting job to JSON format
        job: (company && company.length > 0) 
        ? company[0].toJSON() 
        : (requestCompanyCreation && requestCompanyCreation.length > 0 
           ? requestCompanyCreation[0].toJSON() 
           : null),  
      };

      return res.status(200).json({ data: [result] });

    } else {

      return res.status(200).json({ data: [accountingJobs] });

    }

  } catch (error) {
    console.error("Failed to fetch accounting job:", error);
    return res.status(500).json({ error: "Failed to fetch accounting job" });
  }
}

exports.addAccountingJob = async (req, res) => {
  const accountingjobData = req.body;
  let transaction;

  // Validate input data
  const { error } = validateAccountingJob(accountingjobData);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  // Check JWT
  const jwt = await checkjwt(req, res, accountingjobData.accountingId);
  if (!jwt) {
    return res.status(401).json({ error: "Authentication failed: JWT check failed" });
  }

  // Find the accounting entry
  const accounting = await Accounting.findByPk(accountingjobData.accountingId);
  if (!accounting) {
    return res.status(404).json({ error: "Accounting not found" });
  }

  // Check if the number of folders in progress exceeds the limit
  if (accounting.folder_nbr_inprogress >= 200000) {
    return res.status(400).json({ error: "You have already 5 folders in progress" });
  }

  try {
    // Start the transaction
    transaction = await db.connection.transaction();

    // Create the accounting job
    const accountingjob = await AccountingJob.create(accountingjobData, { transaction });

    if (accountingjob) {
      // Increment folder number IN_PROGRESS by 1
      const updatedFolderCount = accounting.folder_nbr_inprogress + 1;

      // Update the accounting entry
      await accounting.update({ folder_nbr_inprogress: updatedFolderCount }, { transaction });

      // update the folder
      await updateJobAccountingEntity(accountingjob.accountingFolderType, accountingjob.accountingFolderId, "IN_PROGRESS");


      const jobEntity = await getJobAccountingEntity(accountingjob.accountingFolderType, accountingjob.accountingFolderId);
      const president = await getUserEntity(jobEntity.presidentType, jobEntity.presidentId);

      // Generate a topic name for the channel
      const topicname = `grpAccountingJob${accountingjob.id}workingFolder${accountingjob.accountingFolderType}${accountingjob.accountingFolderId}`;
      const memberUsername = createMemberUsername(president, accounting);

      // Create a channel
      const channelId = await createChannel(topicname, accounting.chatid, president.chatid, memberUsername);
      if (!channelId) {
        await transaction.rollback();
        return res.status(500).json({ error: "Failed to create channel" });
      }

      // Send a message to the channel
      const message = `Hello, your accounting Folder is in progress by ${accounting.name} ${accounting.first_name}`;
      const sendMessageResult = await sendMessage(accounting.chatid, message, channelId);
      if (!sendMessageResult) {
        await transaction.rollback();
        return res.status(500).json({ error: "Failed to send message on the channel" });
      }

          // Commit the transaction
      await transaction.commit();

      // Prepare and send response
      const response = { ...accountingjob.get(), channelId , president: president};
      return res.status(201).json(response);
    }
  } catch (error) {
    if (transaction) await transaction.rollback(); // Ensure rollback if an error occurs
    console.error("Error while adding accounting job:", error); // Log the error for debugging
    return res.status(500).json({ error: "Failed to add Accounting Job" });
  }
};

// Helper function to create member username
const createMemberUsername = (president, accounting) => {
  return `ACCOUNTING_${accounting.id}_${accounting.name}_${accounting.first_name}_with_PRESIDENT_${president.id}_${president.name}_${president.first_name}`;
};


exports.updateAccountingJob = async (req, res) => {

  const accountingjobId = req.params.id;
  const accountingjobData = req.body;

  const { error } = validateUpdateAccountingJob(accountingjobData);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    // Fetch the existing accounting job with a transaction
    const existingAccountingJob = await AccountingJob.findByPk(accountingjobId);

    if (!existingAccountingJob) {
      return res.status(404).json({ error: "Accounting job not found" });
    }


    // Update the existing accounting job
    await existingAccountingJob.update(accountingjobData);

    // Fetch the updated accounting job
    const updatedAccountingJob = await AccountingJob.findByPk(accountingjobId);

    // Find the accounting entry within the transaction
    const accounting = await Accounting.findByPk(updatedAccountingJob.accountingId);

    if (!accounting) {
      return res.status(404).json({ error: "Accounting not found" });
    }

    let updatedFolderCount;
    let result;

    if (accountingjobData.status) {
      switch (accountingjobData.status) {
        case "IN_PROGRESS":
          await updateJobAccountingEntity(updatedAccountingJob.accountingFolderType, updatedAccountingJob.accountingFolderId, "IN_PROGRESS");
          break;

        case "ACTION_REQUIRED":
          await updateJobAccountingEntity(updatedAccountingJob.accountingFolderType, updatedAccountingJob.accountingFolderId, "ACTION_REQUIRED");
          break;

        case "VALIDATED":
          await updateJobAccountingEntity(updatedAccountingJob.accountingFolderType, updatedAccountingJob.accountingFolderId, "VALIDATED");
          updatedFolderCount = accounting.folder_nbr_inprogress - 1;
          await accounting.update({ folder_nbr_inprogress: updatedFolderCount });
          break;

        case "COMPANY_CREATED":
          result = await addCompanyFromAcountingJobByAccounting(accountingjobId, accountingjobData.companyBINcreated);
          if (!result) {
            return res.status(500).json({ error: "Problem while creating company from request company" });
          }
      }
    }

    return res.status(200).json(result);
  } catch (error) {
    console.error("Failed to update accounting job:", error);
    return res.status(500).json({ error: "Failed to update accounting job: " + error.message });
  }
};


exports.deleteAccountingJob = async (req, res) => {
  const accountingjobId = req.params.id;
  try {
    const deletedAccountingJob = await AccountingJob.destroy({
      where: { id: accountingjobId },
      force: false,
    });
    if (deletedAccountingJob === 0) {
      return res.status(404).json({
        success: false,
        message: "accountingjob not found or already deleted",
      });
    }
    return res.json({ success: true, message: "accountingjob deleted successfully" });
  } catch (error) {
    console.error("Error soft deleting accountingjob:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while soft deleting accountingjob: : " + error,
    });
  }
};

exports.findAccountingJobByToken = async (req, res) => {

  const token = req.params.token;
  try {
    // Find the user by the verificationToken
    const accountingjob = await AccountingJob.findOne({
      where: {
        display: token
      }
    });

    if (!accountingjob) {
      return res.status(404).json({ message: 'User not found or token expired' });
    }

    // If user is found, return the user data (omit sensitive fields if necessary)
    return res.status(200).json(accountingjob);
  } catch (error) {
    console.error(`Error finding accountingjob by token: ${error.message}`);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
