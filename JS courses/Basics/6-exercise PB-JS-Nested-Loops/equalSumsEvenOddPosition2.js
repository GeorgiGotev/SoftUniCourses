function equalSumsEvenOddPosition2(input) {
  let firstNum = Number(input[0]);
  let lastNum = Number(input[1]);
  let print = "";

  for (let i = firstNum; i <= lastNum; i++) {
    let result = "";
    result += i;
    let sumOdd = 0;
    let sumEven = 0;
    for (let j = 0; j < result.length; j++) {
      let currDigit = Number(result.charAt(j));
      let obvOne = j + 1;
      if (obvOne % 2 === 0) {
        sumEven += currDigit;
      } else {
        sumOdd += currDigit;
      }
    }
    if (sumOdd === sumEven) {
      print += `${i} `;
    }
  }
  console.log(print);
}
equalSumsEvenOddPosition2(["100000", "100050"]);
