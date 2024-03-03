function lastKNumbersSequence(numbersLength, numberCounter) {
  let numbersSequence = [1];

  for (let i = 1; i < numbersLength; i++) {
    let index = Math.max(numbersSequence.length - numberCounter, 0);
    let sliced = numbersSequence.slice(index);

    let sum = 0;

    for (let el of sliced) {
      sum += el;
    }

    numbersSequence.push(sum);
  }

  console.log(numbersSequence.join(" "));
}
lastKNumbersSequence(6, 3);
