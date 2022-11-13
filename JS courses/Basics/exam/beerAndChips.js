function beerAndChips(input) {
  let name = input[0];
  let budg = Number(input[1]);
  let numBeers = Number(input[2]);
  let numChips = Number(input[3]);

  let allBeerPrice = numBeers * 1.2;
  let allChipsPrice = Math.ceil(numChips * (allBeerPrice * 0.45));
  let sum = allBeerPrice + allChipsPrice;
  if (budg >= sum) {
    console.log(
      `${name} bought a snack and has ${(budg - sum).toFixed(2)} leva left.`
    );
  } else if (sum > budg) {
    console.log(`${name} needs ${(sum - budg).toFixed(2)} more leva!`);
  }
}
beerAndChips(["George", "10", "2", "3"]);
