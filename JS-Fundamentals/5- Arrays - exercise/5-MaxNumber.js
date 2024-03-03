function maxNumber(array) {
  let newNumbers = [];
  for (let index = 0; index < array.length; index++) {
    let flag = true;
    for (let r = 1; r < array.length; r++) {
      if (array[index] <= array[r + index]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      newNumbers.push(array[index]);
    }
  }

  console.log(newNumbers.join(" "));
}
maxNumber([27, 19, 42, 2, 13, 45, 48]);
