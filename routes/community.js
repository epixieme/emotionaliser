const express = require('express')
const router = express.Router();//router level middleware - Route handlers enable you to define multiple routes for a path rather than just using eg get

const communityController = require("../controllers/communityController");




//add controller here
router.get("/",  communityController.getCommunity);




module.exports = router // export the router