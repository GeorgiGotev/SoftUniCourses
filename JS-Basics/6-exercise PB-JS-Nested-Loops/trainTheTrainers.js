function trainTheTrainers(input) {
  let n = Number(input[0]);
  let index = 1;
  let comand = input[index];
  let counter = 0;
  let sumGrades = 0;

  while (comand !== "Finish") {
    counter++;
    let name = comand;
    let tempSumGrade = 0;

    for (let i = 1; i <= n; i++) {
      index++;
      let grade = Number(input[index]);
      tempSumGrade += grade;
    }
    let AVG = tempSumGrade / n;
    sumGrades += AVG;
    console.log(`${name} - ${AVG.toFixed(2)}.`);
    index++;
    comand = input[index];
  }
  console.log(
    `Student's final assessment is ${(sumGrades / counter).toFixed(2)}.`
  );
}

trainTheTrainers([
  "3",
  "Arrays",
  "4.53",
  "5.23",
  "5.00",
  "Lists",
  "5.83",
  "6.00",
  "5.42",
  "Finish",
]);
