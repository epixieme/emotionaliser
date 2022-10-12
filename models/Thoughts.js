const mongoose = require("mongoose");

const thoughtSchema = new mongoose.Schema({
  image: {
    type: String,
    required: "This field is required",
    default:"No file"
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
  // this is not working
  rating: {
    type: Number,
    required: "This field is required",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  level:{
   type:String,
   default:"1"
  },
  date: {type: Date, default: Date.now},
  submitted:{
    type:Boolean,
    default:true
  },
  bookmarked:{
    type:Boolean,
    default:false
  }

});


thoughtSchema.index({ summary: "text", description: "text" }, ); //{ unique: true }/// index search
//Export the model so it can be reused in other js files
module.exports = mongoose.model("Thoughts", thoughtSchema); // interface to the db
