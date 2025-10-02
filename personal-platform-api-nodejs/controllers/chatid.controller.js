const { Op } = require("sequelize");
const Entreprise = require("../models/entreprise.model");
const User = require("../models/user.model");
const Recruter = require("../models/recruter.model");
const Accounting = require("../models/accounting.model");
const Project = require("../models/project.model");
const AppelOffre = require("../models/appeloffre.model");

const Product = require("../models/product.model");


exports.getchatidbyUserId = async (userId, userType)  => {

    let user ;
    if (!userType|| !userId) {
      return false;
    }
    try {
      switch (userType) {
        case 'ENTREPRISE':
          user = await Entreprise.findByPk(userId, { attributes: ['id' , 'username' , 'email', 'chatid' , 'count_shared_proposalentreprise' , 'count_shared_projectsharetask'] });         
          return (user);

        case 'CANDIDAT':
          user = await User.findByPk(userId, { attributes: ['id' ,'name','first_name' , 'email' ,'chatid' , 'count_sharedproduct'] });
          return (user);
  
        case 'RECRUTER':
          user = await Recruter.findByPk(userId, { attributes: ['id' ,'name','first_name' , 'email','chatid' , 'count_shared_offres'] });
          return (user);
  
        case 'ACCOUNTING':
          user = await Accounting.findByPk(userId, { attributes: ['id' ,'name','first_name' , 'email','chatid'] });
          return (user);
        
        default:
          return false;
        }
  
    } catch (error) {
      console.error("Failed to find chatid: ", error);
      return false;
    };
  };
  

  exports.getchatidbyProjectId = async (projectId) => {

    let entreprise ;
    let include = {};
    let filters = {};

    if (!projectId) {
      return false;
    }
    try {

        filters.id =  projectId;
        include.model = Project;
        include.required = true ;
        include.where = filters
        entreprise = await Entreprise.findOne({ attributes: ['id' , 'username' ,'chatid' , 'email'] , include : [ include ]});

        return (entreprise);

  
    } catch (error) {
      console.error("Failed to find chatid: ", error);
      return false;
    };
  };

  exports.getchatidbyAppelOffreId = async (appeloffreId) => {

    let recruter ;
    let include = {};
    let filters = {};


    if (!appeloffreId) {
      return false ;
    }
    try {

        filters.id =  appeloffreId;
        include.model = AppelOffre;
        include.required = true ;
        include.where = filters
        recruter = await Recruter.findOne({ attributes:['id' ,'name','first_name' ,'chatid' , 'email'] , include : [ include ]});
        
        return (recruter);
  
    } catch (error) {
      console.error("Failed to find chatid: ", error);
      return false ;
    };
  };

  exports.getchatidbyProductId = async (req, res) => {

    let user ;
    let include = {};
    let filters = {};

    if (!req.query.productId) {
      console.error("Failed to find chatid: ", error);
      return false ;
   }
   
   try {

        filters.id =  req.query.productId;
        include.model = Product;
        include.required = true ;
        include.where = filters
        user = await User.findAll({ attributes:['id' ,'name','first_name' ,'chatid'] , include : [ include ]});
        return res.status(200).json({ data: user });
  
    } catch (error) {
      console.error("Failed to find chatid: ", error);
      return false ;
    };
  };