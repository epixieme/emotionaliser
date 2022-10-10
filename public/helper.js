// create array of dates on dashboard by exporting the function and passing through controller back to ejs so I can style it in tailwind
const past7Days = [...Array(7).keys()].reverse().map(index => {
    const date = new Date();
    date.setDate(date.getDate() + index);
    return `${date.getDate()}/${date.getMonth()+ 1}`;
  });

  
  
  module.exports = {
    // reverse the dates to show past to present and export ready for import into a controller for reuse
    past7Days: past7Days.reverse(),
   
  }


