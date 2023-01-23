const express = require("express");
const router = express.Router();

const commentsController = require("../controllers/commentsController");


router.post("/createThoughtComment",  commentsController.createThoughtsComment);
router.post("/createMotivationComment",  commentsController.createMotivationsComment);


module.exports = router;