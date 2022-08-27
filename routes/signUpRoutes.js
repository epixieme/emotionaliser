const express = require('express')
const router = express.Router();//router level middleware - Route handlers enable you to define multiple routes for a path rather than just using eg get
const signUpController = require('../controllers/signUpContoller')  // request the controller

router.get('/', signUpController.homepage)
// router.get('/login', authenticationController.login); //create the route

module.exports = router // export the router
