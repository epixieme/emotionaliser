module.exports = {
    getMotivations: async (req, res) => {
      console.log(req.user);
      try {
        // const thoughts = await thoughtDiary.find({ user: req.user.id }).sort({submitted: -1}).limit(7)
        // const users = await userDetails.find();
        res.render("motivations", {
          title: "Motivational Quotes",
          layout: "./layouts/dashboard-home.ejs",
        //   thoughts:thoughts,
        //   users:users,
        //   user:req.user
        });
      } catch (err) {
        console.log(err);
      }
    },

    getSubmitMotivation: async (req, res) => {
        console.log(req.user);
    
        try {
          await thoughtDiary.findOne;
          res.render("submit-motivation", {
            title: "Motivation - submit",
            layout: "./layouts/dashboard-home.ejs",
          });
        } catch (err) {
          console.log(err);
        }
      },

    

}