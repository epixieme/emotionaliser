const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  
    city: {
      type: String,
      required: "This field is required",
    },
    zip: {
        type: String,
        required: "This field is required",
      },
     state: {
        type: String,
        required: "This field is required",
      },
  
  
  });
  
  
//   postSchema.index({city: "text", zip: "text", state: "text"  }, ); //{ unique: true }/// index search
  //Export the model so it can be reused in other js files
  module.exports = mongoose.model("PostCodes", postSchema); // interface to the db
  