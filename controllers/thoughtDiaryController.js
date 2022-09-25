const cloudinary = require("../middleware/cloudinary");
const thoughtDiary = require("../models/Thoughts");
const userDetails = require("../models/User");

module.exports = {
  getThoughtDiary: async (req, res) => {
    console.log(req.user);
    try {
      const thoughts = await thoughtDiary.find({ user: req.user.id }).sort({submitted: -1}).limit(7)
      const users = await userDetails.find();
      res.render("thoughtdiary", {
        title: "Thought Diary",
        layout: "./layouts/dashboard-home.ejs",
        thoughts:thoughts,
        users:users,
        user:req.user
      });
    } catch (err) {
      console.log(err);
    }
  },
  getSubmitThought: async (req, res) => {
    console.log(req.user);
    try {
      await thoughtDiary.findOne;
      res.render("submit-thoughts", {
        title: "Thought Diary - submit",
        layout: "./layouts/dashboard-home.ejs",
      });
    } catch (err) {
      console.log(err);
    }
  },
  postSubmitThought: async (req, res) => {

    console.log(req.user.id)
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);
      await thoughtDiary.create({
        summary: req.body.summary,
        image: result.secure_url,
        cloudinaryId: result.public_id,
        details: req.body.details,
        category: req.body.category,
        likes: 0,
        user: req.user.id,
      });
      console.log("Post has been added!");
      res.redirect("/tools/thoughtdiary");
    } catch (err) {
      console.log(err);
    }
  },
  getThought: async (req, res) => {
    console.log(req.user);
    try {
      const thought = await thoughtDiary.findById(req.params.id);
      await thoughtDiary.findOne;
      res.render("get-thoughts", {
        title: "Thought Diary - Thought",
        layout: "./layouts/dashboard-home.ejs",
        thought:thought,
        user:req.user
      });
    } catch (err) {
      console.log(err);
    }
  },
};
