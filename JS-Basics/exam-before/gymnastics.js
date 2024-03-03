function gymnastics(input) {
  let country = input[0];
  let type = input[1];
  let difficultyPoints = 0;
  let performancePoints = 0;

  switch (country) {
    case "Russia":
      if (type === "ribbon") {
        difficultyPoints += 9.1;
        performancePoints += 9.4;
      }
      if (type === "hoop") {
        difficultyPoints += 9.3;
        performancePoints += 9.8;
      }
      if (type === "rope") {
        difficultyPoints += 9.6;
        performancePoints += 9;
      }
      break;
    case "Bulgaria":
      if (type === "ribbon") {
        difficultyPoints += 9.6;
        performancePoints += 9.4;
      }
      if (type === "hoop") {
        difficultyPoints += 9.55;
        performancePoints += 9.75;
      }
      if (type === "rope") {
        difficultyPoints += 9.5;
        performancePoints += 9.4;
      }
      break;
    case "Italy":
      if (type === "ribbon") {
        difficultyPoints += 9.2;
        performancePoints += 9.5;
      }
      if (type === "hoop") {
        difficultyPoints += 9.45;
        performancePoints += 9.35;
      }
      if (type === "rope") {
        difficultyPoints += 9.15;
        performancePoints += 9.7;
      }
      break;
  }
  let maxPoints = 20;
  let sumPoints = difficultyPoints + performancePoints;
  let percent = ((maxPoints - sumPoints) / maxPoints) * 100;

  console.log(`The team of ${country} get ${sumPoints.toFixed(3)} on ${type}.`);
  console.log(`${percent.toFixed(2)}%`);
}

gymnastics(["Bulgaria", "ribbon"]);
