const { connect } = require("getstream");
const { S3Client, ListObjectsV2Command } = require('@aws-sdk/client-s3');
const StreamChat = require("stream-chat").StreamChat;
const Comment = require("../models/comment.model");
const SoldedProduct = require("../models/soldedProduct.model");
const Product = require("../models/product.model");
const User = require("../models/user.model");
const Recruter = require("../models/recruter.model");
const Accounting = require("../models/accounting.model");
const Entreprise = require("../models/entreprise.model");
const Dateuser = require("../models/dateuser.model");
const WithdrawalMethod = require("../models/withdrawalMethod.model");
const { Op, literal, fn, col } = require('sequelize');
const jwt = require("jsonwebtoken");
const { secret } = require("../config/jwt.config");
const { validateSignupUser } = require("../validators/user.validators");
const { validateSignupEntreprise } = require("../validators/entreprise.validators");
const axios = require('axios');
const AppelOffre = require("../models/appeloffre.model");
const Project = require("../models/project.model");
getstreamConfig = require("../config/getstream.config");
const api_key = getstreamConfig.api_key;
const api_secret = getstreamConfig.api_secret;
const app_id = getstreamConfig.app_id;
const { connection } = require('../models');
const ProposalEntreprise = require("../models/proposalentreprise.model");
const Proposal = require("../models/proposal.model");
const AppeloffreProposal = require("../models/appeloffreProposal.model");
const dotenv = require('dotenv');
const Recruitment = require("../models/recruitment.model");
const RequestCompanyCreation = require("../models/requestCompanyCreation.model");
const Company = require("../models/company.model");
const AccountingJob = require("../models/accountingJob.model");
const db = require("../models");
const Proposalentreprise = require("../models/proposalentreprise.model");

dotenv.config();

const isFieldValueUniqueExceptCurrent = async (field, value, userId) => {
  let whereClause = {
    [field]: value,
  };
  if (userId) {
    whereClause.id = {
      [Op.ne]: userId,
    };
  }
  const existingUser = await User.findOne({
    where: whereClause,
  });
  return !existingUser;
};

const isFieldValueUnique = async (field, value) => {
  const existingUser = await User.findOne({
    where: {
      [field]: value,
    },
  });
  return !existingUser;
};

async function findUserByEmail(email) {
  try {
    users = await User.findAll({ where: { email: email } });
    return users instanceof Array ? users[0] : null;
  } catch (ex) {
    throw ex;
  }
}

async function findDateUserByEmail(email) {
  try {
    users = await Dateuser.findAll({ where: { email: email } });
    return users instanceof Array ? users[0] : null;
  } catch (ex) {
    throw ex;
  }
}

async function findRecruterByEmail(email) {
  let users;
  try {
    users = await Recruter.findAll({ where: { email: email } });
    return users instanceof Array ? users[0] : null;
  } catch (ex) {
    throw ex;
  }
}

async function findWithdrawalMethodByUserId(userId, typeUser) {
  try {
    const withdrawMethod = await WithdrawalMethod.findAll({
      where: { userId: userId, typeUser: typeUser },
      order: [
        ["createdAt", "DESC"]
      ]
    });
    return withdrawMethod instanceof Array ? withdrawMethod[0] : null;
  } catch (ex) {
    throw ex;
  }
}


const isFieldValueUniqueExceptCurrentEntreprise = async (
  field,
  value,
  userId
) => {
  let whereClause = {
    [field]: value,
  };
  if (userId) {
    whereClause.id = {
      [Op.ne]: userId,
    };
  }
  const existingUser = await Entreprise.findOne({
    where: whereClause,
  });
  return !existingUser;
};

const isFieldValueUniqueEntreprise = async (field, value) => {
  const existingUser = await Entreprise.findOne({
    where: {
      [field]: value,
      deletedAt: null
    },
  });
  return !existingUser;
};

const isFieldValueUniqueAccounting = async (field, value) => {
  const existingUser = await Accounting.findOne({
    where: {
      [field]: value,
      deletedAt: null
    },
  });
  return !existingUser;
};

const isFieldValueUniqueDateUser = async (field, value) => {
  const existingUser = await Dateuser.findOne({
    where: {
      [field]: value,
      deletedAt: null
    },
  });
  return !existingUser;
};

const isFieldValueUniqueRecruter = async (field, value) => {
  const existingUser = await Recruter.findOne({
    where: {
      [field]: value,
      deletedAt: null
    },
  });
  return !existingUser;
};

async function findEntrepriseByUsername(username) {
  try {
    entreprises = await Entreprise.findAll({ where: { username: username, deletedAt: null } });
    return entreprises instanceof Array ? entreprises[0] : null;
  } catch (ex) {
    throw ex;
  }
}

async function findEntrepriseByEmail(email) {
  try {
    entreprises = await Entreprise.findAll({ where: { email: email, deletedAt: null } });
    return entreprises instanceof Array ? entreprises[0] : null;
  } catch (ex) {
    throw ex;
  }
}

