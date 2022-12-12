function cleverLily(input) {
  let old = Number(input[0]);
  let washerPrice = Number(input[1]);
  let toysPrice = Number(input[2]);
  let money = 0;
  let birthDayPresent = 1;

  for (let i = 1; i <= old; i++) {
    if (i % 2 !== 0) {
      money += toysPrice;
    } else {
      money += birthDayPresent * 10;
      birthDayPresent++;
      money--;
    }
  }

  if (money >= washerPrice) {
    console.log(`Yes! ${(money - washerPrice).toFixed(2)}`);
  } else {
    console.log(`No! ${(washerPrice - money).toFixed(2)}`);
  }
}
cleverLily(["21", "1570.98", "3"]);
