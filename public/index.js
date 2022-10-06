const slider = document.getElementById("myRange");
const slideText = document.querySelector(".slidetext");
const moodRating = document.querySelector(".moodrating");
const WeeklyDates = document.querySelector(".WeeklyDates");
const dates = document.querySelectorAll(".date");
const mongoDates = document.querySelector(".mongoDates");
const thoughtRoutes = document.querySelectorAll(".thoughtRoute");
const dateFields = document.querySelectorAll(".dateFields")
const rating = document.querySelectorAll(".rating")



if (slider) {
  slider.addEventListener("input", feelings);
}

function feelings() {
  const emotions = {
    0: "Great",
    1: "Very Good",
    2: "Good",
    3: "Bad",
    4: "Very Bad",
    5: "Awful",
  };

  // this line removes undefined values which were introduced when the range slider step was changed to .1
  slideText.value = JSON.parse(JSON.stringify(emotions[this.value]));

  moodRating.value = JSON.parse(JSON.stringify(this.value));
}


let apiUrl = "/tools/thoughtdiary/thoughtData";
async function fetchData(url) {
  try {
    let response = await fetch(url);
    let data = await response.json();
    // console.log('this'+ data)
    insertData(data);
    createRatingArrows(data)
  } catch (error) {
    console.log(error);
  }
}

fetchData(apiUrl);

function insertData(data) {
  // create array of dates on dashboard by exporting the function and passing through controller back to ejs so I can style it in tailwind

    
  let dateIds = data.map(elem => [
    elem.date,
    elem._id,
    elem.category,
    elem.image,
    elem.summary
  ]);

    // format the date string fetched from mongo
  let formatDate = dateIds
  .map((item) =>
    item[0]
      .split(":")
      .splice(0, 1)
      .join("")
      .split("-")
      .slice(1, 3)
      .reverse()
      .join("/")
      .split("T")
      .join("/")
      .split("/")
  )
  .map((item) => `${parseInt(item[0], 10)}/${parseInt(item[2], 10)}`).filter(item=>!item==0)
  console.log(formatDate)

  let ids = dateIds.map((item) => item[1]);
  let category = dateIds.map((item) => item[2]);
  let image = dateIds.map((item) => item[3]);
  let summary = dateIds.map((item) => item[4]);
 

   
  // compare against the html dates in ejs and then add the id from ids array uising indexOf to match
  return dates.forEach((item, i) => {
   console.log(item.childNodes)
    // insert id,image, category into html
    if (formatDate.includes(item.innerText)) {
      
      const imageMap = (item.childNodes[1].childNodes[1].src = `${
        image[formatDate.indexOf(item.innerText)]
      }`);
      const idMap = (item.childNodes[1].href = `/tools/thoughtdiary/${
        ids[formatDate.indexOf(item.innerText)]
      }`);
    
      const categoryMap = (item.childNodes[5].innerText = `#${
        category[formatDate.indexOf(item.innerText)]
      }`);
    
    }
  });

}


function createRatingArrows(data){
//get this working

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

let arrows = data.map(item=>item.rating)

let upDown = arrows.reverse().map((item,i,a)=>item === a[i+1] ? noChange:item > a[i+1]?down:up)



upDown.forEach((item,i)=>rating[i].innerHTML = item )

// set first date item to nothing instead of arrows as nothing to compare
rating[rating.length -1].innerHTML=''
}


// if previous day rating is less then down arrow and vice versa
