


const slider = document.getElementById("myRange");
const slideText = document.querySelector('.slidetext')
const moodRating = document.querySelector('.moodrating')
const WeeklyDates = document.querySelector('.WeeklyDates')
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


