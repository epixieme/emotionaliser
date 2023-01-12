const express = require('express')
const router = express.Router();//router level middleware - Route handlers enable you to define multiple routes for a path rather than just using eg get
const upload = require("../middleware/multer");
const profileController = require("../controllers/profileController");
// const { ensureAuth, ensureGuest } = require("../middleware/auth");

//add controller here
router.get("/:id",  profileController.getProfile);
router.put("/update-profile/:id", profileController.postEditProfile);
router.put("/update-photo/:id",  upload.single("file"), profileController.postEditUserPhoto);
// router.put("/update-profile/:id",  upload.single("file"), profileController.postEditProfile);
router.delete("/delete-profile/:id",  profileController.deleteProfile);
module.exports = router // export the router

