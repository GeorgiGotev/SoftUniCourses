function footballSouvenirs(input) {
  let team = input[0];
  let souvenirs = input[1];
  let num = Number(input[2]);
  let sum = 0;

  switch (team) {
    case "Argentina":
      if (souvenirs === "flags") {
        sum = num * 3.25;
        console.log(
          `Pepi bought ${num} ${souvenirs} of ${team} for ${sum.toFixed(2)} lv.`
        );
      } else if (souvenirs === "caps") {
        sum = num * 7.25;
        console.log(
          `Pepi bought ${num} ${souvenirs} of ${team} for ${sum.toFixed(2)} lv.`
        );
      } else if (souvenirs === "posters") {
        sum = num * 5.1;
        console.log(
          `Pepi bought ${num} ${souvenirs} of ${team} for ${sum.toFixed(2)} lv.`
        );
      } else if (souvenirs === "stickers") {
        sum = num * 1.25;
        console.log(
          `Pepi bought ${num} ${souvenirs} of ${team} for ${sum.toFixed(2)} lv.`
        );
      } else {
        console.log("Invalid stock!");
      }
      break;
    case "Brazil":
      if (souvenirs === "flags") {
        sum = num * 4.2;
        console.log(
          `Pepi bought ${num} ${souvenirs} of ${team} for ${sum.toFixed(2)} lv.`
        );
      } else if (souvenirs === "caps") {
        sum = num * 8.5;
        console.log(
          `Pepi bought ${num} ${souvenirs} of ${team} for ${sum.toFixed(2)} lv.`
        );
      } else if (souvenirs === "posters") {
        sum = num * 5.35;
        console.log(
          `Pepi bought ${num} ${souvenirs} of ${team} for ${sum.toFixed(2)} lv.`
        );
      } else if (souvenirs === "stickers") {
        sum = num * 1.2;
        console.log(
          `Pepi bought ${num} ${souvenirs} of ${team} for ${sum.toFixed(2)} lv.`
        );
      } else {
        console.log("Invalid stock!");
      }
      break;
    case "Croatia":
      if (souvenirs === "flags") {
        sum = num * 2.75;
        console.log(
          `Pepi bought ${num} ${souvenirs} of ${team} for ${sum.toFixed(2)} lv.`
        );
      } else if (souvenirs === "caps") {
        sum = num * 6.9;
        console.log(
          `Pepi bought ${num} ${souvenirs} of ${team} for ${sum.toFixed(2)} lv.`
        );
      } else if (souvenirs === "posters") {
        sum = num * 4.95;
        console.log(
          `Pepi bought ${num} ${souvenirs} of ${team} for ${sum.toFixed(2)} lv.`
        );
      } else if (souvenirs === "stickers") {
        sum = num * 1.1;
        console.log(
          `Pepi bought ${num} ${souvenirs} of ${team} for ${sum.toFixed(2)} lv.`
        );
      } else {
        console.log("Invalid stock!");
      }
      break;
    case "Denmark":
      if (souvenirs === "flags") {
        sum = num * 3.1;
        console.log(
          `Pepi bought ${num} ${souvenirs} of ${team} for ${sum.toFixed(2)} lv.`
        );
      } else if (souvenirs === "caps") {
        sum = num * 6.5;
        console.log(
          `Pepi bought ${num} ${souvenirs} of ${team} for ${sum.toFixed(2)} lv.`
        );
      } else if (souvenirs === "posters") {
        sum = num * 4.8;
        console.log(
          `Pepi bought ${num} ${souvenirs} of ${team} for ${sum.toFixed(2)} lv.`
        );
      } else if (souvenirs === "stickers") {
        sum = num * 0.9;
        console.log(
          `Pepi bought ${num} ${souvenirs} of ${team} for ${sum.toFixed(2)} lv.`
        );
      } else {
        console.log("Invalid stock!");
      }
      break;
    default:
      console.log("Invalid country!");
  }
}
footballSouvenirs(["Brazil", "stickers", "5"]);
