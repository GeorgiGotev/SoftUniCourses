function accountBalance(input) {
  let index = 0;
  let comand = input[index];
  let total = 0;

  while (comand !== "NoMoreMoney") {
    let currentIncr = Number(input[index]);

    index++;
    comand = input[index];
    if (currentIncr < 0) {
      console.log(`Invalid operation!`);
      break;
    } else {
      total += currentIncr;
      console.log(`Increase: ${currentIncr.toFixed(2)}`);
    }
  }
  console.log(`Total: ${total.toFixed(2)}`);
}
accountBalance(["5.51", "69.42", "-100", "NoMoreMoney"]);
