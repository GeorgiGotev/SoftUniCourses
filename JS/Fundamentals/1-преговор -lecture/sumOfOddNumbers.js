function sumOfOddNumbers(num) {
  let oddSum = 0;
  let counter = 0;

  for (let i = 1; i <= 100; i += 2) {
    counter++;
    console.log(i);
    oddSum += i;

    if (counter === num) {
      console.log(`Sum: ${oddSum}`);
      break;
    }
  }
}

sumOfOddNumbers(5);
