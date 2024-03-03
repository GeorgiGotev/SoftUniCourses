function operationsBetweenNumbers(input) {
  let n1 = Number(input[0]);
  let n2 = Number(input[1]);
  let operator = input[2];
  let sum = 0;
  let evenOrOdd = "";

  if (operator === "+") {
    sum = n1 + n2;
    if (sum % 2 === 0) {
      evenOrOdd = "even";
    } else {
      evenOrOdd = "odd";
    }
    console.log(`${n1} ${operator} ${n2} = ${sum} - ${evenOrOdd}`);
  }
  if (operator === "-") {
    sum = n1 - n2;
    if (sum % 2 === 0) {
      evenOrOdd = "even";
    } else {
      evenOrOdd = "odd";
    }
    console.log(`${n1} ${operator} ${n2} = ${sum} - ${evenOrOdd}`);
  }
  if (operator === "*") {
    sum = n1 * n2;
    if (sum % 2 === 0) {
      evenOrOdd = "even";
    } else {
      evenOrOdd = "odd";
    }
    console.log(`${n1} ${operator} ${n2} = ${sum} - ${evenOrOdd}`);
  }
  if (operator === "/") {
    sum = n1 / n2;
    if (n2 === 0) {
      console.log(`Cannot divide ${n1} by zero`);
    } else {
      console.log(`${n1} ${operator} ${n2} = ${sum.toFixed(2)}`);
    }
  }
  if (operator === "%") {
    sum = n1 % n2;
    if (n2 === 0) {
      console.log(`Cannot divide ${n1} by zero`);
    } else {
      console.log(`${n1} ${operator} ${n2} = ${sum}`);
    }
  }
}
operationsBetweenNumbers(["112", "0", "/"]);
