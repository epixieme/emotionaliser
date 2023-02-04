const { model } = require("mongoose");
const thoughtDiary = require("../models/Thoughts");
const userDetails = require("../models/User");

function errorHandling(res, error) {
  res.status(500).send({ message: error.message || "Error Occured" });
}

module.exports = {
  searchItems: async (req, res) => {
    try {
      const users = await userDetails.find();
      let searchTerm = req.body.searchTerm;
      console.log("searchterm" + searchTerm);
      const thoughtDate = await thoughtDiary
        .findOne({ user: req.user.id })
        .sort({ date: -1 });
      let searchResults = await thoughtDiary.find({
        $text: { $search: searchTerm, $diacriticSensitive: true },
      });
      console.log(searchResults);
      res.render("search.ejs", {
        layout: "./layouts/dashboard-home.ejs",
        results: searchResults,
        user: req.user,
        users: users,
        thoughtDate: thoughtDate,
      });
    } catch (error) {
      errorHandling(res, error);
    }
  },
};


