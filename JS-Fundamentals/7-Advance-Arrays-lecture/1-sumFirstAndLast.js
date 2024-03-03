function sumFirstAndLast(arrayOfNumbers) {
  let firstNumber = Number(arrayOfNumbers.shift());
  let lastNumber = Number(arrayOfNumbers.pop());
  //   let sum = firstNumber + lastNumber;
  console.log(firstNumber + lastNumber);
}
sumFirstAndLast(["20", "30", "40"]);
