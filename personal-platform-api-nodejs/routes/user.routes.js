const express = require('express');
const userController = require("../controllers/user.controller");
const { verifyToken } = require("../middlewares/jwt.middleware.js");

const router = express.Router();

router.get("/", userController.getUsers);

router.post("/createuserhp", userController.createusersHP);

//router.post("/updatepwd", userController.updateUserPassword);

router.get("/sharecandidat/:token", userController.findUserByToken);

router.get("/:id/tasksprojects", verifyToken, userController.findUserAllTasksProjects);

router.get("/:id/checkProfilComplet", verifyToken, userController.checkProfilComplet);

router.get("/:id/entrepriseprojects", verifyToken, userController.findUserAllEntrepriseProjects);

router.get("/:id/myprojects", verifyToken, userController.getAllProjectsByUserId);

router.get("/:id", verifyToken, userController.getUser);

router.put("/:id", userController.updateUser);

router.delete("/:id", verifyToken, userController.deleteUser);

module.exports = router;