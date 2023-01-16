const express = require('express')
const router = express.Router();//router level middleware - Route handlers enable you to define multiple routes for a path rather than just using eg get
const dashController = require("../controllers/dashController");
const thoughtDiaryController = require("../controllers/thoughtDiaryController");
const { ensureAuth, ensureGuest } = require("../middleware/auth");



//add controller here
router.get("/", ensureAuth, dashController.getDashboard);
router.get("/chartData", dashController.getChartData);
router.get("/tools", ensureAuth, dashController.getDashboardTools);
// router.put("/like/:id", dashController.likeQuote);
router.put("/dislike", dashController.dislikeQuote);
router.put("/like", dashController.likeQuote);
// router.get("/community", ensureAuth, dashController.getDashboardCommunity);


module.exports = router // export the router