const slider = document.getElementById("myRange");
const slideText = document.querySelector(".slidetext");
const moodRating = document.querySelector(".moodrating");
const WeeklyDates = document.querySelector(".WeeklyDates");
const dates = document.querySelectorAll(".date");
const mongoDates = document.querySelector(".mongoDates");
const thoughtRoutes = document.querySelectorAll(".thoughtRoute");
const dateFields = document.querySelectorAll(".dateFields")
const rating = document.querySelectorAll(".rating")
const nav = document.querySelectorAll("nav li")

// **** range slider feature for thought diary ****

if (slider) {
  slider.addEventListener("input", feelings);
}

function feelings() {
  const emotions = {
    6: "Great",
    5: "Very Good",
    4: "Good",
    3: "Bad",
    2: "Very Bad",
    1: "Awful",
  };

  // this line removes undefined values which were introduced when the range slider step was changed to .1
  slideText.value = JSON.parse(JSON.stringify(emotions[this.value]));

  moodRating.value = JSON.parse(JSON.stringify(this.value));

}

// **** weekly thoughts functionality for dashboard ****

let apiUrl = "/dashboard/tools/thoughtdiary/thoughtData";
async function fetchData(url) {
  try {
    let response = await fetch(url);
    let data = await response.json();
 console.log(data)
    // insertData(data);
    createRatingArrows(data)
  } catch (error) {
    console.log(error);
  }
}

fetchData(apiUrl);

// **** arrow ratings for though diary screen ****

function createRatingArrows(data){

let up = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="5.5" stroke="#047E3E" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
</svg>`

let down =`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="5.5" stroke="#B00102" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
</svg>
`
let noChange = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="5.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
</svg>
`

// need to say if user === then only show ratings for this user
console.log(data)

let arrows = data.map(item=>item.rating)

let upDown = arrows.reverse().map((item,i,a)=>item === a[i+1] ? noChange:item > a[i+1]?down:up)

upDown.forEach((item,i)=>rating[i].innerHTML = item)

// set first date item to nothing instead of arrows as nothing to compare
rating[rating.length -1].innerHTML='-'

// need to only see data for this req.user

}


const circlesBtn = document.querySelector('.circlesBtn')


circlesBtn.addEventListener('click', toolTip)

function toolTip(){
const likeOrNot = document.querySelector('.likeOrNot')


 let like = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6  hover:fill-teal-700">
 <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
</svg>`

let not =` <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 hover:fill-teal-700">
 <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384" />
</svg>`


let html =`
<section class ='dropdown rounded-md bg-black  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 shadow-md'>
<ul class="flex flex-col space-x-3 text-white p-4 rounded-md bg-black bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 shadow-md">
<li class ="flex p-1 rounded-md hover:bg-teal-700 items-center ">${like} I like this</li>
<li class ="flex p-1 rounded-md hover:bg-teal-700 items-center ">${not} I don't like this</li>
</select>


</ul>`

likeOrNot.innerHTML=html

if(likeOrNot.hidden === true){

  likeOrNot.hidden=false

}else{

  likeOrNot.hidden=true
}


}


function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}