async function findAccountingByEmail(email) {
  try {
    accountings = await Accounting.findAll({ where: { email: email, deletedAt: null } });
    return accountings instanceof Array ? accountings[0] : null;
  } catch (ex) {
    throw ex;
  }
}

async function getRecruterByToken(token) {
  try {
      // Find the recruitment entry with the specified token
      const recruter = await Recruter.findOne({
          where: { display: token },
      });

      // Check if a recruitment entry was found
      if (recruter) {
          return recruter.dataValues; // Return the associated recruiter
      } else {
          return false;
      }
  } catch (error) {
      console.error('Error fetching recruiter by token:', error);
      throw error; // Rethrow the error for further handling in the application
  }
}



const calculateUserStar = async (userId) => {


  const results = await Comment.findAll({
    attributes: [
      [literal("COUNT(*)"), "count"], // Count all comments
      [literal("SUM(stars)"), "totalStars"], // Sum of stars
    ],
    where: { userId: userId },
  });
  let stars;
  if (!results[0].dataValues.totalStars || results[0].dataValues.count == 0) {
    stars = 0;
  } else {
    stars = Math.floor(
      results[0].dataValues.totalStars / results[0].dataValues.count
    );
  }
  const existingUser = await User.findByPk(userId);
  if (!existingUser) {
    return false;
  }

  await existingUser.update({
    rising_star_global: stars,
  });
};

const calculateProductStar = async (productId) => {

  let filters = {};
  filters.workId = productId ;
  filters.workType = "PRODUCT" ;

  const results = await Comment.findAll({
    attributes: [
      [literal("COUNT(*)"), "count"], // Count all comments
      [literal("SUM(stars)"), "totalStars"], // Sum of stars
    ],
    where: filters,
  });

  let stars;
  if (!results[0].dataValues.totalStars || results[0].dataValues.count == 0) {
    stars = 0;
  } else {
    stars = Math.floor(
      results[0].dataValues.totalStars / results[0].dataValues.count
    );
  }
  const existingproduct = await Product.findByPk(productId);

  if (!existingproduct) {
    return res.status(404).json({ error: "product not found" });
  }
  await existingproduct.update({
    rising_star_global: stars,
  });
};

const calculBalanceRecruterAndRecruted = async (amount, recruterId, recrutedId, transaction) => {

  try {
    const user = await User.findByPk(recrutedId);

    if (!user) {
      console.error("Error: User not found");
      if (transaction) await transaction.rollback();
      return false;
    }

    const newBalanceUser = user.balance_details + calculatePercentage(amount, 90);

    await user.update(
      { balance_details: newBalanceUser },
      {
        transaction // Ensure the transaction is correctly passed
      }
    );
    
    const recruter = await Recruter.findByPk(recruterId);
    
    if (!recruter) {
      console.error("Error: Recruter not found");
      return false;
    }

    const newBalanceRecruter = recruter.balance_details + calculatePercentage(amount, 10);

    await Recruter.update({ balance_details: newBalanceRecruter }, {
      where: { id: recruter.id },
      transaction
    });

    return true;
  } catch (error) {
    console.error("An error occurred:", error.message);
    return false;
  }
};

const createTokenEntreprise = async (profile, role) => {
  const payload = {
    id: profile.id,
    username: profile.username,
    email: profile.email,
    stripe_id: profile.stripe_id,
    chatid: profile.chatid,
    usernamechat: profile.usernamechat,
    status: profile.status,
    display: profile.display,
    resetPasswordToken: profile.resetPasswordToken,
    verificationToken: profile.verificationToken,
    role,
  };
  return await jwt.sign(payload, secret, { expiresIn: "1y" });
};

const createTokenCandidat = async (profile, role) => {
  const payload = {
    id: profile.id,
    name: profile.name,
    first_name: profile.first_name,
    email: profile.email,
    stripe_id: profile.stripe_id,
    chatid: profile.chatid,
    usernamechat: profile.usernamechat,
    status: profile.status,
    display: profile.display,
    resetPasswordToken: profile.resetPasswordToken,
    verificationToken: profile.verificationToken,
    role,
  };
  return await jwt.sign(payload, secret, { expiresIn: "1y" });
};

const createTokenDateUser = async (profile, role) => {
  const payload = {
    id: profile.id,
    name: profile.name,
    gender: profile.gender,
    email: profile.email,
    stripe_id: profile.stripe_id,
    chatid: profile.chatid,
    usernamechat: profile.usernamechat,
    status: profile.status,
    display: profile.display,
    resetPasswordToken: profile.resetPasswordToken,
    verificationToken: profile.verificationToken,
    role,
  };
  return await jwt.sign(payload, secret, { expiresIn: "1y" });
};

