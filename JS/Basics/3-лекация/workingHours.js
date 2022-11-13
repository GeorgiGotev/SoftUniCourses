function workingHours(input) {
  let hours = Number(input[0]);
  let curDay = input[1];

  switch (curDay) {
    case "Monday":
      if (hours >= 10 && hours <= 18) {
        console.log("open");
      } else {
        console.log("closed");
      }
      break;
    case "Tuesday":
      if (hours >= 10 && hours <= 18) {
        console.log("open");
      } else {
        console.log("closed");
      }
      break;
    case "Wednesday":
      if (hours >= 10 && hours <= 18) {
        console.log("open");
      } else {
        console.log("closed");
      }
      break;
    case "Thursday":
      if (hours >= 10 && hours <= 18) {
        console.log("open");
      } else {
        console.log("closed");
      }
      break;
    case "Friday":
      if (hours >= 10 && hours <= 18) {
        console.log("open");
      } else {
        console.log("closed");
      }
      break;
    case "Saturday":
      if (hours >= 10 && hours <= 18) {
        console.log("open");
      } else {
        console.log("closed");
      }
      break;
    default:
      console.log("closed");
      break;
  }
}
workingHours(["11", "Monday"]);
