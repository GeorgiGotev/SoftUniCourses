function specialNumbers2(input) {
  let specialNumber = Number(input[0]);
  let result = "";

  //1111-9999
  for (let i = 1; i <= 9; i++) {
    for (let j = 0; j <= 9; j++) {
      for (let k = 0; k <= 9; k++) {
        for (let l = 0; l <= 9; l++) {
          if (
            specialNumber % i === 0 &&
            specialNumber % j === 0 &&
            specialNumber % k === 0 &&
            specialNumber % l === 0
          ) {
            result += `${i}${j}${k}${l} `;
          }
        }
      }
    }
  }
  console.log(result);
}

specialNumbers2(["3"]);
