const express = require('express')
const router = express.Router();//router level middleware - Route handlers enable you to define multiple routes for a path rather than just using eg get

const bookmarkController = require("../controllers/bookmarkController");
const { ensureAuth, ensureGuest } = require("../middleware/auth");



//add controller here
router.get("/", bookmarkController.getBookmarked);
router.put("/bookmarked/:id", bookmarkController.addBookmark);
router.put("/notBookmarked/:id", bookmarkController.removeBookmark);


module.exports = router // export the router