function shopping(input) {
  let budget = Number(input[0]);
  let countVideoCards = Number(input[1]);
  let countProcessors = Number(input[2]);
  let countRams = Number(input[3]);

  let priceVideo = countVideoCards * 250;
  let priceProcessor = priceVideo * 0.35 * countProcessors;
  let priceRam = priceVideo * 0.1 * countRams;

  let finalSum = priceVideo + priceProcessor + priceRam;

  if (countVideoCards > countProcessors) {
    finalSum = finalSum * 0.85;
  }

  if (budget >= finalSum) {
    console.log(`You have ${(budget - finalSum).toFixed(2)} leva left!`);
  } else {
    console.log(
      `Not enough money! You need ${(finalSum - budget).toFixed(2)} leva more!`
    );
  }
}

shopping(["900", "2", "1", "3"]);
