const thoughtDiary = require("../models/Thoughts");
const userDetails = require("../models/User");
function errorHandling(res, error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }

module.exports = {
    addBookmark: async (req, res)=>{

        console.log('this is id' + req.params.id)
    try{
        const thoughts = await thoughtDiary.findOneAndUpdate({_id:req.params.id},{
            bookmarked: true
        })
        console.log('bookmarked')
       
        res.redirect("/tools/thoughtdiary");
    }catch(err){

        errorHandling(res, err)
    }
},
removeBookmark: async (req, res)=>{
    try{
        const thoughts = await thoughtDiary.findOneAndUpdate({_id:req.params.id},{
            bookmarked: false
        })
        console.log('unbookmarked')
        res.redirect("/tools/thoughtdiary");
    }catch(err){
     
        errorHandling(res, err)
    }
},
getBookmarked: async (req, res)=>{
    try{
        const thoughts = await thoughtDiary.findOne({bookmarked: true})
        console.log('bookmarked')
        res.render('bookmarks')
    }catch(err){
        console.log(err)
    }
},

}