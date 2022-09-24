const express = require('express')
const router = express.Router();//router level middleware - Route handlers enable you to define multiple routes for a path rather than just using eg get
const thoughtDiaryController = require("../controllers/thoughtDiaryController");
// const { ensureAuth, ensureGuest } = require("../middleware/auth");



//add controller here
router.get("/",  thoughtDiaryController.getThoughtDiary);
router.get("/submit-thought",  thoughtDiaryController.getSubmitThought);

router.post("/submit-thought",  thoughtDiaryController.postSubmitThought);
// router.get("/tools", ensureAuth, dashController.getDashboardTools);
// router.get("/community", ensureAuth, dashController.getDashboardCommunity);


module.exports = router // export the router