function firstAndLastKNumbers(arrayOfNumbers) {
  let counter = arrayOfNumbers.shift();
  let firstNumbers = [];
  let lastNumbers = [];
  for (let i = 0; i < counter; i++) {
    firstNumbers.push(arrayOfNumbers[i]);
  }

  lastNumbers = arrayOfNumbers.slice(arrayOfNumbers.length - counter).join(" ");

  console.log(firstNumbers.join(" "));
  console.log(lastNumbers);
}
firstAndLastKNumbers([2, 7, 8, 9]);
