function solve(num1, num2, num3) {
  let firstPosition = 0;
  let secondPosition = 0;
  let thirdPosition = 0;

  let waitingPosition = 0;

  if (num1 > firstPosition) {
    firstPosition = num1;
    secondPosition = num2;
    thirdPosition = num3;
  }
  if (num2 > firstPosition) {
    firstPosition = num2;
    secondPosition = num1;
    thirdPosition = num3;
  }
  if (num3 > firstPosition) {
    firstPosition = num3;
    secondPosition = num2;
    thirdPosition = num1;
  }

  if (thirdPosition > secondPosition) {
    waitingPosition = secondPosition;
    secondPosition = thirdPosition;
    thirdPosition = waitingPosition;
  }

  console.log(firstPosition);
  console.log(secondPosition);
  console.log(thirdPosition);
}
solve(-2, 1, 3);
