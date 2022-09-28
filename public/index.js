


const slider = document.getElementById("myRange");
const slideText = document.querySelector('.slidetext')
const moodRating = document.querySelector('.moodrating')
const WeeklyDates = document.querySelector('.WeeklyDates')
const dates = document.querySelectorAll('.date')
const mongoDates = document.querySelector('.mongoDates')
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
