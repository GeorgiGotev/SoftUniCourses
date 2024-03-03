function reverseArrayNumbers(n, arrayNumbers) {
  let newArray = [];
  for (let i = n - 1; i >= 0; i--) {
    newArray.push(arrayNumbers[i]);
  }
  console.log(newArray.join(" "));
}

reverseArrayNumbers(3, [10, 20, 30, 40, 50]);
