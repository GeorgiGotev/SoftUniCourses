function maxSequenceOfEqualElements(array) {
  let resultArray = [];
  for (let i = 0; i < array.length; i++) {
    let firstNum = Number(array[i]);
    let newArray = [];
    for (let j = i + 1; j < array.length; j++) {
      let firstPossiblePair = Number(array[j]);
      if (firstNum !== firstPossiblePair) {
        break;
      }
      if (firstNum === firstPossiblePair) {
        newArray[0] = firstNum;
        newArray.push(firstPossiblePair);
        if (newArray.length > resultArray.length) {
          resultArray = newArray;
        }
      }
    }
  }
  console.log(resultArray.join(" "));
}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
