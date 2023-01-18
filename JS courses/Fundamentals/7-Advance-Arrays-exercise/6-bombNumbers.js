function bombNumbers(arrayOfNumbers, bomb) {
  let bombNumber = bomb[0];
  let powerNumber = bomb[1];
  let result = 0;

  for (let i = 0; i < arrayOfNumbers.length; i++) {
    let currNum = arrayOfNumbers[i];

    if (currNum === bombNumber) {
      let index = arrayOfNumbers.indexOf(bombNumber);
      let elementToRemove = powerNumber * 2 + 1;
      let startIndex = index - powerNumber;
      if (startIndex < 0) {
        elementToRemove += startIndex;
        startIndex = 0;
      }
      arrayOfNumbers.splice(startIndex, elementToRemove);
      i = i - powerNumber - 1; //////////////// пояснение от къде продължава да върти след
      // проверката и изтритите елементи, защото презаписва масива и
      // трябва да се върне назад при продължаването на проверката от числа в масива.
      //i=5 - power=3 - 1 = 1(koeto e позицията в момента на новия масив,
      // при следващо завъртане продължава от 2-ра)
    }
  }

  for (let el of arrayOfNumbers) {
    result += el;
  }

  console.log(result);
}
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