const refreshtokenCandidat = async (req, res) => {

  const { token } = req.body;
  
  // Check if the token is a valid refresh token
  if (!token) {
      return res.sendStatus(401); // Unauthorized
  }

  // Wrap the jwt.verify call in a Promise
  jwt.verify(token, secret, async (err, user) => {
    if (err) {
      return res.status(403).send({ message: 'Forbidden. ' + err });
    }

    try {
      // Generate a new access token
      const accessToken = await createTokenCandidat(user, "CANDIDAT");
      // Set the new access token in an HttpOnly cookie
  
      // Return a response indicating success
      return res.status(200).send({ message: "Signup Successfully", accessToken });      

    } catch (tokenCreationError) {
      console.error('Error generating access token:', tokenCreationError);
      return res.status(500).send({ message: 'Error generating access token : ' + tokenCreationError });
    }
  });
};

const refreshtokenEntreprise = async (req, res) => {
  // Check if cookies exist and if the refresh token is present
  const { token } = req.body;
  
  // Check if the token is a valid refresh token
  if (!token) {
      return res.sendStatus(401); // Unauthorized
  }

  // Wrap the jwt.verify call in a Promise
  jwt.verify(token, secret, async (err, user) => {
    if (err) {
      return res.status(403).send({ message: 'Forbidden.' });
    }


    try {
      // Generate a new access token
      const accessToken = await createTokenEntreprise(user, "ENTREPRISE");
        // Return a response indicating success
      return res.status(200).send({ message: "Signup Successfully", accessToken });      
    } catch (tokenCreationError) {
      console.error('Error generating access token:', tokenCreationError);
      return res.status(500).send({ message: 'Error generating access token : ' + tokenCreationError });
    }
  });
};

const refreshtokenRecruter = async (req, res) => {

  // Check if cookies exist and if the refresh token is present
  const { token } = req.body;
  
  // Check if the token is a valid refresh token
  if (!token) {
      return res.sendStatus(401); // Unauthorized
  }

  // Wrap the jwt.verify call in a Promise
  jwt.verify(token, secret, async (err, user) => {
    if (err) {
      return res.status(403).send({ message: 'Forbidden.' });
    }

    try {
      // Generate a new access token
      const accessToken = await createTokenCandidat(user, "RECRUTER");
     

      // Return a response indicating success
      return res.status(200).send({ message: "Signup Successfully", accessToken });      

    } catch (tokenCreationError) {
      console.error('Error generating access token:', tokenCreationError);
      return res.status(500).send({ message: 'Error generating access token : ' + tokenCreationError });
    }
  });
};

const createUser = async (userData, transaction) => {
  const { error } = validateSignupUser(userData);
  if (error) {
    console.error("Error create user", error);
    return null;
  }
  try {
    const isUsernameUnique = await isFieldValueUniqueEntreprise(
      "username",
      userData.name
    );
    const isEmailUnique = await isFieldValueUniqueEntreprise(
      "email",
      userData.email
    );
    const isEmailUniqueFromUser = await isFieldValueUnique(
      "email",
      userData.email
    );
    const isEmailUniqueFromRecruter = await isFieldValueUniqueRecruter(
      "email",
      userData.email
    );
    if (
      !isUsernameUnique ||
      !isEmailUnique ||
      !isEmailUniqueFromUser ||
      !isEmailUniqueFromRecruter
    ) {
      console.error("Failed to add user because email is not unique");
      return null;
    }
 
    const user = await User.create(userData, { transaction });


    const token = await createTokenCandidat(user, "CANDIDAT");
    console.info("User created ");

    return { user, token };
  } catch (error) {
    console.error("Failed to create user", error);
    return null;
  }
};

// Function to calculate % of an amount
function calculatePercentage(amount, percentage) {
  return (amount * percentage) / 100;
}

const createEntreprise = async (entrepriseData, transaction) => {
  const { error } = validateSignupEntreprise(entrepriseData);
  if (error) {
    return null;
  }
  try {
    const isUsernameUnique = await isFieldValueUniqueEntreprise(
      "username",
      entrepriseData.username
    );
    const isEmailUnique = await isFieldValueUniqueEntreprise(
      "email",
      entrepriseData.email
    );
    const isEmailUniqueFromUser = await isFieldValueUnique(
      "email",
      entrepriseData.email
    );
    const isEmailUniqueFromRecruter = await isFieldValueUniqueRecruter(
      "email",
      entrepriseData.email
    );
    if (!isUsernameUnique) {
      console.error("Failed to add entreprise because email is not unique");
      return null;
    }
    if (
      !isEmailUnique ||
      !isEmailUniqueFromUser ||
      !isEmailUniqueFromRecruter
    ) {
      console.error("Failed to add entreprise because email is not unique");
      return null;
    }

    const entreprise = await Entreprise.create(entrepriseData, { transaction });
    const token = await createTokenEntreprise(entreprise, "ENTREPRISE");
    return { entreprise, token };
  } catch (error) {
    console.error("Failed to add entreprise:", error);
    return null;
  }
};

