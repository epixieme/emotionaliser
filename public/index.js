


const slider = document.getElementById("myRange");
const slideText = document.querySelector('.slidetext')
const moodRating = document.querySelector('.moodrating')
const WeeklyDates = document.querySelector('.WeeklyDates')
const dates = document.querySelectorAll('.date')
const mongoDates = document.querySelector('.mongoDates')
const thoughtRoutes = document.querySelectorAll('.thoughtRoute')
console.log(this.value)


if(slider){
  slider.addEventListener('input', feelings)
}

const emotions = {

0:"Great",
1:"Very Good",
2:"Good",
3:"Bad",
4:"Very Bad",
5:"Awful"
}

function feelings(){

  // removes undefined values which were introduced when the range slider step was changed to .1
 slideText.value =  JSON.parse(JSON.stringify(emotions[this.value]))
// console.log(slideText)
 moodRating.value = JSON.parse(JSON.stringify(this.value))

}

let apiUrl = "/tools/thoughtdiary/thoughtData";
async function fetchData(url) {
  try {
    let response = await fetch(url);
    let data = await response.json();
    // console.log('this'+ data)
    insertIds(data)
    
  } catch (error) {
    console.log(error);
  }
}


fetchData(apiUrl);

async function insertIds(items){
let data = [...items]
let dateIds = await data.map(elem => (
  [
  elem.date,
  elem._id,
  elem.category,
  elem.image
]
))

let ids = dateIds.map(item=>item[1])
let category = dateIds.map(item=>item[2])
let image = dateIds.map(item=>item[3])
console.log(image)

// format the date string fetched from mongo
let formatDate = dateIds.map(item=>item[0]
.split(':')
.splice(0,1)
.join('')
.split('-').
slice(1,3)
.reverse()
.join('/')
.split('T')
.join('/')
.split('/')


).map(item=>`${parseInt(item[0],10)}/${parseInt(item[2],10)}`)

// console.log(formatDate)

// compare against the html dates in ejs and then add the id from ids array uising indexOf to match
return dates.forEach((item,i)=>{
  // insert id,image, category into html
if (formatDate.includes(item.innerText)){
  const imageMap = item.childNodes[5].src=`${image[formatDate.indexOf(item.innerText)]}`

const idMap  = item.childNodes[1].href=`/tools/thoughtdiary/${ids[formatDate.indexOf(item.innerText)]}`
const categoryMap = item.childNodes[3].innerText=`${category[formatDate.indexOf(item.innerText)]}`

// get images to work in the morn



}
})

}
insertIds()
