// create array of dates on dashboard by exporting the function and passing through controller back to ejs so I can style it in tailwind
const past7Days = [...Array(7).keys()].map(index => {
  // add mongodb first oldest date inside new date
    const date = new Date(); //  get most recent from mongoose and limit to 7. put in then use the oldest out of that as the new date start from
 
    date.setDate(date.getDate() - index);
   
    return `${date.getDate()}/${date.getMonth() + 1}`;
  });

  
  
  module.exports = {
    // reverse the dates to show past to present and export ready for import into a controller for reuse
    past7Days: past7Days.reverse()
   
  }


