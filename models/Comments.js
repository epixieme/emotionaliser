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
  thoughts: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Thoughts", 
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  
});

module.exports = mongoose.model("Comment", commentSchema);
