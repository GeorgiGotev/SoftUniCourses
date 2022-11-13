function toyShop(input) {
  let vacantionPrice = Number(input[0]);
  let countPuzz = Number(input[1]);
  let countDolls = Number(input[2]);
  let countBears = Number(input[3]);
  let countMinions = Number(input[4]);
  let countTrucks = Number(input[5]);

  let pricePuzz = countPuzz * 2.6;
  let priceDolls = countDolls * 3;
  let priceBears = countBears * 4.1;
  let priceMinions = countMinions * 8.2;
  let priceTrucks = countTrucks * 2;

  let fullPrice =
    priceBears + priceDolls + priceMinions + pricePuzz + priceTrucks;

  let summCounter =
    countBears + countDolls + countMinions + countPuzz + countTrucks;

  if (summCounter >= 50) {
    fullPrice = fullPrice - fullPrice * 0.25;
  }
  fullPrice = fullPrice - fullPrice * 0.1;

  if (fullPrice >= vacantionPrice) {
    console.log(`Yes! ${(fullPrice - vacantionPrice).toFixed(2)} lv left.`);
  } else {
    console.log(
      `Not enough money! ${(vacantionPrice - fullPrice).toFixed(2)} lv needed.`);
  }
}

toyShop(["40.8", "20", "25", "30", "50", "10"]);