const getJobs = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    // **Common Filters (Apply across both types)**
    const commonFilters = {};

    // Handle location filtering
    if (req.query.location) {
      const locationsArray = req.query.location.split(",").map(location => location.trim()).filter(Boolean);
      commonFilters.location = {
        [Op.or]: locationsArray.map(location => {
          return { [Op.like]: `%${location}%` }; // Adjust matching as needed
        }),
      };
    }

    // Handle category filtering
    if (req.query.category) {
      const categoryArray = req.query.category.split(",").map(lang => lang.trim()).filter(Boolean);
      commonFilters.category = {
        [Op.overlap]: categoryArray // Assuming this field is an array in your database
      };
    }

    // Handle languages filtering
    if (req.query.languages) {
      const languagesArray = req.query.languages.split(",").map(lang => lang.trim()).filter(Boolean);
      commonFilters.languages = {
        [Op.overlap]: languagesArray // Assuming this field is an array in your database
      };
    }

    // Handle status filtering
    if (req.query.status) {
      commonFilters.status = req.query.status;
    }


    // Handling skills filtering if present
    if (req.query.skills) {
      const skillsArray = req.query.skills.split(",").map(skill => skill.trim());
      commonFilters.skills = {
        [Op.overlap]: skillsArray // Assuming this field is an array in your database
      };
    }

    // Handle keywords filtering for project description if present
    if (req.query.keywords) {
      const keywordArray = req.query.keywords.split(';').map(keyword => `%${keyword}%`);
      commonFilters.project_description = { [Op.iLike]: { [Op.any]: keywordArray } };
    }

    if (req.query.createdAt) commonFilters.createdAt = { [Op.gte]: literal(`NOW() - INTERVAL '${req.query.createdAt} days'`) };

    // **Appel Offres Query**
    const appelOffreQueryOptions = {
      offset: offset,
      limit: limit,
      order: [['createdAt', 'DESC']],
      attributes: [
        'id',
        ['appeloffre_description', 'description'],
        'status',
        'createdAt',
        'location',
        'title',
        'category',
        'skills',
        'display',
        'price',
        'type',
      ],
      where: {
        ...commonFilters,
        ...(req.query.recruterId ? { recruterId: req.query.recruterId } : {}),
        ...(req.query.description ? { appeloffre_description: { [Op.iLike]: `%${req.query.appeloffre_description}%` } } : {}),
        type: 'Contrat',
        deletedAt: null
      },
      include: [
        {
          model: Recruter,
          as: 'recruter',
          attributes: [['id', 'publierid'], 'name', 'first_name'],
        },
        {
          model: AppeloffreProposal,
          as: 'appeloffreProposals',
          attributes: ['id', 'appeloffreId', 'applierId', 'applierType', 'createdAt', 'updatedAt'],
        },
      ],
      group: [
        'appelOffre.id',
      ],
    };

    // Apply HAVING clause if necessary
    if (req.query.applications) {
      appelOffreQueryOptions.having = literal(`COUNT('appeloffreProposals.id') <= ${req.query.applications}`);
    }

    // **Execute Queries**
    const [projectCount, projects] = await Promise.all([
      Project.count({
        where: {
          ...commonFilters,
          ...(req.query.entrepriseId ? { entrepriseId: req.query.entrepriseId } : {}),
          ...(req.query.description ? { project_description: { [Op.iLike]: `%${req.query.description}%` } } : {}),
          type: 'SHARETASK',
          deletedAt: null,
        }
      }),
      Project.findAll({
        offset: offset,
        limit: limit,
        order: [['createdAt', 'DESC']],
        attributes: [
          'id',
          ['project_description', 'description'],
          'status',
          'createdAt',
          'location',
          'title',
          'category',
          'display',
          'skills',
          'price',
          'type',
        ],
        where: {
          ...commonFilters,
          ...(req.query.entrepriseId ? { entrepriseId: req.query.entrepriseId } : {}),
          ...(req.query.description ? { project_description: { [Op.iLike]: `%${req.query.project_description}%` } } : {}),

          type: 'SHARETASK',
          deletedAt: null,
        },
        include: [
          {
            model: Entreprise,
            as: 'entreprise',
            attributes: [['id', 'publierid'], 'username'],
          },
          {
            model: ProposalEntreprise,
            as: 'proposalentreprises',
            attributes: ['id', 'projectId', 'userId', 'status', 'createdAt', 'updatedAt'],
            required: false,
          },
          {
            model: Proposal,
            as: 'proposals',
            attributes: ['id', 'projectId', 'userId', 'status', 'createdAt', 'updatedAt'],
            required: false,
          },
        ],
      })
    ]);

    // Count for AppelOffre
    const [appelOffreCount, appelOffres] = await Promise.all([
      AppelOffre.count({
        where: {
          ...commonFilters,
          ...(req.query.recruterId ? { recruterId: req.query.recruterId } : {}),
          type: 'Contrat',
          deletedAt: null,
        }
      }),
      AppelOffre.findAll(appelOffreQueryOptions),
    ]);

    // **Combine Results**
    const allJobs = [...projects, ...appelOffres];
    allJobs.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    const totalCount = projectCount + appelOffreCount;

    // **Pagination**
    const totalPages = Math.ceil(totalCount / limit);

    // **Response**
    res.json({
      data: allJobs,
      pagination: {
        totals: totalCount,
        totalPages: totalPages,
        currentPage: page,
      },
    });
  } catch (ex) {
    console.error("Error fetching all jobs:", ex);
    res.status(500).json({ error: "Internal server error :" + ex  });
  }
};

