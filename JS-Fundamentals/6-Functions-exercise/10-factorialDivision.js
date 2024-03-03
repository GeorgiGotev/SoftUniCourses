function factorialDivision(num1, num2) {
  let firstResult = 0;
  let secondResult = 0;
  for (let i = num1 - 1; i >= 1; i--) {
    firstResult = num1 *= i;
  }
  for (let i = num2 - 1; i >= 1; i--) {
    secondResult = num2 *= i;
  }
  console.log((firstResult / secondResult).toFixed(2));
}
factorialDivision(5, 2);
