function fishingBoat(input) {
  let budg = Number(input[0]);
  let season = input[1];
  let fisherman = Number(input[2]);
  let boatPrice = 0;

  switch (season) {
    case "Spring":
      boatPrice = 3000;
      if (fisherman <= 6) {
        boatPrice = boatPrice - boatPrice * 0.1;
      } else if (fisherman > 6 && fisherman <= 11) {
        boatPrice = boatPrice - boatPrice * 0.15;
      } else if (fisherman >= 12) {
        boatPrice = boatPrice - boatPrice * 0.25;
      }
      if (fisherman % 2 === 0) {
        boatPrice = boatPrice - boatPrice * 0.05;
      }
      break;

    case "Summer":
      boatPrice = 4200;
      if (fisherman <= 6) {
        boatPrice = boatPrice - boatPrice * 0.1;
      } else if (fisherman > 6 && fisherman <= 11) {
        boatPrice = boatPrice - boatPrice * 0.15;
      } else if (fisherman >= 12) {
        boatPrice = boatPrice - boatPrice * 0.25;
      }
      if (fisherman % 2 === 0) {
        boatPrice = boatPrice - boatPrice * 0.05;
      }
      break;

    case "Autumn":
      boatPrice = 4200;
      if (fisherman <= 6) {
        boatPrice = boatPrice - boatPrice * 0.1;
      } else if (fisherman > 6 && fisherman <= 11) {
        boatPrice = boatPrice - boatPrice * 0.15;
      } else if (fisherman >= 12) {
        boatPrice = boatPrice - boatPrice * 0.25;
      }
      break;

    case "Winter":
      boatPrice = 2600;
      if (fisherman <= 6) {
        boatPrice = boatPrice - boatPrice * 0.1;
      } else if (fisherman > 6 && fisherman <= 11) {
        boatPrice = boatPrice - boatPrice * 0.15;
      } else if (fisherman >= 12) {
        boatPrice = boatPrice - boatPrice * 0.25;
      }
      if (fisherman % 2 === 0) {
        boatPrice = boatPrice - boatPrice * 0.05;
      }
      break;
  }
  if (budg >= boatPrice) {
    console.log(`Yes! You have ${(budg - boatPrice).toFixed(2)} leva left.`);
  } else {
    console.log(
      `Not enough money! You need ${(boatPrice - budg).toFixed(2)} leva.`
    );
  }
}
