function greaterNumber(imput) {
    let firstNumber = Number (imput[0]);
    let secondNumber = Number (imput[1]);
    if (firstNumber > secondNumber) {
      console.log(firstNumber);
    }else console.log(secondNumber);
  }
  
  greaterNumber (["5", "3"]);