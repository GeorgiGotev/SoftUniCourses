function sumFirstAndLast(numbers) {
  let firstNum = numbers[0];
  let lastNum = numbers[numbers.length - 1];

  let sum = firstNum + lastNum;

  console.log(sum);
}
sumFirstAndLast([20, 30, 40]);
