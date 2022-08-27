
//*******************************************
// HOMEPAGE CONTROLLER
// ******************************************

require("../models/database"); // controller talks to the model and view, router and renders to the browser - middle man
// const Category = require("../models/Category"); // get the Category js file from models dir
// const Emotion = require("../models/Emotion"); // get the Emotion js file from models dir

// helper function for error handling
function errorHandling(res, error) {
  res.status(500).send({ message: error.message || "Error Occured" });
}

/**
 * Get/
 * Homepage
 */

// can use exports which is a reference to module.exports allowing us to write shorter code.


// or we can use an object with multiple methods

module.exports = {
  homepage: async (req,res)=>{
      console.log(req.user)
      try{
        res.render('home')
          // res.render('todos.ejs', {todos: todoItems, left: itemsLeft, user: req.user})
      }catch(err){
          console.log(err)
      }
  },
}