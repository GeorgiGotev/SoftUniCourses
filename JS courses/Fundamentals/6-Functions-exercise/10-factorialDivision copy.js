function factorialDivision(firstNum, secondNum) {
  console.log((factorial(firstNum) / factorial(secondNum)).toFixed(2));

  function factorial(num) {
    for (let i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  }
}

factorialDivision(5, 2);
