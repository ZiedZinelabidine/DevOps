const { Op, literal } = require("sequelize");
const Project = require("../models/project.model");
const ProposalEntreprise = require("../models/proposalentreprise.model");
const Proposal= require("../models/proposal.model");
const User= require("../models/user.model");
const Entreprise= require("../models/entreprise.model");



const { validateProject, validateProjectUpdate } = require("../validators/project.validators");


exports.getProjects = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const offset = (page - 1) * limit;
        const filters = {};
        const attributes= ['id',['project_description','description'] ,'status','createdAt','location','title', 'display' ,  'category','skills','type','price'] ;


        // Apply filters based on query parameters (similar to getAppelOffres)
        if (req.query.entrepriseId) filters.entrepriseId = req.query.entrepriseId;
        if (req.query.status) filters.status = req.query.status;
        
        if (req.query.title) filters.title = { [Op.iLike]: `%${req.query.title}%` };
        if (req.query.description) filters.project_description = { [Op.iLike]: `%${req.query.description}%` };


            // Handle location filtering
      if (req.query.location) {
        const locationsArray = req.query.location.split(",").map(location => location.trim()).filter(Boolean);
        filters.location = {
          [Op.or]: locationsArray.map(location => {
            return { [Op.like]: `%${location}%` }; // Adjust matching as needed
          }),
        };
      }
  
      // Handle category filtering
      if (req.query.category) {
        const categoryArray = req.query.category.split(",").map(lang => lang.trim()).filter(Boolean);
        filters.category = {
          [Op.overlap]: categoryArray // Assuming this field is an array in your database
        };
      }
  
      // Handle languages filtering
      if (req.query.languages) {
        const languagesArray = req.query.languages.split(",").map(lang => lang.trim()).filter(Boolean);
        filters.languages = {
          [Op.overlap]: languagesArray // Assuming this field is an array in your database
        };
      }
  
      // Handle status filtering
      if (req.query.status) {
        filters.status = req.query.status;
      }

      if (req.query.type) {
        filters.type = req.query.type;
      }
     
      // Handling skills filtering if present
      if (req.query.skills) {
        const skillsArray = req.query.skills.split(",").map(skill => skill.trim());
        filters.skills = {
          [Op.overlap]: skillsArray // Assuming this field is an array in your database
        };
      }
  
      // Handle keywords filtering for project description if present
      if (req.query.keywords) {
        const keywordArray = req.query.keywords.split(';').map(keyword => `%${keyword}%`);
        filters.project_description = { [Op.iLike]: { [Op.any]: keywordArray } };
      }
  
      if (req.query.createdAt) filters.createdAt = { [Op.gte]: literal(`NOW() - INTERVAL '${req.query.createdAt} days'`) };
     
        // Query Options
        const queryOptions = {
            attributes: attributes,
            where: filters,
            offset: offset,
            limit: limit,
            order: [['createdAt', 'DESC']],
            include: [
                {
                    model: Entreprise,
                    as: 'entreprise', // Ensure correct alias if necessary
                    attributes: [['id','publierid'] ,'username'],  // Include recruiter's name and first name
                },
                {
                    model: ProposalEntreprise,
                    as: 'proposalentreprises', // Use the correct alias
                    attributes: ['id', 'projectId','userId' ,'status' , 'price','createdAt', 'updatedAt'], // Include necessary proposalentreprises columns
                    required: false, // LEFT JOIN equivalent
                },
                {
                    model: Proposal,
                    as: 'proposals', // Use the correct alias
                    attributes: ['id', 'projectId','userId','status','price' , 'createdAt', 'updatedAt'], // Include necessary proposal columns
                    required: false, // LEFT JOIN equivalent
                },
            ],
        };

        // Add GROUP BY and HAVING clause if applications filter is provided
        if (req.query.applications) {
            queryOptions.group = [
                'project.id',
            ];
            queryOptions.having = literal(`COUNT('proposals.id') <= ${req.query.applications}`); // Corrected condition
        }
        // Execute the query
        const { count, rows: projects } = await Project.findAndCountAll(queryOptions);

        // Pagination Calculation
        const totalPages = Math.ceil(count / limit);

        // Response
        res.json({
            data: projects,
            pagination: {
                totals: count,
                totalPages: totalPages,
                currentPage: page,
            },
        });
    } catch (ex) {
        console.error("Error fetching projects:", ex);
        res.status(500).json({ error: "Internal server error" });
    }
};

