function moon(input) {
  let averageSpeed = Number(input[0]);
  let fuelPer100 = Number(input[1]);
  let allDistance = 384400 * 2;
  let allTimeDistance = allDistance / averageSpeed;
  let allFuel = (fuelPer100 * allDistance) / 100;

  console.log(Math.ceil(allTimeDistance) + 3);
  console.log(allFuel);
}
moon(["10000", "5"]);
