function equalSums(array) {
  let ourIndexNum = "no";

  for (let index = 0; index < array.length; index++) {
    let leftSum = 0;
    let rightSum = 0;

    for (let l = 0; l < index; l++) {
      leftSum += array[l];
    }

    for (let r = index + 1; r < array.length; r++) {
      rightSum += array[r];
    }
    if (rightSum === leftSum) {
      ourIndexNum = index;
    }
  }
  console.log(ourIndexNum);
}
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
