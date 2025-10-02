const { Op } = require("sequelize");
const User = require("../models/user.model");
const Comment = require("../models/comment.model");
const { validateUserPatch, validateSignupUser } = require("../validators/user.validators");
const ProposalEntreprise = require("../models/proposalentreprise.model");
const Proposal = require("../models/proposal.model");
const Project = require("../models/project.model");
const {
    isNotObject,
    checkjwt,
    getURL
  } = require("./utils");
const { getUserComments } = require("./comment.controller");


exports.updateUserPassword = async (req, res) => {

   
    newPassword = req.body.newPassword ;

    try {
        const users = await User.findAll({
            where: {
                chatid: null
            }
        });
        
        for (const user of users) {
            user.password = newPassword; // set the new password
            await user.save(); // save the user, which will trigger the hashing mechanism
            console.log(`Updated password for user: ${user.email}`);
        }

        console.log('Password update completed for users with chatid NULL');

        res.status(200).json({ message: "ok" });

    } catch (error) {
        console.error('Error updating password:', error);
        res.status(500).json({ error: "Internal server error: " + ex });

    }
};


exports.getUsers = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const offset = (page - 1) * limit;

        const filters = {};
        filters.status = 'ACTIVE';

        // If hp query is provided and is explicitly 'false', keep filter as false
        if (req.query.hp !== undefined) {
            if (req.query.hp === 'true') {
                // Don't set the hp filter at all when true
                delete filters.hp; 
            } else if (req.query.hp === 'false') {
                // It's already set to false, so do nothing
                filters.hp = false;
            }
        }
        // Add skills filter if provided
        if (req.query.skills) {
            const skills = req.query.skills.split(",");
            filters.skills = {
                [Op.contains]: skills,
            };
        }

        // Add job filter if provided
        if (req.query.job) {
            const job = req.query.job.split(",");
            filters.job = {
                [Op.any]: job, // Checks if any of the provided skills match the column
            };
         }

    
        // Continue with other filters
        if (req.query.id) {
            filters.id = req.query.id;
        }

        if (req.query.rising_star_global) {
            filters.rising_star_global = {
                [Op.gte]: req.query.rising_star_global
            };
        }

        if (req.query.country_details) {
            const country_details = req.query.country_details.split(",");
            filters.country_details = {
                [Op.any]: country_details, // Checks if any of the provided skills match the column
            };
        }

        if (req.query.languages) {
            const languages = req.query.languages.split(",");
            filters.languages = {
                [Op.contains]: languages,
            };
        }


        if (req.query.email) {
            filters.email = req.query.email;
        }

        if (req.query.search) {
            const search = req.query.search;
            filters.profile_description = {
                [Op.iLike]: `%${search}%`,
            };
        }

        if (req.query.currency) {
            filters.currency = req.query.currency;
        }
        
        if (req.query.hour_rate_max && !req.query.hour_rate_min) {
            filters.hourly_rate = {
                [Op.between]: [1, req.query.hour_rate_max]
            };
        }

        if (req.query.hour_rate_min && !req.query.hour_rate_max) {
            filters.hourly_rate = {
                [Op.between]: [req.query.hour_rate_min, 10000]
            };
        }

        if (req.query.hour_rate_min && req.query.hour_rate_max) {
            filters.hourly_rate = {
                [Op.between]: [req.query.hour_rate_min, req.query.hour_rate_max]
            };
        }

        if (req.query.keywords) {
            const keywordArray = req.query.keywords.split(';').map(keyword => `%${keyword}%`);
            filters.profile_description = { [Op.iLike]: { [Op.any]: keywordArray } };
        }

        // Fix Comments
        const { count, rows: users } = await User.findAndCountAll({
            where: {
                [Op.or]: [
                    { 
                        // Ensure skills is an array that is not empty
                        skills: { 
                            [Op.ne]: null,
                            [Op.or]: { [Op.gt]: [] } // Checks that skills array has at least one element
                        } 
                    },
                    { 
                        job: { 
                            [Op.ne]: null, // Check that job is not null
                            [Op.ne]: ""    // Ensure that job isn't an empty string if relevant
                        }
                    }
                ],
                ...filters,
            },
            offset: offset,
            limit: limit,
            order: [['createdAt', 'DESC']],
        });
        
        const results = await Promise.all(users.map(async item => {
            const commentUser = await getUserComments(item.id);
            return {
                ...item.toJSON(),
                comments: commentUser.data
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
        console.error("Error fetching users:", ex);
        res.status(500).json({ error: "Internal server error: " + ex });
    }
};


exports.getUser = async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        return res.status(200).json({ data: user });
    } catch (error) {
        console.error("Failed to update user:", error);
        return res.status(500).json({ error: "Failed to update user : " + error });
    }
};

