function palindromeIntegers(arrayOfNumbers) {
  arrayOfNumbersLength = arrayOfNumbers.length;

  for (let i = 0; i < arrayOfNumbersLength; i++) {
    let currNum = arrayOfNumbers[i].toString();
    let currChar = "";
    for (let j = currNum.length - 1; j >= 0; j--) {
      currChar += currNum[j];
    }
    if (currChar === currNum) {
      console.log("true");
    } else {
      console.log("false");
    }
  }
}
palindromeIntegers([123, 323, 421, 121]);
