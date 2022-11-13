function godzillaVsKong(input) {
  let buget = Number(input[0]);
  let countStatists = Number(input[1]);
  let priceForItems = Number(input[2]);
  let priceForDecoration = buget * 0.1;
  let priceForWearingStatists=0;
  

  if (countStatists > 150) {
    priceForWearingStatists = (countStatists * priceForItems) * 0.9;
  }else priceForWearingStatists = countStatists *priceForItems;

  allSum = priceForDecoration+priceForWearingStatists;

  if (allSum > buget) {
    console.log("Not enough money!");
    console.log(`Wingard needs ${(allSum - buget).toFixed(2)} leva more.`);
  } else if(allSum<=buget){
    console.log("Action!");
    console.log(
      `Wingard starts filming with ${(buget - allSum).toFixed(2)} leva left.`
    );
  }
}

godzillaVsKong(["15437.62", "186", "57.99"]);
