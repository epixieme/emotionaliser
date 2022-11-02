const comments = require("../models/Comments");
const userDetails = require("../models/User");
const thoughtDiary = require("../models/Thoughts");


function errorHandling(res, error) {
  res.status(500).send({ message: error.message || "Error Occured" });
}

module.exports = {
createComment:async(req,res) =>{
try{
  console.log('thought' + req.body.thoughtId)
  const comment = await comments.create({
    comment: req.body.comment,
    likes:0,
    thoughts: req.body.thoughtId
  })
  res.redirect(`/dashboard/community/communityThoughts`);
  
    }catch(err){
      console.log(err)
    }
  
   }
}