// Utility function
function isNotObject(value) {
  return typeof value !== 'object' || value === null; // Also checks for null since typeof null returns 'object'
}


// Utility function
function isNotObject(value) {
  return typeof value !== 'object' || value === null; // Also checks for null since typeof null returns 'object'
}


function isNotObject(value) {
  return typeof value !== 'object' || value === null; // Also checks for null since typeof null returns 'object'
}

const deleteUserChat = async (chatid) => {
  try {
    const response = await axios.delete(`${process.env.HOST_API_MONGODB}/users?_id=${chatid}`);
    return response;
  } catch (error) {
    console.error(error);
    return false; // Return false in case of an error
  }
};

const deleteChannel = async (_id) => {
  try {
    // Append the channelId directly to the URL
    const response = await axios.delete(`${process.env.HOST_API_MONGODB}/topics?_id=${_id}`);
    return response.data; // Return response data
  } catch (error) {
    console.error(error);
    return false; // Return false in case of an error
  }
};

const createChannel = async (topicname, owner, memberid, memberUsername) => {

  try {
    const response = await axios.post(`${process.env.HOST_API_MONGODB}/topics`, {
      topicname,
      owner,
      memberid,
      memberUsername
    },
    {
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    });

    const topic = response.data.topic; // Check the structure based on your backend response

    // Check whether the topic was successfully created
    if (response.status === 201 && topic && topic.acknowledged && topic.insertedId) {
      return topic.insertedId; // Return the topic ID
    } else {
      console.error('Failed to create topic:', response.data); // Log additional information
      return false; // Return false if the topic was not created successfully
    }
  } catch (error) {
    console.error('Error creating channel:', error); // More descriptive error message
    return false; // Return false in case of an error
  }
};

const sendMessage = async (chatid, message, channelId) => {
  try {
    const response = await axios.post(`${process.env.HOST_API_MONGODB}/messages`, {
      topic: channelId,
      from: chatid,
      type: "Text",
      content: message,
    });

    // Check if the message was successfully sent
    if (response.status === 201) {
      return true; // Return true if the message was sent successfully
    } else {
      console.error('Failed to send message:', response.data); // Log additional information
      return false; // Return false if the message was not sent successfully
    }
  } catch (error) {
    console.error('Error sending message:', error); // More descriptive error message
    return false; // Return false in case of an error
  }
};


const checkjwt = async (req, res, userId) => {

  if (!req.user || !req.user.id || req.user.id != userId) {

    return false;
  } else {
  return true ;
 }
}

const getProposalsWithProjectId = async (req, res) => {
  const projectId = req.query.projectId;
  const searchTerm = req.query.search || ""; // Get search term from query parameters
  const statusProposals = req.query.statusProposals || ""; // Get statusProposals from query parameters
  const userId = req.query.userId; // Get userId from query parameters
  const page = parseInt(req.query.page) || 1; // Default to page 1 if not provided
  const limit = parseInt(req.query.limit) || 10; // Default to 10 results per page if not provided
  const offset = (page - 1) * limit; // Calculate the offset

  try {
      // Create a search condition for `proposal_description` and `status`
      const whereCondition = {
          projectId,
          proposal_description: {
              [Op.like]: `%${searchTerm}%` // Searches within proposal descriptions
          },
      };

      // Include status filtering if provided
      if (statusProposals) {
          whereCondition.status = statusProposals; // Add status filter
      }

      // Include userId filtering if provided
      if (userId) {
          whereCondition.userId = userId; // Add userId filter
      }

      // Fetch proposals from both Proposal and ProposalEntreprise models
      const [proposals, proposalEnterprise] = await Promise.all([
          Proposal.findAndCountAll({
              where: whereCondition, // Include the dynamic where conditions built above
              include: [
                  {
                      model: User,
                      attributes: ['name', 'first_name', 'id'], // Get user name and first name from ProposalEntreprise
                  },
              ],
              attributes: ['id' ,'price', 'status', 'createdAt', 'proposal_description', 'orderID', 'type', 'totalPrice'], // Select proposal attributes
              limit, // Set the limit
              offset, // Set the offset
          }),
          ProposalEntreprise.findAndCountAll({
              where: {
                  ...whereCondition, // Spread the same where condition for ProposalEntreprise
                  // You can adjust this if you need specific filtering for ProposalEntreprise
              },
              include: [
                  {
                      model: User,
                      attributes: ['name', 'first_name', 'id'], // Get user name and first name from ProposalEntreprise
                  },
              ],
              attributes: ['id' ,'price', 'status', 'createdAt', 'proposal_description', 'orderID', 'type' , 'totalPrice'], // Select proposalEnterprise attributes
              limit, // Set the limit
              offset, // Set the offset
          }),
      ]);

      // Combine both proposal results
      const combinedProposals = [...proposals.rows, ...proposalEnterprise.rows];

      // Metadata to return along with results
      const totalProposals = proposals.count + proposalEnterprise.count; // Total count of proposals
      const totalPages = Math.ceil(totalProposals / limit); // Calculate total pages

      // Send the paginated result back in response
      res.status(200).json({
          total: totalProposals,
          totalPages: totalPages,
          currentPage: page,
          proposals: combinedProposals,
      });

  } catch (error) {
      console.error("Error fetching proposals:", error);
      res.status(500).json({ message: "Internal server error." });
  }
};


