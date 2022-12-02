function vacation(input) {
  let index = 0;
  let allVacationMoney = Number(input[index++]);
  let myMoney = Number(input[index++]);
  let spendCounter = 0;
  let counter = 0;
  let flag = true;

  while (myMoney < allVacationMoney) {
    counter++;
    let command = input[index++];
    let currMoney = Number(input[index++]);

    switch (command) {
      case "spend":
        myMoney -= currMoney;
        spendCounter++;
        break;
      case "save":
        myMoney += currMoney;
        spendCounter = 0;
        break;
    }
    if (myMoney < 0) {
      myMoney = 0;
    }
    if (spendCounter === 5) {
      flag = false;
      if (!flag) {
        console.log(`You can't save the money.`);
        console.log(counter);
        break;
      }
    }
  }
  if (flag) {
    console.log(`You saved the money for ${counter} days.`);
  }
}
vacation(["2000", "1000", "spend", "1200", "save", "2000"]);
