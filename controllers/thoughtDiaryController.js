
const thoughtDiary = require("../models/Thoughts");


module.exports = {
    getThoughtDiary: async (req,res)=>{
        console.log(req.user)
        try{
          res.render('thoughtdiary',{
            title: "Thought Diary",
            layout:'./layouts/dashboard-home.ejs'
          })
     
        }catch(err){
            console.log(err)
        }
    },
    submitThought: async (req,res)=>{
      console.log(req.user)
      try{
await thoughtDiary.findOne
        res.render('submit-thoughts',{
          title: "Thought Diary - submit",
          layout:'./layouts/dashboard-home.ejs'
        })
   
      }catch(err){
          console.log(err)
      }
  },
 
  }