function journey(input) {
  let budg = Number(input[0]);
  let season = input[1];
  let sum = 0;
  let place = "";
  let type = "";

  switch (season) {
    case "summer":
      if (budg <= 100) {
        sum = budg * 0.3;
      } else if (budg > 100 && budg <= 1000) {
        sum = budg * 0.4;
      } else if (budg > 1000) {
        sum = budg * 0.9;
      }
      type = "Camp";
      break;
    case "winter":
      if (budg <= 100) {
        sum = budg * 0.7;
      } else if (budg > 100 && budg <= 1000) {
        sum = budg * 0.8;
      } else if (budg > 1000) {
        sum = budg * 0.9;
      }
      type = "Hotel";
      break;
  }
  if (budg <= 100) {
    place = "Bulgaria";
  } else if (budg > 100 && budg <= 1000) {
    place = "Balkans";
  } else if (budg > 1000) {
    place = "Europe";
    type = "Hotel";
  }
  console.log(`Somewhere in ${place}`);
  console.log(`${type} - ${sum.toFixed(2)}`);
}
journey(["50", "summer"]);
