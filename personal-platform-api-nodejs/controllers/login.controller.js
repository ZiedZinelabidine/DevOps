const User = require("../models/user.model");
const Recruter = require("../models/recruter.model");
const Entreprise = require("../models/entreprise.model");
const { forgetPasswordRecruter } = require("./auth.recruter.controller");
const { forgetPasswordUser } = require("./auth.user.controller");
const { forgetPasswordEntreprise } = require("./auth.entreprise.controller");

const {
  findUserByEmail,
  findEntrepriseByEmail,
  findRecruterByEmail,
  createTokenCandidat,
  createTokenEntreprise
} = require("./utils");

const respondWithStatus = (res, status, message) => {
  return res.status(status).send({ message });
};

const validateUserByPassword = async (user, password, userType, res) => {
  if (user.status !== 'ACTIVE') {
    return respondWithStatus(res, 401, "User not ACTIVE!");
  }
  
  if (await user.verifyPassword(password)) {
    const token = userType === 'CANDIDAT' ? await createTokenCandidat(user, userType) : await createTokenEntreprise(user, userType);
    return res.status(200).send({ message: "Login Successfully", token });
  } else {
    return respondWithStatus(res, 403, "Invalid Credentials!");
  }
};

const validateUserByGoogleId = async (user, googleid, userType, res) => {
  if (user.status !== 'ACTIVE') {
    return respondWithStatus(res, 401, "User not ACTIVE!");
  }
  
  if (user.googleid === googleid) {  // Corrected from user.googleid to user.googleId
    const token = userType === 'CANDIDAT' ? await createTokenCandidat(user, userType) : await createTokenEntreprise(user, userType);
    return res.status(200).send({ message: "Login Successfully", token });
  } else {
    return respondWithStatus(res, 403, "Invalid Credentials!");
  }
};

exports.login = async (req, res) => {
  const { email, password, googleid } = req.body;


  if (!email) {
    return respondWithStatus(res, 400, "Please provide email and password.");
  }

  if (password) {
    const user = await findUserByEmail(email);
    if (user) return validateUserByPassword(user, password, "CANDIDAT", res);

    const recruter = await findRecruterByEmail(email);


    if (recruter) return validateUserByPassword(recruter, password, "RECRUTER", res);

    const entreprise = await findEntrepriseByEmail(email);
    if (entreprise) return validateUserByPassword(entreprise, password, "ENTREPRISE", res);

    return respondWithStatus(res, 403, "Invalid Credentials!");
  } else if (googleid) {
    const user = await findUserByEmail(email);
    if (user) return validateUserByGoogleId(user, googleid, "CANDIDAT", res);

    const recruter = await findRecruterByEmail(email);

    if (recruter) return validateUserByGoogleId(recruter, googleid, "RECRUTER", res);

    const entreprise = await findEntrepriseByEmail(email);
    if (entreprise) return validateUserByGoogleId(entreprise, googleid, "ENTREPRISE", res);

    return respondWithStatus(res, 403, "Invalid Credentials!");
  } else {
    return respondWithStatus(res, 403, "Invalid Credentials!");
  }
};

exports.forgetpassword = async (req, res) => {
  const user = await forgetPasswordUser(req, res);
  const recruter = await forgetPasswordRecruter(req, res);
  const entreprise = await forgetPasswordEntreprise(req, res);
  
  if (!recruter && !entreprise && !user) {
    return respondWithStatus(res, 403, "Invalid email or user INACTIVE!");
  }

  // Optionally, send a generic response if any operation was successful 
  return respondWithStatus(res, 200, "If the email exists, instructions will be sent.");
};