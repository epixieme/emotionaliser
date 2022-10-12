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
            title:req.body.title,
            author:req.body.author,
            likes: 0,
             user: req.user.id,
          });
          console.log("Post has been added!");
          res.redirect("/dashboard/tools/motivations");
        } catch (err) {
          console.log(err);
        }
      },

    

}