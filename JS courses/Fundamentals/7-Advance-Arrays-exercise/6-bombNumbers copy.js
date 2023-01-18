function bombNumbers(arrayOfNumbers, bomb) {
  let [bombNumber, power] = bomb;

  for (let i = 0; i < arrayOfNumbers.length; i++) {
    let currNum = arrayOfNumbers[i];

    if (currNum === bombNumber) {
      let startIndex = Math.max(0, i - power);
      let countToEnd = power * 2 + 1;

      arrayOfNumbers.splice(startIndex, countToEnd);
      i = i - power - 1;
    }
  }

  let finalResult = arrayOfNumbers.reduce((a, b) => {
    return a + b;
  }, 0);

  console.log(finalResult);
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
