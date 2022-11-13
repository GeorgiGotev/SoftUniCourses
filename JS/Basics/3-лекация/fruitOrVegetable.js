function fruitOrVegetable(input) {
  let product = input[0];

  switch (product) {
    case "banana":
    case "kiwi":
    case "apple":
    case "cherry":
    case "lemon":
    case "grapes":
      console.log("fruit");
      break;
    case "tomato":
    case "cucumber":
    case "pepper":
    case "carrot":
      console.log("vegetable");
      break;
    default:
      console.log("unknown");
  }
}

fruitOrVegetable(["banana"]);
