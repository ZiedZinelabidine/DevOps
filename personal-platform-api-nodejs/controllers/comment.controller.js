const Comment = require("../models/comment.model");
const Project = require("../models/project.model");
const { validateComment } = require("../validators/comment.validators");
const { getProductbyId ,calculateUserStar , checkjwt , getProposalEntrepriseById , getProposalbyId, calculateProductStar} = require("./utils");


exports.addComment = async(req, res) => {

    const commentData =  req.body ;
    const { error } = validateComment(commentData);
    if (error) {
        console.error("Error on fetching comments:",  error.details[0].message);
        res.status(500).json({ error: "Internal server error" });

    }
    let filters = {} ;
        
    filters.userId = commentData.userId ;
    filters.commentedId = commentData.commentedId ;
    filters.CommentedType = commentData.CommentedType ;
    filters.workId = commentData.workId ;
    filters.workType = commentData.workType ;
   
   const comments = await Comment.findOne({
        where: filters,
    })

    if (comments && comments.id) {
        return res.status(201).json({ message: "You have already comment this product" });
    } 

    try {
        const comment = await Comment.create(commentData);
        await calculateProductStar(commentData.workId) ;
        await calculateUserStar(commentData.userId) ;
        return res.status(200).json(comment);
       
    } catch (error) {
        console.error("Error on creating comment:", error);
        return res.status(500).json({ error: "Internal server error" });

    }
};

exports.createComment = async(commentData , transaction) => {
    const { error } = validateComment(commentData);
    if (error) {
        console.error("Error on fetching comments:",  error.details[0].message);
        if (transaction) await transaction.rollback();
        return false ;
    }
    try {

        await Comment.create(commentData);
        calculateUserStar(commentData.userId) ;
        return true ;
        
    } catch (error) {
        console.error("Error on creating comment:", error);
        return false ;
    }
};

exports.getUserComments = async(userId) => {
    try {
        const comments = await Comment.findAll({
            where: { userId: userId },
            order: [
                ["createdAt", "DESC"]
            ]
        });
        return ({
            data: comments,
        });
    } catch (error) {
        console.error("Error on fetching comments:", error);
        return null;
    }
};

exports.getUserCommentsAndNbr = async(req, res) => {

    if (req.query.userId === null) {
        res.status(500).json({ error: "Internal server error" });
    }
 
    const jwt = await checkjwt(req, res,  req.query.userId);

    if(!jwt){
        return res.status(401).json({ error: "checkjwt not ok " });
    }


    try {
        const userId = req.query.userId;
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const offset = (page - 1) * limit;

        const { count, rows: comments }= await Comment.findAndCountAll({
            where: { userId: userId },
            offset: offset,
            limit: limit,
        });
        const totalPages = Math.ceil(count / limit);
           
        res.json({
            data: comments,
            pagination: {
                totals: count,
                totalPages: totalPages,
                currentPage: page,
            },
        });
        } catch (error) {
            console.error("Error fetching comments",error);
            res.status(500).json({ error: "Internal server error : " +error });
       
        }
    };
    exports.getComments = async (req, res) => {
        try {
            const { userId, workId, workType, commentedId, CommentedType, page = 1, limit = 10 } = req.query;
    
            const offset = (page - 1) * limit;
    
            const filters = {};
            if (userId) filters.userId = userId;
            if (workId && workType) {
                filters.workId = workId;
                filters.workType = workType;
            }
            if (commentedId && CommentedType) {
                filters.commentedId = commentedId;
                filters.CommentedType = CommentedType;
            }
    
            // Fetch comments based on filters
            const { count, rows: comments } = await Comment.findAndCountAll({
                where: filters,
                offset: offset,
                limit: limit,
                order: [['createdAt', 'DESC']]
            });
    
            if (comments.length === 0) {
                return res.json({ data: [], pagination: { totals: count, totalPages: 0, currentPage: page } });
            }
            
      
            // Define an async function to handle fetching of project details
            const getCommentProjects = async (comment) => {
                let project;
                switch (comment.workType) {
                    case "COMPOSED_FREELANCE":
                        project = await getProposalEntrepriseById(comment.workId);
                        break;
    
                    case "SHARETASK":
                        project = await getProposalbyId(comment.workId);
                        break;
    
                    case "PRODUCT":
                        project = await getProductbyId(comment.workId);
                        break;
    
                    default:
                        // If no valid workType, return null or undefined
                        project = null;
                        break;
                }
    
                return {
                    ...comment.toJSON(),
                    project: project || null  // Set project to null if not found
                };
            };
    
            // Map through comments and get project details
            const commentsWithProjects = await Promise.all(comments.map(getCommentProjects));
    
            const totalPages = Math.ceil(count / limit);
            res.json({
                data: commentsWithProjects,
                pagination: {
                    totals: count,
                    totalPages: totalPages,
                    currentPage: page,
                },
            });
        } catch (ex) {
            console.error("Error fetching comments with project details:", ex);
            res.status(500).json({ error: "Internal server error" });
        }
    };

    exports.getCommentsByWork = async (workId, workType) => {
        // Validate inputs
        if (!workId || !workType) {
            return false; // or return an appropriate error message
        }
    
        try {
            // Fetch comments based on workId and workType
            const comments = await Comment.findAll({
                where: {
                    workId: workId,
                    workType: workType
                },
            });
    
            return comments;
        } catch (error) {
            console.error("Error fetching comments:", error);
            throw new Error("Unable to retrieve comments."); // Propagate the error or handle it as needed
        }
    };
    

