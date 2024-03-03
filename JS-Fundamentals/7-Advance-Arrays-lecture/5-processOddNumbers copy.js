function processOddNumbers(arrayOfNumbers) {
  let newArr = arrayOfNumbers
    .filter((el, i) => i % 2 !== 0)
    .map((x) => x * 2)
    .reverse()
    .join(" ");

  console.log(newArr);
}

processOddNumbers([10, 15, 20, 25]);
