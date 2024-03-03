function accountBalance(input) {
  let index = 0;
  let command = input[index++];
  let total = 0;

  while (command !== "NoMoreMoney") {
    let currentIncr = Number(command);
    if (currentIncr < 0) {
      console.log(`Invalid operation!`);
      break;
    }
    total += currentIncr;

    console.log(`Increase: ${currentIncr.toFixed(2)}`);
    command = input[index++];
  }
  console.log(`Total: ${total.toFixed(2)}`);
}
accountBalance(["5.51", "69.42", "-100", "NoMoreMoney"]);
