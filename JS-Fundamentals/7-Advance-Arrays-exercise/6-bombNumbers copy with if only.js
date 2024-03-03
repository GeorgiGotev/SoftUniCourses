function bombNumbers(arrayOfNumbers, bomb) {
  let bombNumber = bomb[0];
  let powerNumber = bomb[1];
  let result = 0;

  if (arrayOfNumbers.includes(bombNumber)) {
    let index = arrayOfNumbers.indexOf(bombNumber);
    let elementToRemove = powerNumber * 2 + 1;
    let startIndex = index - powerNumber;
    if (startIndex < 0) {
      elementToRemove += startIndex;
      startIndex = 0;
    }
    arrayOfNumbers.splice(startIndex, elementToRemove);
  }
  if (arrayOfNumbers.includes(bombNumber)) {
    let index = arrayOfNumbers.indexOf(bombNumber);
    let elementToRemove = powerNumber * 2 + 1;
    let startIndex = index - powerNumber;
    if (startIndex < 0) {
      elementToRemove += startIndex;
      startIndex = 0;
    }
    arrayOfNumbers.splice(startIndex, elementToRemove);
  }
  if (arrayOfNumbers.includes(bombNumber)) {
    let index = arrayOfNumbers.indexOf(bombNumber);
    let elementToRemove = powerNumber * 2 + 1;
    let startIndex = index - powerNumber;
    if (startIndex < 0) {
      elementToRemove += startIndex;
      startIndex = 0;
    }
    arrayOfNumbers.splice(startIndex, elementToRemove);
  }
  if (arrayOfNumbers.includes(bombNumber)) {
    let index = arrayOfNumbers.indexOf(bombNumber);
    let elementToRemove = powerNumber * 2 + 1;
    let startIndex = index - powerNumber;
    if (startIndex < 0) {
      elementToRemove += startIndex;
      startIndex = 0;
    }
    arrayOfNumbers.splice(startIndex, elementToRemove);
  }
  if (arrayOfNumbers.includes(bombNumber)) {
    let index = arrayOfNumbers.indexOf(bombNumber);
    let elementToRemove = powerNumber * 2 + 1;
    let startIndex = index - powerNumber;
    if (startIndex < 0) {
      elementToRemove += startIndex;
      startIndex = 0;
    }
    arrayOfNumbers.splice(startIndex, elementToRemove);
  }

  for (let el of arrayOfNumbers) {
    result += el;
  }

  console.log(result);
}
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
