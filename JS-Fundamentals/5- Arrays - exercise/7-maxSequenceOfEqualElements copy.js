function maxSequenceOfEqualElements(array) {
  let resultArray = [];
  for (let i = 0; i < array.length; i++) {
    let newArray = [];
    for (let j = i; j < array.length; j++) {
      if (array[i] === array[j]) {
        newArray.push(array[j]);
      } else {
        break;
      }
      if (newArray.length > resultArray.length) {
        resultArray = newArray;
      }
    }
  }
  console.log(resultArray.join(" "));
}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
