


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

function insertIds(items){
let data = [...items]
let dateIds =data.map(elem => (
  [
  elem.date,
  elem._id
]
))


let ids = dateIds.map(item=>item[1])


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


return dates.forEach(item=>{

  // console.log(dateIds)
  
return formatDate.includes(item.innerText)? item.childNodes[1].href='':''



})
// links.forEach(link => link.href = "https://google.com");
  // item.innerHTML !== '0'? item.childNodes.href ='/tools':'')
}

/// if dates.textcontent ===  format date then dates childnoe === id

insertIds()
// function createDatesArray(){

// let array = [1,2,3,4,5,6,7]
// const dateArray = [...dates]
// let store =[]

// let formatD = dateArray.map(item=>{
//  let formattedD =  new Date(item.textContent)
// let shortenDate = `${formattedD.getDate()}/${formattedD.getMonth()+ 1}`
// return shortenDate
// })

// for (i=0;i<array.length;i++){
 

//   // let formatDate = `${dateArray.getDate()}/${dateArray.getMonth()+ 1}`
// store.push(formatD[i])
// }
// return store.map(value => value === undefined ? '-' : value)

// }


// function insertDatesArray(){
// let array = createDatesArray()

// let dashes = array.filter(item=>item === '-')
// let dateValues = array.filter(item=>item !== '-')
// console.log(dashes, dateValues)

// for(i=0;i<array.length;i++){
//   dates[i].innerHTML = dateValues[i]
//   let dashLi = document.createElement('li')
//   dashLi.innerHTML=dashes[i]
//   mongoDates.appendChild(dashLi)
//   }


// // }
// return dates

// }

// insertDatesArray()





// const past7Days = [...Array(7).keys()].map(index => {
//   const date = new Date();
//   date.setDate(date.getDate() - index);
//   return `${date.getDate()}/${date.getMonth()+ 1}`;
// });



// module.exports = {
//   // reverse the dates to show past to present
//   past7Days: past7Days.reverse(),
 
// }
