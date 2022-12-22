const thoughtDiary = require("../models/Thoughts");
const userDetails = require("../models/User");
const motivationsQuotes = require("../models/Motivations");

// this is an exported function for calculating the last 7 days, then I am able to render it to EJS as below in getDashboard
const helper = require('../public/helper.js');


function getRandomQuotes(min, max){
return Math.ceil(Math.random() * (max-min) + min)
}

module.exports = {

    getDashboard: async (req,res)=>{
      
        try{
          const thoughts = await (await thoughtDiary.find({ user: req.user.id }).sort({date: -1}).limit(7)).reverse()
          const users = await userDetails.find();
          const motivations = await motivationsQuotes.find({id:req.params.id,like:true})

          // get random quotes to show on dashboard
          const randomMotivations = motivations.sort(() => Math.random() - 0.5);

          res.render('dashboard',{
            title: "Dashboard",
            layout:'./layouts/dashboard-home.ejs',
            thoughts:thoughts,
            users:users,
            user:req.user,
            helper:helper,
            motivations:randomMotivations
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
          layout:'./layouts/dashboard-home.ejs',
          user:req.user,
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
  dislikeQuote: async (req, res) => {


    console.log('this is motivaton ids' + req.body.id )
    try {
     await motivationsQuotes.findByIdAndUpdate(
      req.body.id,{
        like: false, 
      }
        
      );

      console.log("Likes:false");
      res.redirect(`/dashboard`);
    } catch (err) {
      console.log(err);
    }
  },
  likeQuote: async (req, res) => {


    console.log('this is motivaton ids' + req.body.id )
    try {
     await motivationsQuotes.findByIdAndUpdate(
      req.body.id,{
        like: true, 
      }
        
      );

      console.log("Likes:false");
     
      res.redirect(`/dashboard`);
    } catch (err) {
      console.log(err);
    }
  },
  }