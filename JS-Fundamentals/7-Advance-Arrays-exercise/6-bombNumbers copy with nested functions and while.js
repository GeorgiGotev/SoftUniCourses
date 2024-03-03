function bombNumbers(arrayOfNumbers, bomb) {
  let bombNumber = bomb[0];

  let result = 0;

  while (arrayOfNumbers.includes(bombNumber)) {
    solve(arrayOfNumbers, bomb);
  }

  function solve(arrayOfNumbers, powerNumbers) {
    let bombNumber = powerNumbers[0];
    let powerNumber = powerNumbers[1];

    let index = arrayOfNumbers.indexOf(bombNumber);
    let elementToRemove = powerNumber * 2 + 1;
    let startIndex = index - powerNumber;
    if (startIndex < 0) {
      elementToRemove += startIndex;
      startIndex = 0;
    }
    return arrayOfNumbers.splice(startIndex, elementToRemove);
  }

  for (let el of arrayOfNumbers) {
    result += el;
  }
  console.log(result);
}
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
