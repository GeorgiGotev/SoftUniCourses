function spiceMustFlow(firstNum) {
  let sum = 0;
  let daysCounter = 0;
  for (let i = firstNum; firstNum >= 100; firstNum -= 10) {
    daysCounter++;
    sum += firstNum - 26;
  }

  if (firstNum < 100 && sum > 26) {
    sum -= 26;
  }
  console.log(daysCounter);
  console.log(sum);
}
spiceMustFlow(450);