exports.updateUser = async (req, res) => {
    const userId = req.params.id;
    const userData = req.body;
    const { error } = validateUserPatch(userData);


    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    try {
        const existingUser = await User.findByPk(userId);
        if (!existingUser) {
            return res.status(404).json({ error: "User not found" });
        }

        await existingUser.update(userData);
        const updatedUser = await User.findByPk(userId);
        return res.status(200).json(updatedUser);

    } catch (error) {
        console.error("Failed to update user:", error);
        return res.status(500).json({ error: "Failed to update user : " + error });
    }
};

exports.deleteUser = async (req, res) => {
    const userId = req.params.id;  
    const jwt= await checkjwt(req, res,  userId);

    if(!jwt){
        return res.status(401).json({ error: "checkjwt not ok " });

    }

    try {
        const deletedUser = await User.destroy({
            where: { id: userId },
            force: false, // i need it for test
        });
        if (deletedUser === 0) {
            return res
                .status(404)
                .json({ success: false, message: "User not found or already deleted" });
        }
        return res.json({ success: true, message: "User deleted successfully" });
    } catch (error) {
        console.error("Error soft deleting user:", error);
        return res.status(500).json({
            success: false,
            message: "An error occurred while soft deleting user : " + error,
        });
    }
};


exports.findUser = async (userId) => {
    try {
        const user = await User.findByPk(userId);
        if (!user) {
            return null;
        }
        return user;
    } catch (error) {
        console.error("Failed to fetch user:", error);
    }
};

