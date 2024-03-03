function calculator(num1, num2, operator) {
  switch (operator) {
    case "multiply":
      let multiply = (num1, num2) => num1 * num2;
      return multiply(num1, num2);
    case "divide":
      let divide = (num1, num2) => num1 / num2;
      return divide(num1, num2);
    case "add":
      let add = (num1, num2) => num1 + num2;
      return add(num1, num2);
    case "subtract":
      let subtract = (num1, num2) => num1 - num2;
      return subtract(num1, num2);
  }
}
console.log(calculator(10, 5, "multiply"));
