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
 
  }