function addAndSubtract(numbers) {
  let sumOfOriginalArr = 0;
  let sumOfNewArr = 0;
  let indexL = numbers.length;
  for (let i = 0; i < indexL; i++) {
    sumOfOriginalArr += numbers[i];
    if (numbers[i] % 2 === 0) {
      numbers[i] += i;
    } else {
      numbers[i] -= i;
    }
    sumOfNewArr += numbers[i];
  }
  console.log(numbers);
  console.log(sumOfOriginalArr);
  console.log(sumOfNewArr);
}
addAndSubtract([5, 15, 23, 56, 35]);
