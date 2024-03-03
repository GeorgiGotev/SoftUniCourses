function calculator(num1, num2, operator) {
  result = 0;
  switch (operator) {
    case "multiply":
      let multiply = (num1, num2) => num1 * num2;
      result += multiply(num1, num2);
      break;
    case "divide":
      let divide = (num1, num2) => num1 / num2;
      result += divide(num1, num2);
      break;
    case "add":
      let add = (num1, num2) => num1 + num2;
      result += add(num1, num2);
      break;
    case "subtract":
      let subtract = (num1, num2) => num1 - num2;
      result += subtract(num1, num2);
      break;
  }

  console.log(result);
}
calculator(10, 5, "multiply");
