const Dateuser = require("../models/dateuser.model");
const { forgetPasswordUser } = require("./auth.dateuser.controller");

const {
  findDateUserByEmail,
  createTokenDateUser,
} = require("./utils");

const respondWithStatus = (res, status, message) => {
  return res.status(status).send({ message });
};

const validateUserByPassword = async (user, password, userType, res) => {
  if (user.status !== 'ACTIVE') {
    return respondWithStatus(res, 401, "User not ACTIVE!");
  }
  
  if (await user.verifyPassword(password)) {
    const token =  await createTokenDateUser(user, userType);
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
    const token =  await createTokenDateUser(user, userType);
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
    const user = await findDateUserByEmail(email);
    if (user) return validateUserByPassword(user, password, "DATEUSER", res);

    return respondWithStatus(res, 403, "Invalid Credentials!");
  } else if (googleid) {
    const user = await findDateUserByEmail(email);
    if (user) return validateUserByGoogleId(user, googleid, "DATEUSER", res);

    return respondWithStatus(res, 403, "Invalid Credentials!");
  } else {
    return respondWithStatus(res, 403, "Invalid Credentials!");
  }
};