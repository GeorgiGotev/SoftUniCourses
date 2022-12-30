function reverseArrayNumbers(n, arrayNumbers) {
  let newArray = [];

  for (let i = 0; i < n; i++) {
    newArray[n - i - 1] = arrayNumbers[i];
  }

  console.log(newArray.join(" "));
}

reverseArrayNumbers(3, [10, 20, 30, 40, 50]);
