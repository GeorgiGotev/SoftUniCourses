function traveling(input) {
  let index = 0;
  let destination = input[index++];
  let moneyForDestination = Number(input[index++]);
  let moneyForEachDestination = 0;

  while (destination !== "End") {
    for (let i = index; i <= input.length; i++) {
      let savedMoney = Number(input[i]);
      index++;
      moneyForEachDestination += savedMoney;
      if (moneyForEachDestination >= moneyForDestination) {
        console.log(`Going to ${destination}!`);
        break;
      }
    }
    destination = input[index++];
    moneyForDestination = Number(input[index++]);
    moneyForEachDestination = 0;
  }
}

traveling([
  "France",
  "2000",
  "300",
  "300",
  "200",
  "400",
  "190",
  "258",
  "360",
  "Portugal",
  "1450",
  "400",
  "400",
  "200",
  "300",
  "300",
  "Egypt",
  "1900",
  "1000",
  "280",
  "300",
  "500",
  "End",
]);
