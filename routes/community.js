const express = require('express')
const router = express.Router();//router level middleware - Route handlers enable you to define multiple routes for a path rather than just using eg get

const communityController = require("../controllers/communityController");




//add controller here
router.get("/",  communityController.getCommunity);
router.get("/communityThoughts",  communityController.getThoughtPosts);
router.get("/communityMotivations",  communityController.getMotivationtPosts);
router.put("/communityThoughts/likePost", communityController.likePost);
router.put("/communityThoughts/deletePost", communityController.deletePost);


module.exports = router // export the router