function equalArrays(arr1, arr2) {
  let sum = 0;
  let flag = true;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      flag = false;
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      break;
    } else {
      sum += Number(arr1[i]);
    }
  }
  if (flag) {
    console.log(`Arrays are identical. Sum: ${sum}`);
  }
}
equalArrays(["1", "2", "3", "4", "5"], ["1", "2", "4", "4", "5"]);
