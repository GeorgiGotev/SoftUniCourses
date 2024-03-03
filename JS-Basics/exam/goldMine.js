function goldMine(input) {
  let index = 0;
  let numberOfLocations = Number(input[index++]);

  for (let i = 1; i <= numberOfLocations; i++) {
    let expectedGold = Number(input[index++]);
    let miningDays = Number(input[index++]);

    let totalGold = 0;
    for (let j = 1; j <= miningDays; j++) {
      let goldPerDay = Number(input[index++]);
      totalGold += goldPerDay;
    }
    let averageGold = totalGold / miningDays;
    if (averageGold >= expectedGold) {
      console.log(`Good job! Average gold per day: ${averageGold.toFixed(2)}`);
    } else {
      console.log(`You need ${(expectedGold - averageGold).toFixed(2)} gold.`);
    }
  }
}
goldMine(["2", "10", "3", "10", "10", "11", "20", "2", "20", "10"]);
