const mongoose = require("mongoose");

const motivationSchema = new mongoose.Schema({
  image: {
    type: String,
    required: "This field is required",
  },
  summary: {
    type: String,
    required: "This field is required",
  },
  // feelings: {
  //   type: Array,
  //   required: "This field is required",
  // },
  details: {
    type: String,
    required: "This field is required",
  },
  // this will be a chosen category form html select
  category: {
    type: String,
    enum: ["Great","Very Good","Good","Bad","Very Bad","Awful"],
    required: "This field is required",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  submitted: {type: Date, default: Date.now}

});


motivationSchema.index({ summary: "text", description: "text" }, ); //{ unique: true }/// index search
//Export the model so it can be reused in other js files
module.exports = mongoose.model("Motivations", motivationSchema); // interface to the db
