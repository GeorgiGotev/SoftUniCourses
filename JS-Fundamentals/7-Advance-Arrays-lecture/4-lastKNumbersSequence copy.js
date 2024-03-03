function lastKNumbersSequence(numbersLength, numberCounter) {
  let numbersSequence = [1];
  for (let i = 1; i < numbersLength; i++) {
    let sum = 0;
    let sliced = numbersSequence.slice(-numberCounter);
    for (let i = 0; i < sliced.length; i++) {
      sum += sliced[i];
    }
    numbersSequence.push(sum);
  }
  console.log(numbersSequence.join(" "));
}
lastKNumbersSequence(6, 3);
