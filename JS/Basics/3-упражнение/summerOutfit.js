function summerOutfit(input) {
  let degreeses = Number(input[0]);
  let partOfDay = input[1];
  let outfit = "";
  let shoes = "";

  switch (partOfDay) {
    case "Morning":
      if (degreeses >= 10 && degreeses <= 18) {
        outfit = "Sweatshirt";
        shoes = "Sneakers";
      } else if (degreeses > 18 && degreeses <= 24) {
        outfit = "Shirt";
        shoes = "Moccasins";
      } else if (degreeses >= 25) {
        outfit = "T-Shirt";
        shoes = "Sandals";
      }
      break;
    case "Afternoon":
      if (degreeses >= 10 && degreeses <= 18) {
        outfit = "Shirt";
        shoes = "Moccasins";
      } else if (degreeses > 18 && degreeses <= 24) {
        outfit = "T-Shirt";
        shoes = "Sandals";
      } else if (degreeses >= 25) {
        outfit = "Swim Suit";
        shoes = "Barefoot";
      }
      break;
    case "Evening":
      if (degreeses >= 10 && degreeses <= 18) {
        outfit = "Shirt";
        shoes = "Moccasins";
      } else if (degreeses > 18 && degreeses <= 24) {
        outfit = "Shirt";
        shoes = "Moccasins";
      } else if (degreeses >= 25) {
        outfit = "Shirt";
        shoes = "Moccasins";
      }
      break;
  }
  console.log(`It's ${degreeses} degrees, get your ${outfit} and ${shoes}.`);
}
summerOutfit(["16", "Morning"]);
