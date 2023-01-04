function sortNumbers(num1, num2, num3) {
  let firstPosition = 0;
  let secondPosition = 0;
  let lastPosition = 0;

  if (num1 >= num2 && num1 >= num3) {
    firstPosition = num1;
    if (num2 > num3) {
      secondPosition = num2;
      lastPosition = num3;
    } else {
      lastPosition = num2;
      secondPosition = num3;
    }
  }
  if (num2 >= num1 && num2 >= num3) {
    firstPosition = num2;
    if (num1 > num3) {
      secondPosition = num1;
      lastPosition = num3;
    } else {
      lastPosition = num1;
      secondPosition = num3;
    }
  } else if (num3 >= num1 && num3 > num2) {
    firstPosition = num3;
    if (num1 > num2) {
      secondPosition = num1;
      lastPosition = num2;
    } else {
      lastPosition = num1;
      secondPosition = num2;
    }
  }

  console.log(firstPosition);
  console.log(secondPosition);
  console.log(lastPosition);
}
sortNumbers(0, 0, 2);
