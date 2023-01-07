function bitcoinMining(miningDays) {
  let bitCoinValue = 11949.16;
  let goldValue = 67.51;
  let totalMoney = 0;
  let bitCoinCounter = 0;
  let dayCounter = 0;
  let firstBitcoin = false;
  let dayOfFirst = 0;
  let firstCoin = 0;

  for (let i = 1; i <= miningDays.length; i++) {
    dayCounter++;
    let currDay = i;
    let possibleCoins = 0;
    let currDayMined = miningDays[i - 1] * goldValue;

    if (i % 3 === 0) {
      totalMoney += currDayMined * 0.7;
    } else {
      totalMoney += currDayMined;
    }

    if (totalMoney >= bitCoinValue) {
      dayOfFirst++;
      possibleCoins = Math.floor(totalMoney / bitCoinValue);
      totalMoney -= possibleCoins * bitCoinValue;
      bitCoinCounter += possibleCoins;
    }
    if (dayOfFirst === 1) {
      firstBitcoin = true;
      firstCoin = currDay;
    }
  }

  console.log(`Bought bitcoins: ${bitCoinCounter}`);
  if (firstBitcoin) {
    console.log(`Day of the first purchased bitcoin: ${firstCoin}`);
  }
  console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}
bitcoinMining([3124.15, 504.212, 2511.124]);
