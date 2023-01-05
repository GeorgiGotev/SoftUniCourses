function addAndSubtract(numbers) {
  let sumOfOriginalArr = 0;
  let sumOfNewArr = 0;
  let newArr = [];
  let indexL = numbers.length;
  for (let i = 0; i < indexL; i++) {
    sumOfOriginalArr += numbers[i];
    if (numbers[i] % 2 === 0) {
      numbers[i] += i;
      sumOfNewArr += numbers[i];
    } else {
      numbers[i] -= i;
      sumOfNewArr += numbers[i];
    }
    newArr.push(numbers[i]);
  }
  console.log(newArr);
  console.log(sumOfOriginalArr);
  console.log(sumOfNewArr);
}
addAndSubtract([5, 15, 23, 56, 35]);


console.log();
