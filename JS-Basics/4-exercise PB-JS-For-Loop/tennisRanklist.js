function tennisRankList(input) {
  let numOfTourneys = Number(input[0]);
  let startPoints = Number(input[1]);
  let winPoints = 0;
  let wins = 0;

  for (let i = 0; i <= numOfTourneys; i++) {
    let finalResult = input[i + 2];
    switch (finalResult) {
      case "W":
        winPoints += 2000;
        wins++;
        break;
      case "F":
        winPoints += 1200;
        break;
      case "SF":
        winPoints += 720;
        break;
    }
  }
  console.log(`Final points: ${winPoints + startPoints}`);
  console.log(`Average points: ${Math.floor(winPoints / numOfTourneys)}`);
  console.log(`${((wins / numOfTourneys) * 100).toFixed(2)}%`);
}

tennisRankList(["5", "1400", "F", "SF", "W", "W", "SF"]);
