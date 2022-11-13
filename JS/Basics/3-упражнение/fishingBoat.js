function fishingBoat(input) {
  let budg = Number(input[0]);
  let season = input[1];
  let fisherman = Number(input[2]);
  let boatPrice = 0;

  switch (season) {
    case "Spring":
      boatPrice = 3000;
      break;
    case "Summer":
    case "Autumn":
      boatPrice = 4200;
      break;
    case "Winter":
      boatPrice = 2600;
      break;
  }
  if (fisherman <= 6) {
    boatPrice = boatPrice * 0.9;
  } else if (fisherman > 6 && fisherman <= 11) {
    boatPrice = boatPrice * 0.85;
  } else if (fisherman >= 12) {
    boatPrice = boatPrice * 0.75;
  }
  if (fisherman % 2 === 0 && season !== "Autumn") {
    boatPrice = boatPrice * 0.95;
  }

  if (budg >= boatPrice) {
    console.log(`Yes! You have ${(budg - boatPrice).toFixed(2)} leva left.`);
  } else {
    console.log(
      `Not enough money! You need ${(boatPrice - budg).toFixed(2)} leva.`
    );
  }
}
fishingBoat(["3000", "Summer", "11"]);