const getProposalEntrepriseById = async (proposalEntrepriseId) => {
  try {
    
    const proposalsEntreprise = await ProposalEntreprise.findByPk(
      proposalEntrepriseId,
      {
        include: [
          {
            model: Project,
            attributes: ['id', 'title', 'project_description', 'status', 'price'], // Specify the fields you want from the Project model
          }
        ]
      }
    );

    if (!proposalsEntreprise) {
      return null;
    }

    return proposalsEntreprise ;
  } catch (ex) {
    console.error("Error fetching proposalEntreprise:", ex);
    return null;
  }
};

const getProposalbyId = async (proposalId) => {
  try {
      const proposal = await Proposal.findByPk(proposalId,
          {
              include: [
                {
                  model: Project,
                  attributes: ['id', 'title', 'project_description', 'status', 'price'], // Specify the fields you want from the Project model
                }
              ]
            }
      );
      if (!proposal) {
          return null;
      }
      return proposal ;
  } catch (error) {
      console.error("Failed to fetch proposal:", error);
      return null;
  }
};

const getProductbyId = async (productId) => {
  try {
    const product = await Product.findByPk(productId, {
      attributes: ['title', 'price'], // Include multiple attributes
  });
          
      if (!product) {
          return null;
      }
      return product ;
  } catch (error) {
      console.error("Failed to fetch product:", error);
      return null;
  }
};

/**
 * Function to get URLs of the objects from S3 bucket based on location
 * @param {string} location - The prefix used to filter the objects in S3
 * @returns {Promise<string[]>} The list of URLs of the S3 objects
 */
const getURL = async (location) => {
  try {
      const command = new ListObjectsV2Command({
          Bucket: process.env.BUCKET, // Get the bucket name from environment variable
          Prefix: location,
      });

      const response = await s3Client.send(command);

      // Check if response has Contents
      if (response.Contents && response.Contents.length > 0) {
          // Map over the retrieved contents to create the URLs
          const urls = response.Contents.map(content => {
              return `https://${process.env.BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/${content.Key}`;
          });

          return urls; // Return the list of URLs
      } else {

          return false; // Return false if no contents were found
      }

  } catch (error) {
      console.error('Error fetching URLs from S3:', error);
      throw error; // Re-throw the error to handle it in the calling function
  }
};

let s3Config = { 
  region: `${process.env.REGION}` // e.g., 'us-east-1'
};

// Conditionally add credentials when working in a local environment
if (`${process.env.MODE}` === 'local') {
  s3Config.credentials = {
      accessKeyId: `${process.env.ACCESSKEYID}`,
      secretAccessKey: `${process.env.SECRETACCESSKEY}`,
  };
}

const s3Client = new S3Client(s3Config);

