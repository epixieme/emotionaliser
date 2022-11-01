const comments = require("../models/Comments");
const userDetails = require("../models/User");
function errorHandling(res, error) {
  res.status(500).send({ message: error.message || "Error Occured" });
}

module.exports = {
    getComment:async(req,res) =>{


    try{
  
  
    }catch(err){
      
    }
  
   }

}