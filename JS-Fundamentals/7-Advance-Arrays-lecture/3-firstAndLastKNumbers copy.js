function firstAndLastKNumbers(arrayOfNumbers) {
  let counter = arrayOfNumbers.shift();

  firstNumbers = arrayOfNumbers.slice(0, counter).join(" ");
  lastNumbers = arrayOfNumbers.slice(arrayOfNumbers.length - counter).join(" ");

  console.log(firstNumbers);
  console.log(lastNumbers);
}
firstAndLastKNumbers([2, 7, 8, 9]);
