const express = require('express')
const router = express.Router();//router level middleware - Route handlers enable you to define multiple routes for a path rather than just using eg get
const upload = require("../middleware/multer");
const thoughtDiaryController = require("../controllers/thoughtDiaryController");
// const { ensureAuth, ensureGuest } = require("../middleware/auth");



//add controller here
router.get("/",  thoughtDiaryController.getThoughtDiary);
router.get("/thoughtData", thoughtDiaryController.getThoughtData)
router.get("/:page",  thoughtDiaryController.getThoughtDiary);
// router.get('/:page', thoughtDiaryController.getThoughtDiaryPage);
router.get("/:page/submit-thought",  thoughtDiaryController.getSubmitThought);
router.post("/submit-thought", upload.single("file"), thoughtDiaryController.postSubmitThought);
router.get("/:page/:id",  thoughtDiaryController.getThought);
router.get("/:page/edit-thought/:id",  thoughtDiaryController.getEditThought);
router.put("/edit-thought/:id",  upload.single("file"), thoughtDiaryController.postEditThought);
router.delete("/delete-thought/:id",  thoughtDiaryController.delThoughtDiary);
router.get("/search/:searchTerm", thoughtDiaryController.searchItems)

// router.get("/tools", ensureAuth, dashController.getDashboardTools);
// router.get("/community", ensureAuth, dashController.getDashboardCommunity);


module.exports = router // export the router