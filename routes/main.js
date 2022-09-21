//router talks to the controller

const express = require('express')
const router = express.Router();//router level middleware - Route handlers enable you to define multiple routes for a path rather than just using eg get
const homeController = require('../controllers/homeController')  // request the controller
const authController = require("../controllers/auth");
const dashController = require("../controllers/dashController");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get('/', homeController.homepage)
router.get("/dashboard", ensureAuth, dashController.getDashboard);
// router.get('/login', authenticationController.login); //create the route
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);


module.exports = router // export the router