function goldMine(input) {
  let index = 0;
  let numberOfLocations = Number(input[0]);
  let totalGold = 0;
  let averageGold = 0;

  for (let i = 0; i < numberOfLocations; i++) {
    let expectedGold = Number(input[1]);
    let miningDays = Number(input[2]);
    averageGold = totalGold / miningDays;

    for (let j = 0; j <= miningDays; j++) {
      let goldPerDay = input[j];
      totalGold += goldPerDay;
    }

    if (averageGold >= expectedGold) {
      console.log("Good job! Average gold per day:", averageGold.toFixed(2));
    } else {
      console.log(`You need ${expectedGold - totalGold.toFixed(2)} gold.`);
    }
    totalGold = 0;
  }
}
goldMine(["2", "10", "3", "10", "10", "11", "20", "2", "20", "10"]);
