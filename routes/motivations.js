const express = require('express')
const router = express.Router();//router level middleware - Route handlers enable you to define multiple routes for a path rather than just using eg get
const upload = require("../middleware/multer");
const motivationsController = require("../controllers/motivationsController");
// const { ensureAuth, ensureGuest } = require("../middleware/auth");



//add controller here
router.get("/",  motivationsController.getMotivations);
router.get("/submit-motivation",  motivationsController.getSubmitMotivation);
router.post("/submit-motivation", upload.single("file"), motivationsController.postSubmitMotivation);
router.get("/:id",  motivationsController.getMotivation);
router.get("/edit-motivation/:id",  motivationsController.getEditMotivation);
router.put("/edit-motivation/:id",  upload.single("file"), motivationsController.postEditMotivation);
router.delete("/delete-motivation/:id",  motivationsController.delMotivation);



module.exports = router // export the router