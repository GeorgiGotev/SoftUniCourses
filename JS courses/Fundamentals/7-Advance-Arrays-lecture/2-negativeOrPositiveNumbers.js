function negativeOrPositiveNumbers(arrayOfNumbers) {
  let sortedArray = [];
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    let currNumber = Number(arrayOfNumbers[i]);
    if (currNumber < 0) {
      sortedArray.unshift(currNumber);
    } else {
      sortedArray.push(currNumber);
    }
  }
  console.log(sortedArray.join("\n"));
}
negativeOrPositiveNumbers(["7", "-2", "8", "9"]);
