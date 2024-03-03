function petsParking(input) {
  let days = Number(input[0]);
  let hours = Number(input[1]);

  let totalMoney = 0;
  for (let currDay = 1; currDay <= days; currDay++) {
    let dayTotalMoney = 0;
    for (let currHour = 1; currHour <= hours; currHour++) {
      let evenDay = currDay % 2 === 0;
      let evenHour = currHour % 2 === 0;

      if (evenDay && !evenHour) {
        dayTotalMoney += 2.5;
      } else if (!evenDay && evenHour) {
        dayTotalMoney += 1.25;
      } else {
        dayTotalMoney += 1;
      }
    }
    totalMoney += dayTotalMoney;
    console.log(`Day: ${currDay} - ${dayTotalMoney.toFixed(2)} leva`);
  }
  console.log(`Total: ${totalMoney.toFixed(2)} leva`);
}
petsParking(["2", "5"]);
