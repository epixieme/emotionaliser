const mongoose = require("mongoose");

const motivationSchema = new mongoose.Schema({
image: {
    type: String,
    required: "This field is required",
  },
  // category: {
  //   type: String,
  //   enum: ["inspiration","love","peace","future"],
  //   required: "This field is required",
  // },

  poem: {
    type: String,
    required: "This field is required",
  },
  author: {
    type: String,
    required: "This field is required",
  },
  private:{
    type:Boolean,
    default:false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  likes: 0,
  bookmarked:{
    type:Boolean,
    default:false
  }
  // tags:{

  // }
});


motivationSchema.index({ summary: "text", description: "text" }, ); //{ unique: true }/// index search
//Export the model so it can be reused in other js files
module.exports = mongoose.model("Motivations", motivationSchema); // interface to the db
