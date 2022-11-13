function smallShop(input) {
  let type = input[0];
  let city = input[1];
  let num = Number(input[2]);

  switch (city) {
    case "Sofia":
      if (type === "coffee") {
        console.log(num * 0.5);
      } else if (type === "water") {
        console.log(num * 0.8);
      } else if (type === "beer") {
        console.log(num * 1.2);
      } else if (type === "sweets") {
        console.log(num * 1.45);
      } else if (type === "peanuts") {
        console.log(num * 1.6);
      }
      break;
    case "Plovdiv":
      if (type === "coffee") {
        console.log(num * 0.4);
      } else if (type === "water") {
        console.log(num * 0.7);
      } else if (type === "beer") {
        console.log(num * 1.15);
      } else if (type === "sweets") {
        console.log(num * 1.3);
      } else if (type === "peanuts") {
        console.log(num * 1.5);
      }
      break;
    case "Varna":
      if (type === "coffee") {
        console.log(num * 0.45);
      } else if (type === "water") {
        console.log(num * 0.7);
      } else if (type === "beer") {
        console.log(num * 1.1);
      } else if (type === "sweets") {
        console.log(num * 1.35);
      } else if (type === "peanuts") {
        console.log(num * 1.55);
      }
      break;
  }
}

smallShop(["coffee", "Varna", "2"]);
