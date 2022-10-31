
const thoughtDiary = require("../models/Thoughts");
const userDetails = require("../models/User");


module.exports = {
    getCommunity: async (req,res)=>{
      
        try{

            const users = await userDetails.find();
          res.render('community',{
            title: "Dashboard",
            layout:'./layouts/dashboard-home.ejs',
            user: req.user,
            users:users,
        
          })
     
        }catch(err){
            console.log(err)
        }
    },
    getThoughtPosts: async (req,res)=>{
      
      try{
        const users = await userDetails.find();
        const thoughts = await thoughtDiary.find({public:true})
        res.render('community-thoughts',{
          title: "Community Forum",
          layout:'./layouts/dashboard-home.ejs',
          user: req.user,
          users:users,
          thoughts:thoughts,
          likes:0
        
        })
   
      }catch(err){
          console.log(err)
      }
  },
  likePost: async (req, res) => {
    try {
      console.log(req.body.id)
      await thoughtDiary.findOneAndUpdate(
        { _id: req.body.id },
        {
          $inc: { likes: 1 },
        }
      );
      console.log("Likes +1");
      // res.redirect(`/post/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },

  getMotivationtPosts: async (req,res)=>{
      
    try{
      const users = await userDetails.find();
      res.render('community-motivations',{
        title: "Community Forum",
        layout:'./layouts/dashboard-home.ejs',
        user: req.user,
        users:users,
    
      })
 
    }catch(err){
        console.log(err)
    }
},

    
}