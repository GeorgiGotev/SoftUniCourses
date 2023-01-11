function nonDecreasingSubset(array) {
  let newArr = [];
  newArr.push(array[0]);
  for (let i = 1; i < array.length; i++) {
    if (newArr[newArr.length - 1] <= array[i]) {
      newArr.push(array[i]);
    }
  }
  console.log(newArr.join(" "));
}
nonDecreasingSubset([20, 3, 2, 15, 6, 27, 28, 1]);
