const express = require('express');
const projectController = require("../controllers/project.controller");
const {getJobs , getProposalsWithProjectId } = require("../controllers/utils");

const { verifyToken } = require("../middlewares/jwt.middleware.js");


const router = express.Router();

router.get("/", projectController.getProjects);

router.get("/getprojectsbyproposaluserid",verifyToken ,  projectController.getProjectsByProposalUserId);

router.post("/createprojectsHP", projectController.createprojectsHP);

router.get("/shareproject/:token", projectController.findProjectByToken);

router.get("/getproposalswithprojectId",verifyToken , getProposalsWithProjectId);

router.get("/all", getJobs);

router.get("/:id",verifyToken ,  projectController.getProject);

router.post("/",verifyToken , projectController.addProject);

router.patch("/:id",verifyToken ,projectController.updateProject);

router.delete("/:id", verifyToken,projectController.deleteProject);


module.exports = router;