function oscars(input) {
  let name = input[0];
  let academyPoints = Number(input[1]);
  let numberOfActs = Number(input[2]);

  for (let i = 0; i < numberOfActs * 2; i += 2) {
    let currAct = input[i + 3];
    let currPoint = Number(input[i + 4]);

    academyPoints += (currAct.length * currPoint) / 2;
    if (academyPoints > 1250.5) {
      console.log(
        `Congratulations, ${name} got a nominee for leading role with ${academyPoints.toFixed(
          1
        )}!`
      );
      break;
    }
  }

  if (academyPoints <= 1250.5) {
    console.log(
      `Sorry, ${name} you need ${(1250.5 - academyPoints).toFixed(1)} more!`
    );
  }
}
oscars([
  "Zahari Baharov",
  "205",
  "4",
  "Johnny Depp",
  "45",
  "Will Smith",
  "29",
  "Jet Lee",
  "10",
  "Matthew Mcconaughey",
  "39",
]);
