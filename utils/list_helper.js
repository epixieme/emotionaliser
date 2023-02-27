const dummy = (blogs) => {
   return blogs = 1
  }

 

  const totalLikes = (blogs) => {
const reducer = (sum, item) => {
        return sum + item
    }
  const likes = blogs.map(element => element.likes);
    return likes.length > 1? likes.reduce(reducer, 0):likes[0]

   }

   const favouriteBlog=(blogs)=>{
   return blogs
   .reduce((accumulator, currentValue, index) => accumulator.likes > currentValue.likes 
   ? accumulator 
   : currentValue);

   }

   const mostBlogs =(blogs)=>{
    return blogs
    .reduce((accumulator, currentValue, index) => accumulator.blogs > currentValue.blogs
    ? {author:accumulator.author, blogs:accumulator.blogs}
    : {author:currentValue.author, blogs:currentValue.blogs});
 
    }


  
  module.exports = {
    dummy,totalLikes,favouriteBlog, mostBlogs
  }

