function examTime(input) {
  let examHours = Number(input[0]);
  let examMinutes = Number(input[1]);
  let arrivingTimeHours = Number(input[2]);
  let arrivingTimeMinutes = Number(input[3]);

  let examTotalMinutes = examHours * 60 + examMinutes;
  let arrivingTotalMinutes = arrivingTimeHours * 60 + arrivingTimeMinutes;
  let diff = examTotalMinutes - arrivingTotalMinutes;

  let hours = 0;
  let minutes = 0;

  if (examTotalMinutes < arrivingTotalMinutes) {
    console.log("Late");
  } else if (examTotalMinutes - arrivingTotalMinutes <= 30) {
    console.log("On time");
  } else {
    console.log("Early");
  }
  if (diff < 60 && diff >= 1) {
    console.log(`${diff} minutes before the start`);
  } else if (diff >= 60) {
    hours = Math.floor(diff / 60);
    minutes = diff % 60;
    if (minutes < 10) {
      console.log(`${hours}:0${minutes} hours before the start`);
    } else {
      console.log(`${hours}:${minutes} hours before the start`);
    }
  } else if (diff < 0 && diff >= -60) {
    diff = Math.abs(diff);
    console.log(`${diff} minutes after the start`);
  } else if (diff <= -60) {
    diff = Math.abs(diff);
    hours = Math.floor(diff / 60);
    minutes = diff % 60;
    if (minutes < 10) {
      console.log(`${hours}:0${minutes} hours after the start`);
    } else {
      console.log(`${hours}:${minutes} hours after the start`);
    }
  }
}
