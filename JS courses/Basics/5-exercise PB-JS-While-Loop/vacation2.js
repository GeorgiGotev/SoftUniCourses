function vacation(input) {
  let index = 0;
  let allVacationMoney = Number(input[index++]);
  let myMoney = Number(input[index++]);

  let spendCounter = 0;
  let counter = 0;

  while (myMoney < allVacationMoney) {
    counter++;

    let command = input[index++];
    let currMoney = Number(input[index++]);

    if (command === "spend") {
      spendCounter++;
      myMoney -= currMoney;

      if (myMoney <= 0) {
        myMoney = 0;
      }

      if (spendCounter === 5) {
        console.log(`You can't save the money.`);
        console.log(counter);
        break;
      }
    }
    if (command === "save") {
      myMoney += currMoney;
      spendCounter = 0;
    }
  }

  if (myMoney >= allVacationMoney) {
    console.log(`You saved the money for ${counter} days.`);
  }
}

vacation([
  "110",
  "60",
  "spend",
  "10",
  "spend",
  "10",
  "spend",
  "10",
  "spend",
  "10",
  "spend",
  "10",
]);