const getContacts = async (filters, pagination) => {
  try {
      const { type, country_details, description } = filters;
      const { offset, limit } = pagination;

      let countryArray;

      if(country_details) {
         countryArray = country_details.split(','); // Splitting by comma
      }

      const promises = []; // Initialize an array to hold the promises
      const counts = {}; // Object to hold counts for each model

      // User model query with description search
      if (type === 'CANDIDATS' || type === 'ALL' || type === 'ENTREPRISES,CANDIDATS' || type === 'CANDIDATS,ENTREPRISES' ) {
          const usersPromise = User.findAndCountAll({
            
              where: {
                  ...{status: 'ACTIVE'},
                  ...(country_details ? { country_details: { [Op.in]: countryArray } } : {}),
                  ...(description ? { profile_description: { [Op.like]: `%${description}%` } } : {}),
              },
              offset: offset,
              limit: limit,
          });
          promises.push(usersPromise);
      }

      // Entreprise model query with description search
      if (type === 'ENTREPRISES' || type === 'ALL'  || type === 'ENTREPRISE,CANDIDAT') {
          const entreprisePromise = Entreprise.findAndCountAll({
              where: {
                  ...{status: 'ACTIVE'},
                  ...(country_details ? { country_details: { [Op.in]: countryArray } } : {}),
                  ...(description ? { entreprise_description: { [Op.like]: `%${description}%` } } : {}),
              },
              offset: offset,
              limit: limit,
          });
          promises.push(entreprisePromise);
      }

      // Execute all the promises concurrently
      const [usersResponse, entreprisesResponse] = await Promise.all(promises);

      // Create counts for pagination
      counts.users = usersResponse ? usersResponse.count : 0;
      counts.entreprises = entreprisesResponse ? entreprisesResponse.count : 0;

      // Return the found contacts and their counts
      return {
          users: usersResponse ? usersResponse.rows : [],
          entreprises: entreprisesResponse ? entreprisesResponse.rows : [],
          counts, // This includes total counts for each category
      };

  } catch (error) {
      console.error("Error fetching contacts:", error);
      throw error; // Or handle the error as needed
  }
};
const getUserEntity = async (userType, userId) => {
  switch (userType) {
      case 'ENTREPRISE':
          const entreprise = await Entreprise.findByPk(userId, {
              attributes: ['id', 'username', 'type','chatid','email' ,'display'], // Retrieve only id and name
          });
          return entreprise ? entreprise.toJSON() : null; // Convert to plain object
      case 'CANDIDAT':
          const candidat = await User.findByPk(userId, {
              attributes: ['id', 'name', 'first_name', 'email', 'type','chatid', 'display' ], // Retrieve only id and name
          });
          return candidat ? candidat.toJSON() : null; // Convert to plain object
      case 'RECRUTER':
          const recruter = await Recruter.findByPk(userId, {
              attributes: ['id', 'name', 'first_name' ,'email','type','chatid', 'display'], // Retrieve only id and name
          });
          return recruter ? recruter.toJSON() : null; // Convert to plain object
       case 'ACCOUNTING':
            const accounting = await Accounting.findByPk(userId, {
                attributes: ['id', 'name', 'first_name' , 'email','type','chatid'], // Retrieve only id and name
            });
            return accounting ? accounting.toJSON() : null; // Convert to plain object 
      default:
          throw new Error("Invalid userId type");
  }
};

const getJobAccountingEntity = async (jobType, jobId) => {
  switch (jobType) {
    case 'COMPANY':
      const company = await Company.findByPk(jobId);
      return company ? company.toJSON() : null; // Convert to plain object
  case 'REQUEST_COMPANY_CREATION':
      const requestCompanyCreation = await RequestCompanyCreation.findByPk(jobId);
      return requestCompanyCreation ? requestCompanyCreation.toJSON() : null; // Convert to plain object
      default:
          throw new Error("Invalid jobId type");
  }
}; 


const getProduct = async (productType, productId) => { 

  switch (productType) {
    case 'SHARETASK':
      const proposal = await Proposal.findByPk(productId);
      return proposal ? proposal.toJSON() : null; // Convert to plain object

    case 'COMPOSED_FREELANCE':
      const proposalEntreprise = await Proposalentreprise.findByPk(productId);
      return proposalEntreprise ? proposalEntreprise.toJSON() : null; // Convert to plain object
     
    case 'PRODUCT':
      const product = await Product.findByPk(productId);
      return product ? product.toJSON() : null; // Convert to plain object
    
    case 'REQUEST_COMPANY_CREATION':
      const requestCompanyCreation = await RequestCompanyCreation.findByPk(productId);
      return requestCompanyCreation ? requestCompanyCreation.toJSON() : null; // Convert to plain object

      default:
          throw new Error("Invalid productType type");
  }
};


const updateJobAccountingEntity = async (jobType, jobId, status) => {

  switch (jobType) {
    case 'COMPANY':
      const company = await Company.findByPk(jobId);
      if (company) {
        await company.update({ status: status });
        return company.toJSON(); // Convert to plain object and return
      }
      return false; // Company not found

    case 'REQUEST_COMPANY_CREATION':
      const requestCompanyCreation = await RequestCompanyCreation.findByPk(jobId);
      if (requestCompanyCreation) {
        await requestCompanyCreation.update({ status: status });
        return requestCompanyCreation.toJSON(); // Convert to plain object and return
      }
      return false; // Request not found

    default:
      throw new Error("Invalid jobId type");
  }
};


