function FishTank(imput) {
  let lendth = Number(imput[0]);
  let width = Number(imput[1]);
  let high = Number(imput[2]);
  let percent = Number(imput[3]);
  let percentFormula = percent / 100;
  let tankCapacity = lendth * width * high;
  let capacityLittres = tankCapacity * 0.001;
  let allLittres = capacityLittres * (1 - percentFormula);

  console.log(allLittres);
}

FishTank(["85 ", "75 ", "47 ", "17 "]);
