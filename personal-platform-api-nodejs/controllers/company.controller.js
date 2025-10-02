const { Op } = require("sequelize");
const Company = require("../models/company.model");
const {
  validateCompany,
  validateUpdateCompany,
} = require("../validators/company.validators");
const db = require("../models");
const { getUserEntity, getAccountingJob } = require("./utils");
const AccountingJob = require("../models/accountingJob.model");
const RequestCompanyCreation = require("../models/requestCompanyCreation.model");
exports.getCompanys = async (req, res) => {
  try {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const offset = (page - 1) * limit;

    const filters = {};

    // Building filters from the query parameters
    if (req.query.presidentId) {
      filters.presidentId = req.query.presidentId;
    }
    if (req.query.presidentType) {
      filters.presidentType = req.query.presidentType;
    }
    if (req.query.company_name) {
      filters.company_name = req.query.company_name;
    }
    if (req.query.company_siren) {
      filters.company_siren = req.query.company_siren;
    }
    if (req.query.company_location_status) {
      filters.company_location_status = req.query.company_location_status;
    }
    if (req.query.company_siren_status) {
      filters.company_siren_status = req.query.company_siren_status;
    }

    // Fetching company data with count
    const { count, rows: companies } = await Company.findAndCountAll({
      where: filters,
      offset: offset,
      limit: limit,
      order: [["createdAt", "DESC"]],
    });


    // Mapping over companies to include user entities
    const results = await Promise.all(companies.map(async item => {
      try {
        const userEntity = await getUserEntity(item.presidentType, item.presidentId);      
        return {
          ...item.toJSON(),
          user: userEntity 
        };
      } catch (userFetchError) {
        console.error("Error fetching user entity:", userFetchError);
        return {
          ...item.toJSON(),
          user: null, // or you could handle error to show some message
        };
      }
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
    console.error("Error fetching Company:", ex);
    res.status(500).json({ error: "Internal server error", details: ex.message });
  }
};

exports.getCompany = async (req, res) => {
  const companyId = req.params.id;
  try {
    const company = await Company.findByPk(companyId);
    if (!company) {
      return res.status(404).json({ error: "Company not found" });
    }

    const userEntity = await getUserEntity(company.presidentType, company.presidentId);

    // Create the result object
    const result = {
      ...Company.toJSON(),
      user: userEntity 
    };


    return res.status(200).json({ data: result });
  } catch (error) {
    console.error("Failed to fetch company:", error);
    return res.status(500).json({ error: "Failed to fetch company" });
  }
};

exports.findCompanyByToken = async (req, res) => {

  const token = req.params.token;
 
  try {
      // Find the user by the verificationToken
      const company = await Company.findOne({
          where: {
              display: token
          }
      });

      if (!company) {
          return res.status(404).json({ message: 'User not found or token expired' });
      }

      // If user is found, return the user data (omit sensitive fields if necessary)
      return res.status(200).json(company);
  } catch (error) {
      console.error(`Error finding company by token: ${error.message}`);
      return res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getCompanyByPresidentId = async (req, res) => {
  const presidentId = req.params.id;
  const presidentType = req.params.type;
  try {
    const company = await Company.findAll({
      where: { presidentId: presidentId, presidentType: presidentType },
    });
    if (!company) {
      return res.status(404).json({ error: "Company not found" });
    }
    return res.status(200).json({ data: company });
  } catch (error) {
    console.error("Failed to fetch company:", error);
    return res.status(500).json({ error: "Failed to fetch company" });
  }
};

exports.getCompanyById = async (companyData) => {
  const presidentId   = companyData.presidentId;
  const presidentType = companyData.presidentType;
  try {
    const company = await Company.findOne({
      where: { presidentId: presidentId, presidentType: presidentType },
    });

    if (!company) {
      return false;
    }
    
    return company;
  } catch (error) {
    console.error("Failed to fetch company:", error);
    return false;
  }
};

exports.addCompany = async (req, res) => {
  const companyData = req.body;
  const { error } = validateCompany(companyData);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const company = await Company.create(companyData);
    return res.status(201).json(company);
  } catch (error) {
    return res.status(500).json({ error: "Failed to add Company" });
  }
};


exports.updateCompany = async (req, res) => {
  const companyId = req.params.id;
  const companyData = req.body;

  const { error } = validateUpdateCompany(companyData);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const existingcompany = await Company.findByPk(companyId);
    if (!existingcompany) {
      return res.status(404).json({ error: "company not found" });
    }

    await existingcompany.update(companyData);

    const updatedcompany = await Company.findByPk(companyId);

    return res.status(200).json(updatedcompany);
  } catch (error) {
    console.error("Failed to update company:", error);
    return res
      .status(500)
      .json({ error: "Failed to update company: " + error });
  }
};

exports.deleteCompany = async (req, res) => {
  const companyId = req.params.id;
  try {
    const deletedCompany = await Company.destroy({
      where: { id: companyId },
      force: false,
    });
    if (deletedCompany === 0) {
      return res.status(404).json({
        success: false,
        message: "company not found or already deleted",
      });
    }
    return res.json({ success: true, message: "company deleted successfully" });
  } catch (error) {
    console.error("Error soft deleting company:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while soft deleting company: : " + error,
    });
  }
};

exports.findCompanyByToken = async (req, res) => {

  const token = req.params.token;
  try {
      // Find the user by the verificationToken
      const company = await Company.findOne({
          where: {
              display: token
          }
      });

      if (!company) {
          return res.status(404).json({ message: 'User not found or token expired' });
      }

      // If user is found, return the user data (omit sensitive fields if necessary)
      return res.status(200).json(company);
  } catch (error) {
      console.error(`Error finding company by token: ${error.message}`);
      return res.status(500).json({ message: 'Internal server error' });
  }
};
