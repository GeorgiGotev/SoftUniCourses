function dayOfWeek(currDay) {
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  if (currDay < 1 || currDay > 7) {
    console.log("Invalid day!");
  } else {
    console.log(days[currDay - 1]);
  }
}

dayOfWeek([1]);
