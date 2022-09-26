const express = require('express')
const router = express.Router();//router level middleware - Route handlers enable you to define multiple routes for a path rather than just using eg get
const upload = require("../middleware/multer");
const motivationsController = require("../controllers/motivationsController");
// const { ensureAuth, ensureGuest } = require("../middleware/auth");



//add controller here
router.get("/",  motivationsController.getMotivations);
router.get("/submit-motivation",  motivationsController.getSubmitMotivation);

// router.post("/submit-thought", upload.single("file"), thoughtDiaryController.postSubmitThought);
// router.get("/:id",  thoughtDiaryController.getThought);
// router.get("/tools", ensureAuth, dashController.getDashboardTools);
// router.get("/community", ensureAuth, dashController.getDashboardCommunity);


module.exports = router // export the router