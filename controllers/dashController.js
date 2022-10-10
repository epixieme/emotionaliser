const thoughtDiary = require("../models/Thoughts");
const userDetails = require("../models/User");
// this is an exported function for calculating the last 7 days, then I am able to render it to EJS as below in getDashboard
const helper = require('../public/helper.js');

module.exports = {
    getDashboard: async (req,res)=>{
        console.log('this is req.user ' + req.user)
        try{
          const thoughts = await thoughtDiary.find({ user: req.user.id }).sort({submitted: -1}).limit(7)
          const users = await userDetails.find();

          res.render('dashboard',{
            title: "Dashboard",
            layout:'./layouts/dashboard-home.ejs',
            thoughts:thoughts,
            users:users,
            user:req.user,
            helper:helper
          })
     
        }catch(err){
            console.log(err)
        }
    },
    getDashboardTools: async (req,res)=>{
      console.log(req.user)
      try{
        res.render('tools',{
          title: "Wellbeing Tools",
          layout:'./layouts/dashboard-home.ejs'
        })
   
      }catch(err){
          console.log(err)
      }
  },
  getTypesOfEmotion: async (req, res) => {
  
    try {
      const limitNumber = 7;
      const great = await thoughtDiary.find({ category: "Great" }).limit(limitNumber);
      const veryGood = await thoughtDiary.find({ category: "Very Good" }).limit(limitNumber);
      const good = await thoughtDiary.find({ category: "Good" }).limit(limitNumber);
      const feelings = {great, veryGood, good }; //put latestEmotion and individual emotions into an object to use in EJS
      res.render("dashboard", {
        title: "Emotions App - Homepage",
        categories,
        feelings,
      }); // render homepage title and categories
    } catch (error) {
      errorHandling(res, error);
    }
  },
  }