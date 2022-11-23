function sumNumbers(input) {
  let index = 0;
  let firstNum = Number(input[index++]);
  let sum = 0;

  while (sum < firstNum) {
    let currentDigit = Number(input[index++]);
    sum += currentDigit;
  }

  console.log(sum);
}
sumNumbers(["100", "10", "20", "30", "40"]);
