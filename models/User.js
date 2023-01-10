const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName:{type: String},
  lastName:{type: String},
  userName: { type: String, unique: true },
  email: { type: String, unique: true },
  password: String,
  // for file uploads of user picture
image: {
  type: String,
  required: "This field is required",
  default:"No file"
},
 thoughtBookmarks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Thoughts'
}],
city:{
  type: String, 
  required: "This field is required",
  default:"No City"
},
county:{
  type: String, 
  required: "This field is required",
  default:"No County"
},
postCode:{
  type: String, 
  required: "This field is required",
  default:"No PostCode"
}
});

// Password hash middleware.

UserSchema.pre("save", function save(next) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});

// Helper method for validating user's password.

UserSchema.methods.comparePassword = function comparePassword(
  candidatePassword,
  cb
) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    cb(err, isMatch);
  });
};

module.exports = mongoose.model("User", UserSchema);
