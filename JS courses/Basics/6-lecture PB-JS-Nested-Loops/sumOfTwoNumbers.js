function sumOfTwoNumbers(input) {
  let firstNum = Number(input[0]);
  let lastNum = Number(input[1]);
  let magicNum = Number(input[2]);
  let numOfCombinations = 0;
  let flag = false;

  for (let i = firstNum; i <= lastNum; i++) {
    for (let j = firstNum; j <= lastNum; j++) {
      numOfCombinations++;

      let sum = i + j;
      if (i + j === magicNum) {
        flag = true;
        console.log(
          `Combination N:${numOfCombinations} (${i} + ${j} = ${sum})`
        );
        break;
      }
    }
    if (flag === true) {
      break;
    }
  }
  if (!flag)
    console.log(
      `${numOfCombinations} combinations - neither equals ${magicNum}`
    );
}
sumOfTwoNumbers(["1", "10", "5"]);
