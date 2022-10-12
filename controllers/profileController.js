
const userDetails = require("../models/User");

module.exports = {
    getProfile: async (req, res) => {
      // get posts by logged in user
      try {
        const users = await userDetails.findById(req.params.id);
        res.render("profile.ejs", {
          title: "User Profile",
          layout: "./layouts/dashboard-home.ejs",
          users:users,
          user:req.user,
       
        });
      } catch (err) {
        console.log(err);
      }
    }, 
    
}