function fruitShop(input) {
  let product = input[0];
  let dayOfWeek = input[1];
  let num = Number(input[2]);

  switch (dayOfWeek) {
    case "Monday":
      if (product === "banana") {
        console.log((num * 2.5).toFixed(2));
      } else if (product === "apple") {
        console.log((num * 1.2).toFixed(2));
      } else if (product === "orange") {
        console.log((num * 0.85).toFixed(2));
      } else if (product === "grapefruit") {
        console.log((num * 1.45).toFixed(2));
      } else if (product === "kiwi") {
        console.log((num * 2.7).toFixed(2));
      } else if (product === "pineapple") {
        console.log((num * 5.5).toFixed(2));
      } else if (product === "grapes") {
        console.log((num * 3.85).toFixed(2));
      } else {
        console.log("error");
      }
      break;
    case "Tuesday":
      if (product === "banana") {
        console.log((num * 2.5).toFixed(2));
      } else if (product === "apple") {
        console.log((num * 1.2).toFixed(2));
      } else if (product === "orange") {
        console.log((num * 0.85).toFixed(2));
      } else if (product === "grapefruit") {
        console.log((num * 1.45).toFixed(2));
      } else if (product === "kiwi") {
        console.log((num * 2.7).toFixed(2));
      } else if (product === "pineapple") {
        console.log((num * 5.5).toFixed(2));
      } else if (product === "grapes") {
        console.log((num * 3.85).toFixed(2));
      } else {
        console.log("error");
      }
      break;
    case "Wednesday":
      if (product === "banana") {
        console.log((num * 2.5).toFixed(2));
      } else if (product === "apple") {
        console.log((num * 1.2).toFixed(2));
      } else if (product === "orange") {
        console.log((num * 0.85).toFixed(2));
      } else if (product === "grapefruit") {
        console.log((num * 1.45).toFixed(2));
      } else if (product === "kiwi") {
        console.log((num * 2.7).toFixed(2));
      } else if (product === "pineapple") {
        console.log((num * 5.5).toFixed(2));
      } else if (product === "grapes") {
        console.log((num * 3.85).toFixed(2));
      } else {
        console.log("error");
      }
      break;
    case "Thursday":
      if (product === "banana") {
        console.log((num * 2.5).toFixed(2));
      } else if (product === "apple") {
        console.log((num * 1.2).toFixed(2));
      } else if (product === "orange") {
        console.log((num * 0.85).toFixed(2));
      } else if (product === "grapefruit") {
        console.log((num * 1.45).toFixed(2));
      } else if (product === "kiwi") {
        console.log((num * 2.7).toFixed(2));
      } else if (product === "pineapple") {
        console.log((num * 5.5).toFixed(2));
      } else if (product === "grapes") {
        console.log((num * 3.85).toFixed(2));
      } else {
        console.log("error");
      }
      break;
    case "Friday":
      if (product === "banana") {
        console.log((num * 2.5).toFixed(2));
      } else if (product === "apple") {
        console.log((num * 1.2).toFixed(2));
      } else if (product === "orange") {
        console.log((num * 0.85).toFixed(2));
      } else if (product === "grapefruit") {
        console.log((num * 1.45).toFixed(2));
      } else if (product === "kiwi") {
        console.log((num * 2.7).toFixed(2));
      } else if (product === "pineapple") {
        console.log((num * 5.5).toFixed(2));
      } else if (product === "grapes") {
        console.log((num * 3.85).toFixed(2));
      } else {
        console.log("error");
      }
      break;
    case "Saturday":
      if (product === "banana") {
        console.log((num * 2.7).toFixed(2));
      } else if (product === "apple") {
        console.log((num * 1.25).toFixed(2));
      } else if (product === "orange") {
        console.log((num * 0.9).toFixed(2));
      } else if (product === "grapefruit") {
        console.log((num * 1.6).toFixed(2));
      } else if (product === "kiwi") {
        console.log((num * 3).toFixed(2));
      } else if (product === "pineapple") {
        console.log((num * 5.6).toFixed(2));
      } else if (product === "grapes") {
        console.log((num * 4.2).toFixed(2));
      } else {
        console.log("error");
      }
      break;
    case "Sunday":
      if (product === "banana") {
        console.log((num * 2.7).toFixed(2));
      } else if (product === "apple") {
        console.log((num * 1.25).toFixed(2));
      } else if (product === "orange") {
        console.log((num * 0.9).toFixed(2));
      } else if (product === "grapefruit") {
        console.log((num * 1.6).toFixed(2));
      } else if (product === "kiwi") {
        console.log((num * 3).toFixed(2));
      } else if (product === "pineapple") {
        console.log((num * 5.6).toFixed(2));
      } else if (product === "grapes") {
        console.log((num * 4.2).toFixed(2));
      } else {
        console.log("error");
      }
      break;
    default:
      console.log("error");
  }
}
fruitShop(["apple", "Tuesday", "2"]);
