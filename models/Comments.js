const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
 
  comment:{
    type:String,
    required: true,
  },
  
  likes: {
    type: Number,
    required: true,
  },
  thoughtsid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Thoughts",
  },
  bookmarked:{
    type:Boolean,
    default:false
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Comment", commentSchema);
