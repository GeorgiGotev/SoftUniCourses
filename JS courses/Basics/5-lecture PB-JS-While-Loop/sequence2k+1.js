function sequence2kPlus1(input) {
  let num = Number(input[0]);
  let currentDigit = 1;

  while (currentDigit <= num) {
    console.log(currentDigit);
    currentDigit = currentDigit * 2 + 1;
  }
}
sequence2kPlus1(["31"]);
