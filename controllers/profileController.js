
const userDetails = require("../models/User");
const cloudinary = require("../middleware/cloudinary");
const thoughtDiary = require("../models/Thoughts");
const { CountryCodes } = require("validator/lib/isISO31661Alpha2");
const postCodeDetails = require("../models/PostCodes");


function errorHandling(res, error) {
  res.status(500).send({ message: error.message || "Error Occured" });
}

module.exports = {
    getProfile: async (req, res) => {
      // get posts by logged in user
      try {
        const users = await userDetails.findById(req.params.id);

      const state= await postCodeDetails.aggregate([{
        $group: {
          _id: null, 
          state: {$addToSet: "$state"}, 
          // zip: {$addToSet: "$zip"}
        }
    }])

    const cities= await postCodeDetails.aggregate([
     
      {
        $limit:1000
      },
     
      {
      $group: {
        _id: null, 
       cit:  {$addToSet: "$city"}}
  },
  {
    $sort: { city: -1}
    }
  
])

const zips = await postCodeDetails.aggregate([

  {
    $limit:1000
    },
  {
  $group: {
    _id: null, 
   zip:  {$addToSet: "$zip"}}
}

])

console.log(cities)
  

        res.render("profile.ejs", {
          title: "User Profile",
          layout: "./layouts/dashboard-home.ejs",
          users:users,
          user:req.user,
          state:state,
          cities:cities,
          zips:zips
       
        });
      } catch (err) {
        console.log(err);
      }
    }, 
    postEditProfile: async (req, res) => {
      try {

     await userDetails.findByIdAndUpdate(req.params.id,{
    //  need to use populate from the postcodes model
          user: req.user.id,
          userName: req.body.userName,
          firstName:req.body.firstName,
          lastName:req.body.lastName,
          email: req.body.email,
          password: req.body.password,
          city: req.body.city,
          county:req.body.county,
          postcode:req.body.postcode,
    
        });
     
      //  res.n
      //  res.nModified
        console.log("user profile updated");
        res.redirect(`/dashboard/profile/${req.params.id}`);
      } catch (err) {
        console.log(err);
        // errorHandling(res, err)
      }
    },
    postEditUserPhoto: async (req, res) => {
      try {
        // Upload image to cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);
  
     await userDetails.findByIdAndUpdate(req.params.id,{
     
          user: req.user.id,
       
          image: result.secure_url,
          cloudinaryId: result.public_id,
        });
     
      //  res.n
      //  res.nModified
        console.log("user profile updated");
        res.redirect(`/dashboard/profile/${req.params.id}`);
      } catch (err) {
        console.log(err);
        // errorHandling(res, err)
      }
    },


    
    deleteProfile: async (req, res) => {
    try {
      // Find post by id
      let user = await userDetails.findById({ _id: req.params.id });
      // Delete image from cloudinary - this doesn't work 
      // await cloudinary.uploader.destroy(user.cloudinaryId);
      // // Delete post from db
      await user.deleteOne({ _id: req.params.id });
      console.log("Deleted Post");
      res.redirect("/");
    } catch (err) {
      errorHandling(res, err)
      res.redirect("/");
    }
  },

  getDeleteProfile: async (req, res) => {
    try {
      const users = await userDetails.findById(req.params.id);
      res.render("delete-profile.ejs", {
        title: "Delete Profile",
        layout: "./layouts/dashboard-home.ejs",
        users:users,
        user:req.user,
     
      });
    } catch (err) {
      console.log(err);
    }
  },

}





