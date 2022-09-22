module.exports = {
    getDashboard: async (req,res)=>{
        console.log(req.user)
        try{
          res.render('dashboard',{
            title: "Dashboard",
            layout:'./layouts/dashboard-home.ejs'
          })
     
        }catch(err){
            console.log(err)
        }
    },
    getDashboardTools: async (req,res)=>{
      console.log(req.user)
      try{
        res.render('tools',{
          title: "Wellbeing Tools",
          layout:'./layouts/dashboard-home.ejs'
        })
   
      }catch(err){
          console.log(err)
      }
  },
  }