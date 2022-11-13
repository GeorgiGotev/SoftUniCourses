function timePlus(input) {
  let hours = Number(input[0]);
  let minutes = Number(input[1]);
  let add = minutes + 15;
  let fullTime = hours * 60 + add;

  let finalHours = Math.floor(fullTime / 60);
  let finalMinutes = fullTime % 60;

  if (finalHours > 23) {
    finalHours = 0;
  }
  if (finalMinutes < 10) {
    console.log(`${finalHours}:0${finalMinutes}`);
  } else {
    console.log(`${finalHours}:${finalMinutes}`);
  }

 
}

timePlus(["1", "46"]);
