
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
        res.render('community-thoughts',{
          title: "Community Forum",
          layout:'./layouts/dashboard-home.ejs',
          user: req.user,
          users:users,
      
        })
   
      }catch(err){
          console.log(err)
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