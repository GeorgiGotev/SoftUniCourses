function processOddNumbers(arrayOfNumbers) {
  let newArr = arrayOfNumbers.filter((el, i) => i % 2 !== 0).reverse();
  let result = [];
  for (let i = 0; i < newArr.length; i++) {
    result.push(newArr[i] * 2);
  }

  console.log(result.join(" "));
}

processOddNumbers([10, 15, 20, 25]);
