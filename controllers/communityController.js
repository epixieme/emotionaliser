const thoughtDiary = require("../models/Thoughts");
const userDetails = require("../models/User");
const commentDetails = require("../models/Comments");

const motivationsDetails = require("../models/Motivations");

function errorHandling(res, error) {
  res.status(500).send({ message: error.message || "Error Occured" });
}

module.exports = {
  getCommunity: async (req, res) => {
    try {
      const users = await userDetails.find();

      const user = await userDetails.findOne(req.user);
      res.render("community", {
        title: "Dashboard",
        layout: "./layouts/dashboard-home.ejs",
        user: user,
        users: users,

      });
    } catch (err) {
      console.log(err);
    }
  },
  getThoughtPosts: async (req, res) => {

    try {
      const comments = await commentDetails.find().lean()

 
      //use the id in the body to get the individual thought id 
     
      const users = await userDetails.find().lean();
     
      const thoughts = await thoughtDiary.find({ public: true}).lean();
      const commentCount = await commentDetails.find().count();
      const userName = await thoughtDiary.find().populate({path:'user', select:'userName image'})
      console.log('username' + userName);

      res.render("community-thoughts", {
        title: "Community Forum",
        layout: "./layouts/dashboard-home.ejs",
        user: req.user,
        users: users,
        userName: userName,
        thoughts: thoughts,
        likes: 0,
        comments:comments,
        commentCount:commentCount
        
      });
    } catch (err) {
      console.log(err);
    }
  },

  likePost: async (req, res) => {
    try {
      console.log(req.body.id);
      await thoughtDiary.findOneAndUpdate(
        { _id: req.body.id },
        {
          $inc: { likes: 1 },
        }
      );
      console.log("Likes +1");
      res.redirect(`/dashboard/community/communityThoughts`);
    } catch (err) {
      console.log(err);
    }
  },


  getMotivationtPosts: async (req, res) => {
try {
      const motivations = await motivationsDetails.find({ public: true}).lean();
      const users = await userDetails.find();
      const comments = await commentDetails.find().lean()
      const commentCount = await commentDetails.find().count();
      res.render("community-motivations", {
        title: "Community Forum",
        layout: "./layouts/dashboard-home.ejs",
        user: req.user,
        users: users,
        motivations:motivations,
        comments:comments,
        commentCount:commentCount
      });
    } catch (err) {
      console.log(err);
    }
  },

  deletePost: async (req, res) => {
    try {
      const thoughts = await thoughtDiary.findOneAndUpdate(
        { _id: req.body.id },
        {
          public: false,
        }
      );
      res.redirect(`/dashboard/community/communityThoughts`);
    } catch (err) {
      console.log(err);
      errorHandling(res, err);
    }
  },

};
