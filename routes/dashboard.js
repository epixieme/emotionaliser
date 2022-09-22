const express = require('express')
const router = express.Router();//router level middleware - Route handlers enable you to define multiple routes for a path rather than just using eg get
const dashController = require("../controllers/dashController");
const thoughtDiaryController = require("../controllers/thoughtDiaryController");
const { ensureAuth, ensureGuest } = require("../middleware/auth");



//add controller here
router.get("/", ensureAuth, dashController.getDashboard);
router.get("/tools", ensureAuth, dashController.getDashboardTools);
router.get("/tools/thoughtDiary",  thoughtDiaryController.getThoughtDiary);
// router.get("/community", ensureAuth, dashController.getDashboardCommunity);


module.exports = router // export the router