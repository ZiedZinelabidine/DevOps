const { Op, literal } = require("sequelize");
const AppelOffre = require("../models/appeloffre.model");
const AppeloffreProposal = require("../models/appeloffreProposal.model");
const Recruter   = require("../models/recruter.model");
const User   = require("../models/user.model");
const { checkjwt } = require("./utils");
const { validateAppelOffre, validateAppelOffreUpdate } = require("../validators/appeloffre.validators");
const db = require("../models");

exports.getAppelOffres = async (req, res) => {

    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const offset = (page - 1) * limit;
        const filters = {};
        const attributes= ['id',['appeloffre_description','description'] ,'status','createdAt','location','title' , 'display' , 'category','skills','price','type'] ;

        // Apply filters based on query parameters (same as before)
        if (req.query.recruterId) filters.recruterId = req.query.recruterId;
        if (req.query.status) filters.status = req.query.status;
        if (req.query.title) filters.title = { [Op.iLike]: `%${req.query.title}%` };
        if (req.query.description) filters.appeloffre_description = { [Op.iLike]: `%${req.query.description}%` };

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
                    model: Recruter,
                    as: 'recruter', // Ensure correct alias if necessary
                    attributes: [['id','publierid'],'name', 'first_name'],  // Include recruiter's name and first name
                },
                {
                    model: AppeloffreProposal,
                    as: 'appeloffreProposals', // Use the correct alias
                    attributes: ['id', 'appeloffreId', 'applierId', 'applierType', 'createdAt', 'updatedAt'], // Include necessary proposal columns
                   // required: false, // LEFT JOIN equivalent
                },
            ],
        };

        // Add GROUP BY and HAVING clause if applications filter is provided
        if (req.query.applications) {
            queryOptions.group = [
                'appelOffre.id',
            ];
            queryOptions.having = literal(`COUNT('appeloffreProposals.id') <= ${req.query.applications}`); // Corrected condition
          }

        // Execute the query
        const { count, rows: appelOffres } = await AppelOffre.findAndCountAll(queryOptions);

        // Pagination Calculation
        const totalPages = Math.ceil(count / limit);
        res.json({
            data: appelOffres,
            pagination: {
                totals: count,
                totalPages: totalPages,
                currentPage: page,
            },
        });
    } catch (ex) {
        console.error("Error fetching appelOffres:", ex);
        res.status(500).json({ error: "Internal server error" + ex });
    }
};


exports.createprojectsHP = async (req, res) => {
    const appelOffresData = req.body; // Expecting an array of user data

    try {
        // Use Promise.all to handle multiple user creation in parallel
        const projects = await Promise.all(appelOffresData.map(async (appelOffreData) => {
            return await AppelOffre.create(appelOffreData);
        }));

        return res.status(200).json(projects); // Return all created users
    } catch (error) {
        console.error("Error fetching createUsers:", error);
        return res.status(500).json({ error: "Internal server error: " + error });
    }
}


exports.getAppelOffresByProposalUserId = async(req, res) => {
    try {

        const filters = {};
        const filters_proposalappeloffre = {}; 
        let include = {};
        let user ;
        if (!req.query.proposalAppelOffreApplierId || !req.query.proposalAppelOffreApplierType ) {

            return res.status(500).json({ error: "Need proposalAppelOffreApplierId && proposalAppelOffreApplierType " });
        }

        const jwt= await checkjwt(req, res, req.query.proposalAppelOffreApplierId);

        if(!jwt){
            return res.status(401).json({ error: "checkjwt not ok " });
    
        }
        filters_proposalappeloffre.applierId = req.query.proposalAppelOffreApplierId;
        filters_proposalappeloffre.applierType = req.query.proposalAppelOffreApplierType;

        switch (req.query.proposalAppelOffreApplierType) {
             case 'CANDIDAT':
                user = await User.findByPk(req.query.proposalAppelOffreApplierId);       
                break;
             case 'RECRUTER':
                  user = await Recruter.findByPk(req.query.proposalAppelOffreApplierId);
                  break;   
              }  

        if (!user) {
          return res.status(500).json({ error: "Failed to fetch applier" });
        } 


        include.model = AppeloffreProposal;
        include.required = true ;
        include.as= 'appeloffreProposals',
        include.where = filters_proposalappeloffre ;


        if (req.query.appelOffreid) {
            filters.id = req.query.appelOffreid;
        }

        if (req.query.recruterId) {
            filters.recruterId = req.query.recruterId;
        }

        if (req.query.status) {
            filters.status = req.query.status;
        }
   
        if (req.query.location) {
            filters.location = req.query.location;
        }

       if (req.query.title) {
            const title = req.query.title;
            filters.title = {
                [Op.iLike]: `%${title}%`,
            };
        }
        if (req.query.description) {
            const AppelOffre_description = req.query.description;
            filters.appeloffre_description = {
                [Op.iLike]: `%${AppelOffre_description}%`,
            };
        }

        if (req.query.skills) {
            const skills = req.query.skills.split(",");
            filters.skills = {
                [Op.overlap]: skills,
            };
        }
   
        const { count, rows: appelOffres } = await AppelOffre.findAndCountAll({
          include : [
                include
              ], 
            where: filters
        });

        return res.status(200).json({ data : appelOffres});
    } catch (ex) {
        console.error("Error fetching appelOffres:", ex);
        res.status(500).json({ error: "Internal server error" });
    }
};

