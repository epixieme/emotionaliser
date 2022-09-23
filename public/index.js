


const slider = document.getElementById("myRange");
const slideText = document.querySelector('.slidetext')
console.log(this.value)

slider.addEventListener('input', feelings)

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
 slideText.innerText =  JSON.parse(JSON.stringify(emotions[this.value]))
}