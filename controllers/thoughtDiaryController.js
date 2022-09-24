const cloudinary = require("../middleware/cloudinary");
const thoughtDiary = require("../models/Thoughts");

module.exports = {
  getThoughtDiary: async (req, res) => {
    console.log(req.user);
    try {
      res.render("thoughtdiary", {
        title: "Thought Diary",
        layout: "./layouts/dashboard-home.ejs",
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
      // res.redirect("/dash");
    } catch (err) {
      console.log(err);
    }
  },
  getThought: async (req, res) => {
    console.log(req.user);
    try {
      const thought = await Post.findById(req.params.id);
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