exports.getAppelOffre = async(req, res) => {
    const AppelOffreId = req.params.id;
    try {
        const appelOffre = await AppelOffre.findByPk(AppelOffreId);
        if (!appelOffre) {
            return res.status(404).json({ error: "AppelOffre not found" });
        }

        return res.status(200).json({ data: appelOffre });
    } catch (error) {
        console.error("Failed to fetch appelOffre:", error);
        return res.status(500).json({ error: "Failed to fetch appelOffre: " +  error });
    }
};

exports.addAppelOffre = async(req, res) => {
    const AppelOffreData = req.body;
    let transaction;

    const { error } = validateAppelOffre(AppelOffreData);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    const jwt= await checkjwt(req, res,  AppelOffreData.recruterId);

    if(!jwt){
        return res.status(401).json({ error: "checkjwt not ok " });

    }

    const recruter = await Recruter.findByPk(AppelOffreData.recruterId);

    if(!recruter) {
        return res.status(400).json({ error: "Recruter not found"});
    }

    try {
        transaction = await db.connection.transaction();
        const appelOffre = await AppelOffre.create(AppelOffreData,{transaction});
        await recruter.update(
            { count_shared_offres: recruter.count_shared_offres + 1 },
            {
              where: { id: AppelOffreData.recruterId },
              transaction,
            }
          );
        await transaction.commit();
        return res.status(201).json(appelOffre);
    } catch (error) {
        if (transaction) await transaction.rollback();
        console.error("Failed to add AppelOffre:", error);
        return res.status(500).json({ error: "Failed to add AppelOffre :" + error });
    }
};

exports.updateAppelOffre = async(req, res) => {
    const AppelOffreId = req.params.id;
    const AppelOffreData = req.body;

    const { error } = validateAppelOffreUpdate(AppelOffreData);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    try {
        const existingAppelOffre = await AppelOffre.findByPk(AppelOffreId);
        if (!existingAppelOffre) {
            return res.status(404).json({ error: "AppelOffre not found" });
        }

        await existingAppelOffre.update(AppelOffreData);

        const updatedAppelOffre = await AppelOffre.findByPk(AppelOffreId);

        return res.status(200).json(updatedAppelOffre);
    } catch (error) {
        console.error("Failed to update AppelOffre:", error);
        return res.status(500).json({ error: "Failed to update AppelOffre"  + error  });
    }
};

exports.deleteAppelOffre = async(req, res) => {
    const AppelOffreId = req.params.id;
    try {
        const existingAppelOffre = await AppelOffre.findByPk(AppelOffreId);
        const recruter = await Recruter.findByPk(existingAppelOffre.recruterId);
        const deletedAppelOffre = await AppelOffre.destroy({
            where: { id: AppelOffreId },
            force: false,
        });

        await recruter.update(
            { count_shared_offres: recruter.count_shared_offres - 1 },
            {
              where: { id: AppelOffreData.recruterId },
              transaction,
            }
          );

        if (deletedAppelOffre === 0) {
            return res
                .status(404)
                .json({
                    success: false,
                    message: "AppelOffre not found or already deleted",
                });
        }
        return res.json({ success: true, message: "AppelOffre deleted successfully" });
    } catch (error) {
        console.error("Error soft deleting AppelOffre:", error);
        return res.status(500).json({
            success: false,
            message: "An error occurred while soft deleting AppelOffre",
        });
    }
};

exports.findAppelOffreByToken = async (req, res) => {
    const token = req.params.token;
    try {
        const appelOffre = await AppelOffre.findOne({
            where: {
                display: token
            }
        });

        if (!appelOffre) {
            return res.status(404).json({ message: 'User not found or token expired' });
        }
        return res.status(200).json(appelOffre);
    } catch (error) {
        console.error(`Error finding project by token: ${error.message}`);
        return res.status(500).json({ message: 'Internal server error' });
    }
};