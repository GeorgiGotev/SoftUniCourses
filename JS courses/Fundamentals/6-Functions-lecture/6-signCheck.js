function signCheck(num1, num2, num3) {
  let double = function (num1, num2) {
    let newNum = num1 * num2;
    return newNum;
  };
  let triple = function (num, num3) {
    let result = Math.sign(num * num3);
    if (result === 1) {
      console.log("Positive");
    } else {
      console.log("Negative");
    }
  };
  triple(double(num1, num2), num3);
  double(num1, num2);
}
signCheck(-5, -12, -15);
