


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
 console.log(moodRating.value)
}

function createDatesArray(){

let array = [1,2,3,4,5,6,7]
const dateArray = Array.from(dates)
let store =[]
for (i=0;i<array.length;i++){
store.push(dateArray[i])
}
return store.map(v => v === undefined ? '-' : v).filter(item=>item === '-')

}

function insertDatesArray(){
let array = createDatesArray()
console.log(array)

for(i=0;i<array.length;i++){
 const list = document.createElement('li')
 
 mongoDates.appendChild(list)
 list.innerHTML ='-'

}
return dates

}

insertDatesArray()





