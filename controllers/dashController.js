module.exports = {
    getDashboard: async (req,res)=>{
        console.log(req.user)
        try{
          res.render('dashboard',{
            title: "Dashboard",
            layout:'./layouts/dashboard-home.ejs'
          })
            // res.render('todos.ejs', {todos: todoItems, left: itemsLeft, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
  }