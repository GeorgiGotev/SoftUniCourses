function evenAndOddSubtraction(numbers) {
  let result = 0;
  for (let number of numbers) {
    if (number % 2 == 0) {
      result += number;
    } else {
      result -= number;
    }
  }
  console.log(result);
}
evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);
