
const userDetails = require("../models/User");
const cloudinary = require("../middleware/cloudinary");
const thoughtDiary = require("../models/Thoughts");
const { CountryCodes } = require("validator/lib/isISO31661Alpha2");


function errorHandling(res, error) {
  res.status(500).send({ message: error.message || "Error Occured" });
}

module.exports = {
    getProfile: async (req, res) => {
      // get posts by logged in user
      try {
        const users = await userDetails.findById(req.params.id);
        res.render("profile.ejs", {
          title: "User Profile",
          layout: "./layouts/dashboard-home.ejs",
          users:users,
          user:req.user,
       
        });
      } catch (err) {
        console.log(err);
      }
    }, 
    
  delProfile: async (req, res) => {
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
  getEditProfile: async (req, res) => {
      const result = await cloudinary.uploader.upload(req.file.path);
    try {
      const thought = await thoughtDiary.findById(req.params.id);
      console.log('this is thoughts' + thought)
      res.render("edit-thought", {
        title: "Thought Diary - Thought",
        layout: "./layouts/dashboard-home.ejs",
        thought:thought,
        user: req.user
        
      });
    } catch (err) {
      console.log(err);
    }
  },

postEditProfile: async (req, res) => {
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);

   await userDetails.findByIdAndUpdate(req.params.id,{
        image: result.secure_url,
        cloudinaryId: result.public_id,
        user: req.user.id,
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
        city: req.body.city,
        county:req.body.county,
        postcode:req.body.postcode
      });
   
     res.n
     res.nModified
      console.log("user profile updated");
      res.redirect("edit-thought");
    } catch (err) {
      console.log(err);
      // errorHandling(res, err)
    }
  },
}





