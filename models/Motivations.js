const mongoose = require("mongoose");

const motivationSchema = new mongoose.Schema({
image: {
    type: String,
    required: "This field is required",
  },
 title: {
    type: String,
    required: "This field is required",
  },
quote: {
    type: String,
    required: "This field is required",
  },
  private:{
    type:Boolean,
    default:false,
  }
  // tags:{

  // }
});


motivationSchema.index({ summary: "text", description: "text" }, ); //{ unique: true }/// index search
//Export the model so it can be reused in other js files
module.exports = mongoose.model("Motivations", motivationSchema); // interface to the db
