function searchForANumber(arrayOfNumbers, actionArray) {
  let result = [];
  let counter = 0;
  let [pushNumber, delateNumbers, searchNumber] = actionArray;
  for (let i = 0; i < pushNumber; i++) {
    result.push(arrayOfNumbers[i]);
  }
  result.splice(0, delateNumbers);
  for (let el of result) {
    if (searchNumber === el) {
      counter++;
    }
  }
  console.log(`Number ${searchNumber} occurs ${counter} times.`);
}
searchForANumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);