exports.findUserAllTasksProjects = async (req, res) => {
    const userId = req.params.id;
    const userType = req.query.userType;
    const typeProjects = req.query.typeProjects;
    const jwt= await checkjwt(req, res,  userId);

    if(!jwt){
        return res.status(401).json({ error: "checkjwt not ok " });

    } 


    if (userType && userType !== 'CANDIDAT' ) {
        return res.status(200).json([]);     
     }

      if (!userId || !isNotObject(userId) ) {
        return res.status(500).json({ error: "Failed to find userId  " });
      }

    const user = await User.findByPk(userId);

 
    if (!user) {
      return res.status(500).json({ error: "Failed to find user" });
    }
    const includeObject = {
        include: [
            {
                model: Project,
                attributes: ['id' ,'title', 'project_description', 'entrepriseId' ],
                required: true,
            }
        ],
      where: typeProjects
        ? { status: typeProjects } 
        : {}, 
    };
   
    const proposals = await user.getProposals(includeObject);
    const projectIds = proposals.map(item => item.dataValues.projectId);

    return res.status(200).json(projectIds);
  };


  exports.findUserAllEntrepriseProjects = async (req, res) => {
    const userId = req.params.id;
    const typeProjects = req.query.typeProjects;
    const jwt= await checkjwt(req, res,  userId);

    if(!jwt){
        return res.status(401).json({ error: "checkjwt not ok " });

    }


    if (!userId || !isNotObject(userId) ) {
        return res.status(500).json({ error: "Failed to find userId" });
      }
  
    const user = await User.findByPk(userId);
  
    if (!user) {
      return res.status(500).json({ error: "Failed to find user" });
    }
    const includeObject = {
        include: [
            {
                model: Project,
                attributes: ['id' , 'title', 'project_description', 'entrepriseId' ],
                required: true,
            }
        ],
      
      where: typeProjects
        ? { status: typeProjects } 
        : {}, 
    };
   
    const proposals = await user.getProposalentreprises(includeObject);
    const projectIds = proposals.map(item => item.projectId);
    return res.status(200).json(projectIds);
  };

  exports.createusersHP = async (req, res) => {
    const usersData = req.body; // Expecting an array of user data

    try {
        // Use Promise.all to handle multiple user creation in parallel
        const users = await Promise.all(usersData.map(async (userData) => {
            return await User.create(userData);
        }));

        return res.status(200).json(users); // Return all created users
    } catch (error) {
        console.error("Error fetching createUsers:", error);
        return res.status(500).json({ error: "Internal server error: " + error });
    }
}

  exports.getAllProjectsByUserId = async (req, res) => {
    const userId = req.params.id;
    const statusProposals = req.query.statusProposals;
    const title = req.query.title;
    const limit = parseInt(req.query.limit) || 10;
    const page = parseInt(req.query.page) || 1;
    const jwt= await checkjwt(req, res,  userId);


    if(!jwt){
        return res.status(401).json({ error: "checkjwt not ok " });

    }
    // Validate userId
    if (!userId || !isNotObject(userId)) {
        return res.status(400).json({ error: "Failed to find userId" });
    }

    try {
        const user = await User.findByPk(userId);

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Include proposals connected with the user, along with their associated projects
        const includeProposalsEntrepriseObject = {
            include: [
                {
                    model: Project,
                    attributes: ['id', 'title', 'project_description', 'type', 'entrepriseId'],
                    required: true, // Ensures that only proposals with associated projects are included
                    where: title ? { title: { [Op.iLike]: `%${title}%` } } : {},
                }
            ],
            attributes: ['status', 'proposal_description', 'price', 'createdAt'],
            where: statusProposals ? { status: statusProposals } : {},
            limit: limit,
            offset: (page - 1) * limit,
        };

        const proposalsEntreprise = await user.getProposalentreprises(includeProposalsEntrepriseObject);

        // Include for getting user proposals with projects
        const includeProposalObject = {
            include: [
                {
                    model: Project,
                    attributes: ['id', 'title', 'project_description', 'type', 'entrepriseId'],
                    required: true,
                    where: title ? { title: { [Op.iLike]: `%${title}%` } } : {},
                }
            ],
            attributes: ['status', 'proposal_description', 'price', 'createdAt'],
            where: statusProposals ? { status: statusProposals } : {},
            limit: limit,
            offset: (page - 1) * limit,
        };

        const proposals = await user.getProposals(includeProposalObject);

        // Combine both proposals
        const userProjects = proposalsEntreprise.concat(proposals);

        // Optionally count proposals for pagination
        const countEntreprise = await user.countProposalentreprises({
            where: statusProposals ? { status: statusProposals } : {},
            include: [
                {
                    model: Project,
                    required: true,
                    where: title ? { title: { [Op.iLike]: `%${title}%` } } : {},
                    attributes: [] // Not selecting any specific attributes for count, just the existence is enough
                },
            ],
        });

        const countProposals = await user.countProposals({
            where: statusProposals ? { status: statusProposals } : {},
            include: [
                {
                    model: Project,
                    required: true,
                    where: title ? { title: { [Op.iLike]: `%${title}%` } } : {},
                    attributes: [],
                },
            ],
        });

        const totalCount = countEntreprise + countProposals; // Count of all projects

        // Sort combined projects by createdAt
        userProjects.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

        const totalPages = Math.ceil(totalCount / limit); // Calculate total pages

        return res.status(200).json({
            data: userProjects,
            pagination: {
                total: totalCount,
                totalPages: totalPages,
                currentPage: page,
            },
        });
    } catch (error) {
        console.error("Error fetching projects:", error);
        return res.status(500).json({ error: "Internal server error : " + error });
    }
};


exports.checkProfilComplet= async (req, res) => {
      const userId = req.params.id;
      const user = await User.findByPk(userId);
      const locationProfil = `candidats/${userId}/profil/img-profil/`;
      const location = `candidats/${userId}/profil/cv`;

        if (!user) {
            return res.status(404).json({ "message": "user not found" }); ;
        }
        
        let bol_user_complete = true ;

        if(!user.profile_description) { 
                                      
            bol_user_complete = false;
        }

        if(!user.job) {
            bol_user_complete = false;

        }
        
        if(!user.hourly_rate  || user.hourly_rate  === 0.0 ) {   
 

            bol_user_complete = false;

        }

        if(!user.services)
        {     
          bol_user_complete = false;
    
        }

        if(user.languages.length === 0) {  

            bol_user_complete = false;

        }

        if(!user.country_details) {   

            bol_user_complete = false;

        }

        if(user.skills.length === 0) {   
            bol_user_complete = false;

        }

       if(await getURL(location) === false) {

            bol_user_complete = false;

        }

     /*  if(await getURL(locationProfil) === false) {
            bol_user_complete = false;

        } */


        return res.status(200).json({ "bol_user_complete": bol_user_complete });
};

exports.findUserByToken = async (req, res) => {

    const token = req.params.token;
   
    try {
        // Find the user by the verificationToken
        const user = await User.findOne({
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
