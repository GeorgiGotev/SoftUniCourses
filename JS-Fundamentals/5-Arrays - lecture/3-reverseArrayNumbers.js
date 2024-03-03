function reverseArrayNumbers(n, arrayNumbers) {
  let newArray = [];
  let result = "";

  for (let i = 0; i < n; i++) {
    newArray[i] = arrayNumbers[i];
  }

  for (let j = newArray.length - 1; j >= 0; j--) {
    let currNum = newArray[j];
    result += currNum;

    if (j > 0) {
      result += " ";
    }
  }

  console.log(result);
}

reverseArrayNumbers(3, [10, 20, 30, 40, 50]);
