function binaryToDecimal(binaryNum) {
  let currStringL = binaryNum.length - 1;

  let newNum = 0;

  for (let i = 0; i <= binaryNum.length - 1; i++) {
    let currNum = Number(binaryNum[i]);
    newNum += currNum * Math.pow(2, currStringL);
    currStringL--;
  }
  console.log(newNum);
}
binaryToDecimal("00001001");
