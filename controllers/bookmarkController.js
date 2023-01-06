const thoughtDiary = require("../models/Thoughts");
const userDetails = require("../models/User");
const motivationDetails = require("../models/Motivations");


function errorHandling(res, error) {
  res.status(500).send({ message: error.message || "Error Occured" });
}

module.exports = {
  addBookmark: async (req, res) => {
  
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
  
    try {
      const community = await userDetails.findOneAndUpdate(
        { _id: req.user},
      
        //  {$push: {thoughtBookmarks:req.body.id}},
        { $addToSet: {thoughtBookmarks:req.body.id}}
       
        //  { upsert: true }
)

 
  console.log("community" + community);

  res.redirect("/dashboard/community/communityThoughts");



    // community.bookmarks.push(req.body.id)
    
    } catch (err) {
      errorHandling(res, err);
    }
  },

  removeCommunityBookmark: async (req, res) => {
    try {
      const motivations = await userDetails.findOneAndUpdate(
        { _id: req.user },
        {$pull: {thoughtBookmarks:req.body.id}}
      );
      console.log("unbookmarked");
      res.redirect("/dashboard/community/communityThoughts");
    } catch (err) {
      errorHandling(res, err);
    }
  },
  addMotivationBookmark: async (req, res) => {
   
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

      const community = await userDetails.find(req.user).populate('thoughtBookmarks')
      const userName = await thoughtDiary.find().populate({path:'user', select:'userName'})

      res.render("bookmarks", {
        title: "Bookmarks",
        layout: "./layouts/dashboard-home.ejs",
        thoughts: thoughts,
        motivations: motivations,
        community:community,
        user: req.user,
        userName:userName
        
      });
    } catch (err) {
      errorHandling(res, err);
    }
  },
};