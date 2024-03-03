function condenseArrayToNumber(arrayOfNumbers) {
  let result = [];
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    result[i] = arrayOfNumbers[i];
  }
  while (result.length > 1) {
    let tempArray = [];
    for (let i = 0; i < result.length - 1; i++) {
      tempArray[i] = result[i] + result[i + 1];
    }
    result = tempArray;
  }
  let output = "";
  output += result;

  console.log(result.toString());
}
condenseArrayToNumber([5, 0, 4, 1, 2]);
