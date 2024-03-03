function palindromeIntegers(arrayOfNumbers) {
  arrayOfNumbersLength = arrayOfNumbers.length;

  for (let i = 0; i < arrayOfNumbersLength; i++) {
    let curNum = arrayOfNumbers[i].toString();
    let currChar = curNum.split("").reverse().join("");
    // let newArr = curNum.split("");
    // let reverse = newArr.reverse();
    // let reversedString = reverse.join("");

    if (currChar === curNum) {
      console.log("true");
    } else {
      console.log("false");
    }
  }
}
palindromeIntegers([123, 323, 421, 121]);
