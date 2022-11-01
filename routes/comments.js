const express = require("express");
const router = express.Router();

const commentsController = require("../controllers/commentsController");


router.post("/createComment",  commentsController.createComment);

module.exports = router;