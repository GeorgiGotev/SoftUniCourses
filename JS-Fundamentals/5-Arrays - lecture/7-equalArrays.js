function equalArrays(arr1, arr2) {
  let sum1 = 0;
  let sum2 = 0;
  let counter = 0;

  for (i = 0; i < arr1.length; i++) {
    arr1[i] = Number(arr1[i]);
    sum1 += arr1[i];
  }

  for (i = 0; i < arr2.length; i++) {
    arr2[i] = Number(arr2[i]);
    sum2 += arr2[i];

    if (arr1[i] !== arr2[i]) {
      break;
    }
    counter++;
  }

  if (sum1 === sum2) {
    console.log(`Arrays are identical. Sum: ${sum1}`);
  } else {
    console.log(
      `Arrays are not identical. Found difference at ${counter} index`
    );
  }
}
equalArrays(["1", "2", "3", "4", "5"], ["1", "2", "4", "4", "5"]);
