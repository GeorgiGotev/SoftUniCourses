function condenseArrayToNumber(arrayOfNumbers) {
  let result = [];
  for (let numbers of arrayOfNumbers) {
    result.push(numbers);
  }
  while (result.length > 1) {
    let tempArray = [];
    for (let i = 0; i < result.length - 1; i++) {
      tempArray[i] = result[i] + result[i + 1];
    }
    result = tempArray;
  }

  console.log(result.join());
}
condenseArrayToNumber([5, 0, 4, 1, 2]);
