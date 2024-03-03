function addAndSubtract(num1, num2, num3) {
  function sum(num1, num2) {
    let sumOfNumbers = num1 + num2;
    return sumOfNumbers;
  }
  let sumOfTwo = sum(num1, num2);
  function subtract(sum, num3) {
    return sum - num3;
  }
  console.log(subtract(sumOfTwo, num3));
}
addAndSubtract(23, 6, 10);
