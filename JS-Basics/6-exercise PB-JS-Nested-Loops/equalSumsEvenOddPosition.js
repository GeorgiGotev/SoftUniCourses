function equalSumsEvenOddPosition(input) {
  let n1 = Number(input[0]);
  let n2 = Number(input[1]);

  result = "";

  for (let num = n1; num <= n2; num++) {
    let numToStr = num.toString();

    let sumOdd = 0;
    let sumEven = 0;

    for (let index = 0; index < numToStr.length; index++) {
      let currentDigit = Number(numToStr[index]);
      let position = index + 1;

      if (position % 2 === 0) {
        sumEven += currentDigit;
      } else {
        sumOdd += currentDigit;
      }
    }
    if (sumOdd === sumEven) {
      result += `${numToStr} `;
    }
  }
  console.log(result);
}
equalSumsEvenOddPosition(["100000", "100050"]);
