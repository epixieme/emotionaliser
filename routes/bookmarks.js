const express = require('express')
const router = express.Router();//router level middleware - Route handlers enable you to define multiple routes for a path rather than just using eg get

const bookmarkController = require("../controllers/bookmarkController");
const { ensureAuth, ensureGuest } = require("../middleware/auth");



//add controller here
router.get("/", bookmarkController.getBookmarked);
router.put("/thought/bookmarked/:id", bookmarkController.addBookmark);
router.put("/thought/notBookmarked/:id", bookmarkController.removeBookmark);
router.put("/motivation/bookmarked/:id", bookmarkController.addMotivationBookmark);
router.put("/motivation/notBookmarked/:id", bookmarkController.removeMotivationBookmark);
router.put("/community/communityThoughts/bookmarked", bookmarkController.addCommunityBookmark);
// router.put("/community/communityThoughts/bookmarked", bookmarkController.removeCommunityBookmark);


module.exports = router // export the router