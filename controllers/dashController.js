module.exports = {
    getDashboard: async (req,res)=>{
        console.log(req.user)
        try{
          res.render('dashboard')
            // res.render('todos.ejs', {todos: todoItems, left: itemsLeft, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
  }