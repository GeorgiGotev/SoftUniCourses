function biggestNum(num1, num2, num3) {
  //let min = Number.MIN_SAFE_INTEGER;
  //let max = Number.MAX_SAFE_INTEGER;
  let result = 0;
  if (num1 >= num2 && num1 >= num3) {
    result = num1;
  }
  if (num2 >= num1 && num2 >= num3) {
    result = num2;
  }
  if (num3 >= num2 && num3 >= num1) {
    result = num3;
  }
  console.log(result);
}
biggestNum(-8, 7, 3);
