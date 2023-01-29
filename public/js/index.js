const slider = document.getElementById("myRange");
const slideText = document.querySelector(".slidetext");
const moodRating = document.querySelector(".moodrating");
const WeeklyDates = document.querySelector(".WeeklyDates");
const dates = document.querySelectorAll(".date");
const mongoDates = document.querySelector(".mongoDates");
const thoughtRoutes = document.querySelectorAll(".thoughtRoute");
const dateFields = document.querySelectorAll(".dateFields");
const rating = document.querySelectorAll(".rating");

const nav = document.querySelectorAll("nav li");
const like = document.querySelector(".like");
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", showNavMenu);

function showNavMenu() {
  menu.classList.toggle("hidden");
}

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
// only fetch data if user is logged in
let apiUrl = "/dashboard/tools/thoughtdiary/thoughtData";

async function fetchData(url) {
  try {
    let response = await fetch(url);
    let data = await response.json();

    // insertData(data);
    createRatingArrows(data);

  } catch (error) {
    console.log(error);
  }
}

fetchData(apiUrl);

// **** arrow ratings for though diary screen ****

function createRatingArrows(data) {
  let up = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="5.5" stroke="#047E3E" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
</svg>`;

  let down = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="5.5" stroke="#B00102" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
</svg>
`;
  let noChange = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="5.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
</svg>
`;

  // need to say if user === then only show ratings for this user
  // console.log('data' + data)

  let arrows = data.map((item) => item.rating);

  let upDown = arrows.slice()
    .reverse()
    .map((item, i, a) =>
      item === a[i - 1] ? noChange : item < a[i - 1] ? down : up
    );
    
    // let dashUpDown = arrows.slice()
    // .reverse()
    // .map((item, i, a) =>
    //   item === a[i - 1] ? noChange : item < a[i -1] ? down : up
    // );

  upDown.forEach((item, i) => (rating[i].innerHTML = item));

  // dashUpDown.forEach((item, i) => (dashRating[i].innerHTML = item));

  // set first date item to nothing instead of arrows as nothing to compare
  rating[0].innerHTML = "-";
  // dashRating[dashRating.length - 1].innerHTML = "-";

  // need to only see data for this req.user
}

const circlesBtn = document.querySelector(".circlesBtn");
const motivationSection = document.querySelector(".motivationSection ");

const likeOrNot = document.querySelector(".likeOrNot");

if (circlesBtn) {
  circlesBtn.addEventListener("click", toolTip);
}


// if (like) {
//   like.addEventListener("click", likedislike);
// }

// dashboard motivational quote
//show modal if hidden on click
function toolTip() {

  
  if (likeOrNot.classList.contains("hidden")) {
    likeOrNot.classList.remove("hidden");
 
  } else {
    likeOrNot.classList.add("hidden");
  }
  // if (like) {
  //   like.addEventListener("click", likeunlike(likeOrNot));
  // }
}

// on click of like or dislike then hide like/dislike modal to show the flash messsage

// function likedislike() {
//   const likeOrNot = document.querySelector(".likeOrNot");
//   likeOrNot.classList.add("hidden");
// }

function timedFlashMsg() {
  let likeMsg = document.getElementById("likeMsg");
  let dislikeMsg = document.getElementById("dislikeMsg");
  const bookmarkedMsg = document.getElementById("bookmarkedMsg")

  // set flash messages to fade out
setTimeout(() => {
    if (likeMsg && likeMsg.innerText.length > 0 ) {
      likeMsg.style.display = "none";
     
    }
    if (bookmarkedMsg && bookmarkedMsg.innerText.length > 0 ) {
     bookmarkedMsg.style.display = "none";
     
    }
    else if (dislikeMsg && dislikeMsg.innerText.length > 0) {
      dislikeMsg.style.display = "none";

    }
  }, "3000");
}

timedFlashMsg();
