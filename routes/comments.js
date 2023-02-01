const express = require("express");
const router = express.Router();

const commentsController = require("../controllers/commentsController");


router.post("/createThoughtComment",  commentsController.createThoughtsComment);
router.post("/createMotivationComment",  commentsController.createMotivationsComment);
router.put("/likeComment",  commentsController.likeThoughtComment);
router.put("/likeComment",  commentsController.likeMotivationComment);


module.exports = router;