const thoughtDiary = require("../models/Thoughts");
const userDetails = require("../models/User");
const motivationDetails = require("../models/Motivations");
const user = require("../models/User")


function errorHandling(res, error) {
  res.status(500).send({ message: error.message || "Error Occured" });
}

module.exports = {
  addBookmark: async (req, res) => {
    console.log("this is id" + req.params.id);
    try {
      const thoughts = await thoughtDiary.findOneAndUpdate(
        { _id: req.params.id },
        {
          bookmarked: true,
        }
      );
      console.log("bookmarked");

      res.redirect("/dashboard/tools/thoughtdiary");
    } catch (err) {
      errorHandling(res, err);
    }
  },
//  uses thought diary model
  addCommunityBookmark: async (req, res) => {
    console.log("this is id" + req.params.id);
    try {
      const community = await user.findOneAndUpdate(
        { _id: req.body.id },
        {
          bookmarked: true,
        }
      );
      console.log("bookmarked");

      res.redirect("/dashboard/community/communityThoughts");
    } catch (err) {
      errorHandling(res, err);
    }
  },
  addMotivationBookmark: async (req, res) => {
    console.log("this is id" + req.params.id);
    try {
      const motivations = await motivationDetails.findOneAndUpdate(
        { _id: req.params.id },
        {
          bookmarked: true,
        }
      );
      console.log("bookmarked");

      res.redirect("/dashboard/tools/motivations");
    } catch (err) {
      errorHandling(res, err);
    }
  },
  removeBookmark: async (req, res) => {
    try {
      const thoughts = await thoughtDiary.findOneAndUpdate(
        { _id: req.params.id },
        {
          bookmarked: false,
        }
      );
      console.log("unbookmarked");
      res.redirect("/dashboard/tools/thoughtdiary");
    } catch (err) {
      errorHandling(res, err);
    }
  },
  removeMotivationBookmark: async (req, res) => {
    try {
      const motivations = await motivationDetails.findOneAndUpdate(
        { _id: req.params.id },
        {
          bookmarked: false,
        }
      );
      console.log("unbookmarked");
      res.redirect("/dashboard/tools/motivations");
    } catch (err) {
      errorHandling(res, err);
    }
  },

  getBookmarked: async (req, res) => {
    try {
      const thoughts = await thoughtDiary.find({
        bookmarked: true,
      });
      const motivations = await motivationDetails.find({
        bookmarked: true,
      });
      console.log("bookmarked");
      res.render("bookmarks", {
        title: "Bookmarks",
        layout: "./layouts/dashboard-home.ejs",
        thoughts: thoughts,
        motivations: motivations,
        user: req.user,
      });
    } catch (err) {
      errorHandling(res, err);
    }
  },
};
