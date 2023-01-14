const cloudinary = require("../middleware/cloudinary");
const thoughtDiary = require("../models/Thoughts");
const userDetails = require("../models/User");
const helper = require('../public/helper.js');

function errorHandling(res, error) {
  res.status(500).send({ message: error.message || "Error Occured" });
}
module.exports = {
 
  getThoughtDiary: async (req, res) => {
    // get posts by logged in user
    try {
      const users = await userDetails.find();
      const perPage = 9
      const page = req.params.page || 1
      const count = await thoughtDiary.find({ user: req.user.id }).count()
      console.log(page)
     
      // console.log('this is the page' + page)
      const thoughts = await thoughtDiary.find({ user: req.user.id }).skip((perPage * page) - perPage).limit(perPage).sort({date: -1});
      const thoughtDate = await thoughtDiary.findOne({ user: req.user.id }).sort({date: -1})
      // const thoughtsPerPage = await thoughtDiary.find().skip((perPage * page) - perPage).limit(perPage).sort({date: -1});
    
    
      res.render("thoughtdiary.ejs", {
        title: "Thought Diary",
        layout: "./layouts/dashboard-home.ejs",
        users:users,
        thoughtDate:thoughtDate,
        // thoughtsPerPage:thoughtsPerPage,
        thoughts:thoughts,
        user:req.user, 
        current:page,
       
        // this gets the number of pages
        pages: Math.ceil(count / perPage),
      });
    } catch (err) {
      console.log(err);
    }
  },
  searchItems: async (req, res) => {
    try {
      const users = await userDetails.find();
      let searchTerm = req.body.searchTerm;
      console.log('searchterm' + searchTerm)
      const thoughtDate = await thoughtDiary.findOne({ user: req.user.id }).sort({date: -1})
      let searchResults = await thoughtDiary.find({
        $text: { $search: searchTerm, $diacriticSensitive: true },
      });
      console.log(searchResults);
      res.render("thoughtdiary.ejs", {
        results:searchResults,
        user: req.user,
        users:users,
        thoughtDate:thoughtDate
      });
    } catch (error) {
      errorHandling(res, error);
    }
  },



  delThoughtDiary: async (req, res) => {
    try {
      // Find post by id
      let thought = await thoughtDiary.findById({ _id: req.params.id });
      // Delete image from cloudinary
      // await cloudinary.uploader.destroy(thought.cloudinaryId);
      // Delete post from db
      await thoughtDiary.deleteOne({ _id: req.params.id });
      console.log("Deleted Post");
      res.redirect("/dashboard/tools/thoughtdiary");
    } catch (err) {
      errorHandling(res, err)
      res.redirect("/dashboard/tools/thoughtdiary");
    }
  },
  
  getSubmitThought: async (req, res) => {

    try {
     const thoughts =  await thoughtDiary.find({user:req.user.id})


      res.render("submit-thoughts", {
        title: "Thought Diary - submit",
        layout: "./layouts/dashboard-home.ejs",
        thoughts:thoughts,
        user: req.user,
      
      });
    } catch (err) {
      console.log(err);
    }
  },
  postSubmitThought: async (req, res) => {
  
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);

   await thoughtDiary.create({
        summary: req.body.summary,
        image: result.secure_url,
        cloudinaryId: result.public_id,
        details: req.body.details,
        category: req.body.category,
        rating:req.body.rating,
        public: req.body.public,
        likes: 0,
        user: req.user.id,

      });

      // Retrieve document
// const doc = await thoughtDiary.findOne({ category })

// Append items to `friends`

console.log(thoughtDiary.category)
await userDetails.findOneAndUpdate(
  { _id: req.user},
      
  //  {$push: {thoughtBookmarks:req.body.id}},
  { $push: {thoughtSchema:thoughtDiary.category}}
  // { new: true } // forces callback to be passed a fresh object
);



// userDetails.save()

// Update document

     
   
      console.log("Post has been added!");
      res.redirect("/dashboard/tools/thoughtdiary");
    } catch (err) {
      console.log(err);
    }
  },
  getThought: async (req, res) => {

    try {
      const thought = await thoughtDiary.findById(req.params.id);
      console.log('this is thoughts' + thought)
      res.render("get-thoughts", {
        title: "Thought Diary - Thought",
        layout: "./layouts/dashboard-home.ejs",
        thought:thought,
        user: req.user
        
      });
    } catch (err) {
      console.log(err);
    }
  },

 getThoughtData: async (req, res) => {
    try {
      // get data by logged in user and by id
      const data = await thoughtDiary.find({id:req.params.id, user:req.user.id});
      res.json(data)
    } catch (err) {
      console.log(err);
    }
  },
  getEditThought: async (req, res) => {

    try {
      const thought = await thoughtDiary.findById(req.params.id);
      console.log('this is thoughts' + thought)
      res.render("edit-thought", {
        title: "Thought Diary - Thought",
        layout: "./layouts/dashboard-home.ejs",
        thought:thought,
        user: req.user
        
      });
    } catch (err) {
      console.log(err);
    }
  },

  postEditThought: async (req, res) => {
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);

   await thoughtDiary.findByIdAndUpdate(req.params.id,{
        summary: req.body.summary,
        image: result.secure_url,
        cloudinaryId: result.public_id,
        details: req.body.details,
        category: req.body.category,
        rating:req.body.rating,
        user: req.user.id,

      });
      console.log('this is the summary', req.body)
     res.n
     res.nModified
      console.log("Post has been added!");
      res.redirect("/dashboard/tools/thoughtdiary");
    } catch (err) {
      console.log(err);
      // errorHandling(res, err)
    }
  },
};


