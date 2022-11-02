const cloudinary = require("../middleware/cloudinary");
const motivationQuotes = require("../models/Motivations");
const userDetails = require("../models/User");


module.exports = {

    getMotivations: async (req, res) => {
      const motivations = await motivationQuotes.find({id:req.params.id})
  
      try {
        // const thoughts = await thoughtDiary.find({ user: req.user.id }).sort({submitted: -1}).limit(7)
        // const users = await userDetails.find();
        res.render("motivations", {
          title: "Motivational Quotes",
          layout: "./layouts/dashboard-home.ejs",
          user:req.user,
          motivations:motivations
        //   users:users,
        //   user:req.user
        });
      } catch (err) {
        console.log(err);
      }
    },

    getSubmitMotivation: async (req, res) => {
        console.log(req.user);
    
        try {
          const motivation =  await motivationQuotes.find()
          res.render("submit-motivation", {
            title: "Motivation - submit",
            layout: "./layouts/dashboard-home.ejs",
            user:req.user
          });
        } catch (err) {
          console.log(err);
        }
      },

      postSubmitMotivation: async (req, res) => {

        console.log(req.user.id)
        try {
          // Upload image to cloudinary
          const result = await cloudinary.uploader.upload(req.file.path);
    
          await motivationQuotes.create({
           
            image: result.secure_url,
            cloudinaryId: result.public_id,
            poem: req.body.poem,
            author:req.body.author,
             user: req.user.id,
          });
          console.log("Post has been added!");
          res.redirect("/dashboard/tools/motivations");
        } catch (err) {
          console.log(err);
        }
      },

      getMotivation: async (req, res) => {

        try {
          const motivation =  await motivationQuotes.findById(req.params.id);
        
          res.render("get-motivation", {
            title: "Motivational Quotes - Quote",
            layout: "./layouts/dashboard-home.ejs",
            motivation:motivation,
            user: req.user
            
          });
        } catch (err) {
          console.log(err);
        }
      },
      getEditMotivation: async (req, res) => {

        try {
          const motivation = await motivationQuotes.findById(req.params.id);
       
          res.render("edit-motivation", {
            title: "Edit Motivation - Motivation",
            layout: "./layouts/dashboard-home.ejs",
            motivation:motivation,
            user: req.user
            
          });
        } catch (err) {
          console.log(err);
        }
      },
    
      postEditMotivation: async (req, res) => {
        try {
          // Upload image to cloudinary
          const result = await cloudinary.uploader.upload(req.file.path);
    
       await motivationQuotes.findByIdAndUpdate(req.params.id,{
          
            image: result.secure_url,
            cloudinaryId: result.public_id,
            poem: req.body.poem,
            author: req.body.author,
            public: req.body.public,
            user: req.user.id,
    
          });
       
         res.n
         res.nModified
          console.log("Motivation has been added!");
          res.redirect("/dashboard/tools/motivations");
        } catch (err) {
          console.log(err);
          // errorHandling(res, err)
        }
      },

      delMotivation: async (req, res) => {
        try {
          // Find post by id
          let motivation = await motivationQuotes.findById({ _id: req.params.id });
          // Delete image from cloudinary
          // await cloudinary.uploader.destroy(thought.cloudinaryId);
          // Delete post from db
          await motivationQuotes.deleteOne({ _id: req.params.id });
          console.log("Deleted Post");
          res.redirect("/dashboard/tools/motivations");
        } catch (err) {
          errorHandling(res, err)
          res.redirect("/dashboard/tools/motivations");
        }
      },
      

}