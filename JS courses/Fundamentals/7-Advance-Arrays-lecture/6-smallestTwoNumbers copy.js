function smallestTwoNumbers(arrayOfNumbers) {
  let newArr = arrayOfNumbers
    .sort((a, b) => a - b)
    .slice(0, 2)
    .join(" ");
  console.log(newArr);
}
smallestTwoNumbers([30, 15, 50, 5]);
