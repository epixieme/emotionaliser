const comments = require("../models/Comments");
const userDetails = require("../models/User");
const thoughtDiary = require("../models/Thoughts");
const motivations = require("../models/Motivations");


function errorHandling(res, error) {
  res.status(500).send({ message: error.message || "Error Occured" });
}

module.exports = {
createThoughtsComment:async(req,res) =>{
try{
  const comment = await comments.create({
    comment: req.body.comment,
    likes:0,
    thoughts:req.body.id,
    user:req.user.id
  
  })
  res.redirect(`/dashboard/community/communityThoughts#replies`);
    }catch(err){
      console.log(err)
    }
   },
   createMotivationsComment:async(req,res) =>{
    try{
      const comment = await comments.create({
        comment: req.body.comment,
        likes:0,
        motivations:req.body.id
 
      })
      res.redirect(`/dashboard/community/communityMotivations`);
        }catch(err){
          console.log(err)
        }
       },
  
}