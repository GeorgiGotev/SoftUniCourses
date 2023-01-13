function orders(type, quantity) {
  result = 0;
  switch (type) {
    case "coffee":
      result += quantity * 1.5;
      break;
    case "water":
      result += quantity * 1;
      break;
    case "coke":
      result += quantity * 1.4;
      break;
    case "snacks":
      result += quantity * 2;
      break;
  }
  return result.toFixed(2);
}
orders("water", 5);
