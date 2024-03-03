function oddAndEvenSum(number) {
  let NumberToStr = number.toString();
  let length = NumberToStr.length;
  let oddSum = 0;
  let evenSum = 0;

  for (let i = 0; i < length; i++) {
    currentNumber = Number(NumberToStr[i]);
    if (currentNumber % 2 === 0) {
      evenSum += currentNumber;
    } else {
      oddSum += currentNumber;
    }
  }
  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(1000435);
