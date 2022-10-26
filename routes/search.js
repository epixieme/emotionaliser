
const express = require('express')
const router = express.Router();
const searchController = require("../controllers/searchController");


router.post("/search", searchController.searchItems)


module.exports = router // export the router