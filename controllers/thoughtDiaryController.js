const cloudinary = require("../middleware/cloudinary");
const thoughtDiary = require("../models/Thoughts");
const userDetails = require("../models/User");
const helper = require('../public/helper.js');

function errorHandling(res, error) {
  res.status(500).send({ message: error.message || "Error Occured" });
}
module.exports = {
  getThoughtDiary: async (req, res) => {
    // get posts by logged in user
    try {
      const thoughts = await thoughtDiary.find({ user: req.user.id }).sort({date: -1})
      const thoughtDate = await thoughtDiary.findOne({ user: req.user.id }).sort({date: -1})
    
      const users = await userDetails.find();
      res.render("thoughtdiary.ejs", {
        title: "Thought Diary",
        layout: "./layouts/dashboard-home.ejs",
        thoughts:thoughts,
        // calThoughts:calThoughts,
        users:users,
        user:req.user,
        helper:helper,
        thoughtDate:thoughtDate
      });
    } catch (err) {
      console.log(err);
    }
  },
  delThoughtDiary: async (req, res) => {
    try {
      // Find post by id
      let thought = await thoughtDiary.findById({ _id: req.params.id });
      // Delete image from cloudinary
      // await cloudinary.uploader.destroy(thought.cloudinaryId);
      // Delete post from db
      await thoughtDiary.deleteOne({ _id: req.params.id });
      console.log("Deleted Post");
      res.redirect("/dashboard/tools/thoughtdiary");
    } catch (err) {
      errorHandling(res, err)
      res.redirect("/dashboard/tools/thoughtdiary");
    }
  },
  
  getSubmitThought: async (req, res) => {

    try {
     const thoughts =  await thoughtDiary.find({user:req.user.id})


      res.render("submit-thoughts", {
        title: "Thought Diary - submit",
        layout: "./layouts/dashboard-home.ejs",
        thoughts:thoughts,
        user: req.user,
      
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
        rating:req.body.rating,
        likes: 0,
        user: req.user.id,
      });
      console.log("Post has been added!");
      res.redirect("/dashboard/tools/thoughtdiary");
    } catch (err) {
      console.log(err);
    }
  },
  getThought: async (req, res) => {

    try {
      const thought = await thoughtDiary.findById(req.params.id);
      console.log('this is thoughts' + thought)
      res.render("get-thoughts", {
        title: "Thought Diary - Thought",
        layout: "./layouts/dashboard-home.ejs",
        thought:thought,
        user: req.user
        
      });
    } catch (err) {
      console.log(err);
    }
  },

 getThoughtData: async (req, res) => {
    try {
      // get data by logged in user and by id
      const data = await thoughtDiary.find({id:req.params.id, user:req.user.id});
      res.json(data)
    } catch (err) {
      console.log(err);
    }
  },
};