const fetchRequestCompanyCreation = async (id) => {
  try {
    const requestCompanyCreation = await RequestCompanyCreation.findByPk(id);

    const userEntity = await getUserEntity(requestCompanyCreation.typeUser, requestCompanyCreation.userId);
    // Create the result object
    const result = {
      ...requestCompanyCreation.toJSON(),
      user: userEntity 
    };

    return result || false; // Return false if not found
  } catch (error) {
    console.error("Error fetching requestCompanyCreation:", error);
    return false; // Return false in case of an error
  }
};

const fetchCompany = async (id) => {
  try {
    const company = await company.findByPk(id);

    const userEntity = await getUserEntity(company.typeUser, company.userId);
    // Create the result object
    const result = {
      ...company.toJSON(),
      user: userEntity 
    };

    return result || false; // Return false if not found
  } catch (error) {
    console.error("Error fetching requestCompanyCreation:", error);
    return false; // Return false in case of an error
  }
};

const getAccountingJob = async (id) => {
  try {
    const accountingjob = await AccountingJob.findByPk(id);
    if (!accountingjob) {
      return false;
    }
    const jobEntity = await getJobAccountingEntity(accountingjob.accountingFolderType, accountingjob.accountingFolderId);

        // Create the result object
        const result = {
          ...accountingjob.toJSON(),
          job: jobEntity 
        };

    return result;
  } catch (error) {
    console.error("Failed to fetch accountingjob:", error);
    return false;
  }
};

const addCompanyFromAcountingJobByAccounting = async (id,companyBINcreated) => {
  let transaction;

  // Fetch the accounting job by ID
  const accountingJob = await AccountingJob.findByPk(id);

  // Check if accounting job exists
  if (!accountingJob) {
    return false;
  }

  // Fetch the related RequestCompanyCreation
  const request_company_creation = await RequestCompanyCreation.findByPk(accountingJob.accountingFolderId);
  
  // Check if request company creation exists
  if (!request_company_creation) {
    return false;
  }

  // Prepare data for the new company
  const companyData = {
    presidentId: request_company_creation.presidentId,
    presidentType: request_company_creation.presidentType,
    company_location: request_company_creation.company_location,
    identity_type_status: 'VALIDATED',
    company_location_status: 'VALIDATED',
    identity_front_status:'VALIDATED',
    identity_back_status: 'VALIDATED',
    identity_type: request_company_creation.identity_type,
    identity_number: request_company_creation.identity_number,
    company_country: request_company_creation.company_country,
    company_siren: companyBINcreated,
    company_siren_status: 'VALIDATED',
    company_name: request_company_creation.company_name,
    company_name_status: 'VALIDATED',
    status: 'VALIDATED',
  };
  let company;
  try {
    // Start a new transaction
    transaction = await db.connection.transaction();

    // Create the new company
     company = await Company.create(companyData, { transaction });

    // Prepare accounting job data for the update
    const accountingJobData = {
      accountingFolderId: company.id,
      accountingFolderType: 'COMPANY',
      status: 'VALIDATED',
    };

    // Update the accounting job with new data
    await accountingJob.update(accountingJobData, { transaction });

    // Prepare data for updating the request company creation
    const requestCompanyData = {
      status: "COMPANY_CREATED",
    };
    // Update the request company creation status
    await request_company_creation.update(requestCompanyData, { transaction });

    // Commit the transaction
    await transaction.commit();
    // Return true to indicate success
    return company;
  } catch (error) {
    // Roll back the transaction in case of error
    if (transaction) await transaction.rollback();
    console.error('Error adding company from accounting job:', error); // Log the error for debugging
    return false;
  }
};


module.exports = {
  isFieldValueUnique,
  fetchRequestCompanyCreation,
  isFieldValueUniqueExceptCurrent,
  findUserByEmail,
  addCompanyFromAcountingJobByAccounting,
  fetchCompany,
  getContacts,
  updateJobAccountingEntity,
  getJobs,
  getAccountingJob,
  getJobAccountingEntity,
  getUserEntity,
  getProduct,
  getRecruterByToken,
  getProposalEntrepriseById,
  getProposalbyId,
  refreshtokenCandidat,
  refreshtokenEntreprise,
  refreshtokenRecruter,
  isNotObject,
  getProposalsWithProjectId,
  isFieldValueUniqueEntreprise,
  isFieldValueUniqueAccounting,
  isFieldValueUniqueExceptCurrentEntreprise,
  findEntrepriseByUsername,
  findEntrepriseByEmail,
  findRecruterByEmail,
  findAccountingByEmail,
  isFieldValueUniqueRecruter,
  createUser,
  getURL,
  createEntreprise,
  calculatePercentage,
  calculBalanceRecruterAndRecruted,
  findWithdrawalMethodByUserId,
  calculateProductStar,
  createTokenEntreprise,
  deleteChannel,
  deleteUserChat,
  createTokenCandidat,
  calculateUserStar,
  createChannel,
  sendMessage,
  getProductbyId,
  checkjwt,
  createTokenDateUser,
  isFieldValueUniqueDateUser,
  findDateUserByEmail
};
