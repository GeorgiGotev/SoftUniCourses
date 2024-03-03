function signCheck(num1, num2, num3) {
  function double(firstNum, secondNum) {
    return firstNum * secondNum;
  }
  let resultOfDouble = double(num1, num2);

  function triple(firstResult, lastNum) {
    let result = Math.sign(firstResult * lastNum);
    if (result === 1) {
      console.log("Positive");
    } else {
      console.log("Negative");
    }
  }
  triple(resultOfDouble, num3);
}

signCheck(-5, -12, -15);