exports.getProjectsByProposalUserId = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const offset = (page - 1) * limit;

        const filters = {};
        const proposalEnterpriseIncludes = [];
        const proposalIncludes = [];

        // Common Project Filters
        if (req.query.projectid) {
            filters.id = req.query.projectid;
        }
        if (req.query.entrepriseId) {
            filters.entrepriseId = req.query.entrepriseId;
        }

        // Prepare filters for ProposalEntreprise
        if (req.query.proposalEntrepiseUserId) {
            proposalEnterpriseIncludes.push({
                model: ProposalEntreprise,
                where: {
                    userId: req.query.proposalEntrepiseUserId,
                },
                required: true
            });
        }

        // Prepare filters for Proposal
        if (req.query.proposalUserId) {
            proposalIncludes.push({
                model: Proposal,
                where: {
                    userId: req.query.proposalUserId,
                },
                required: true
            });
        }

        // Fetch Projects with ProposalEntreprise
        const enterpriseProjects = await Project.findAll({
            include: proposalEnterpriseIncludes,
            where: filters,
            offset: offset,
            limit: limit,
            order: [['createdAt', 'DESC']],
        });

        // Fetch Projects with Proposal
        const regularProjects = await Project.findAll({
            include: proposalIncludes,
            where: filters,
            offset: offset,
            limit: limit,
            order: [['createdAt', 'DESC']],
        });

        // Only proceed if both enterpriseProjects and regularProjects are non-empty
        if (enterpriseProjects.length > 0 || regularProjects.length > 0) {
            const mergedProjects = {};

            // Process Projects with ProposalEntreprise
            enterpriseProjects.forEach(project => {
                if (!mergedProjects[project.id]) {
                    mergedProjects[project.id] = project;
                }
            });

            // Process Projects with Proposal
            regularProjects.forEach(project => {
                if (!mergedProjects[project.id]) {
                    mergedProjects[project.id] = project;
                } else {
                    if (project.proposals) {
                        mergedProjects[project.id].proposals = mergedProjects[project.id].proposals || [];
                        mergedProjects[project.id].proposals.push(...project.proposals);
                    }
                }
            });

            // Convert mergedProjects object to an array
            const results = Object.values(mergedProjects);

            // Sort results by createdAt before responding
            results.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

            // Prepare response pagination
            const count = results.length;
            const totalPages = Math.ceil(count / limit);
            res.json({
                data: results,
                pagination: {
                    totals: count,
                    totalPages: totalPages,
                    currentPage: page,
                },
            });
        } else {
            // If either array is empty, return an empty response
            res.json({
                data: [],
                pagination: {
                    totals: 0,
                    totalPages: 0,
                    currentPage: page,
                },
            });
        }
        
    } catch (ex) {
        console.error("Error fetching projects:", ex);
        res.status(500).json({ error: "Internal server error: " + ex });
    }
};


exports.getProject = async(req, res) => {
    const projectId = req.params.id;
    try {
        const project = await Project.findByPk(projectId);
        if (!project) {
            return res.status(404).json({ error: "Project not found" });
        }

        return res.status(200).json({ data: project });
    } catch (error) {
        console.error("Failed to fetch project:", error);
        return res.status(500).json({ error: "Failed to fetch project : " +error});
    }
};

exports.addProject = async (req, res) => {
    const projectData = req.body;
    
    // Validate project data
    const { error } = validateProject(projectData);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    try {
        // Create new project
        const project = await Project.create(projectData);
        if (!project) {
            return res.status(500).json({ error: "Project not created" });
        }

        // Check for specific project type and update enterprise count if applicable
        if (project.type === 'SHARETASK') {
            const entreprise = await Entreprise.findByPk(project.entrepriseId);
            
            // Ensure the enterprise exists before updating
            if (entreprise) {
                await entreprise.update({
                    count_shared_projectsharetask: entreprise.count_shared_projectsharetask + 1
                });
            } else {
                console.warn(`Enterprise with ID ${project.entrepriseId} not found.`);
            }
        }

        // Respond with the created project
        return res.status(201).json(project);
    } catch (error) {
        console.error("Failed to add project:", error);
        return res.status(500).json({ error: "Failed to add project: " + error.message });
    }
};


  exports.createprojectsHP = async (req, res) => {
    const projectsData = req.body; // Expecting an array of user data

    try {
        // Use Promise.all to handle multiple user creation in parallel
        const projects = await Promise.all(projectsData.map(async (projectData) => {
            return await Project.create(projectData);
        }));

        return res.status(200).json(projects); // Return all created users
    } catch (error) {
        console.error("Error fetching createUsers:", error);
        return res.status(500).json({ error: "Internal server error: " + error });
    }
}

exports.updateProject = async(req, res) => {
    const projectId = req.params.id;
    const projectData = req.body;

    const { error } = validateProjectUpdate(projectData);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    try {
        const existingproject = await Project.findByPk(projectId);
        if (!existingproject) {
            return res.status(404).json({ error: "project not found" });
        }

        await existingproject.update(projectData);

        const updatedProject = await Project.findByPk(projectId);

        return res.status(200).json(updatedProject);
    } catch (error) {
        console.error("Failed to update project:", error);
        return res.status(500).json({ error: "Failed to update project : " +error });
    }
};

exports.deleteProject = async(req, res) => {
    const projectId = req.params.id;
    try {

        const existingproject = await Project.findByPk(projectId);
        if (!existingproject) {
            return res.status(404).json({ error: "project not found" });
        }

        const deletedProject = await Project.destroy({
            where: { id: projectId },
            force: false,
        });
        const entreprise = await Entreprise.findByPk(deletedProject.entrepriseId);

          // Ensure the enterprise exists before updating
          if (entreprise) {
            if (existingproject.type === 'SHARETASK') {

            await entreprise.update({
                count_shared_projectsharetask: entreprise.count_shared_projectsharetask - 1
            });
        } else {
            await entreprise.update({
                count_shared_proposalentreprise: entreprise.count_shared_proposalentreprise - 1
            });
        }  
        } else {
            console.warn(`Enterprise with ID ${deletedProject.entrepriseId} not found.`);
        }


        if (deletedProject === 0) {
            return res
                .status(404)
                .json({
                    success: false,
                    message: "Project not found or already deleted",
                });
        }
        return res.json({ success: true, message: "Project deleted successfully" });
    } catch (error) {
        console.error("Error soft deleting Project:", error);
        return res.status(500).json({
            success: false,
            message: "An error occurred while soft deleting Project : " +error,
        });
    }
};

exports.findProjectByToken = async (req, res) => {

    const token = req.params.token;
    try {
        // Find the user by the verificationToken
        const project = await Project.findOne({
            where: {
                display: token
            }
        });

        if (!project) {
            return res.status(404).json({ message: 'Project not found or token expired' });
        }

        // If user is found, return the user data (omit sensitive fields if necessary)
        return res.status(200).json(project);
    } catch (error) {
        console.error(`Error finding project by token: ${error.message}`);
        return res.status(500).json({ message: 'Internal server error' });
    }
};
