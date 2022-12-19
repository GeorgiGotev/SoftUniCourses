function traveling(input) {
  let index = 0;
  let destination = input[index++];
  let moneyForDestination = Number(input[index++]);
  let moneyForEachDestination = 0;

  while (destination !== "End") {
    let savedMoney = Number(input[index++]);
    moneyForEachDestination += savedMoney;
    while (moneyForEachDestination >= moneyForDestination) {
      console.log(`Going to ${destination}!`);

      destination = input[index++];
      moneyForDestination = Number(input[index++]);
      moneyForEachDestination = 0;
    }
  }
}

traveling([
  "Greece",
  "1000",
  "200",
  "200",
  "300",
  "100",
  "150",
  "240",
  "Spain",
  "1200",
  "300",
  "500",
  "193",
  "423",
  "End",
]);
