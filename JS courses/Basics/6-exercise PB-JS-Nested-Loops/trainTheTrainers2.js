function trainTheTrainers(input) {
  let index = 0;
  let trainers = Number(input[index++]);
  let command = input[index];
  let counter = 0;
  let allGrades = 0;

  while (command !== "Finish") {
    let exercise = command;
    let sumGrade = 0;

    for (let i = 1; i <= trainers; i++) {
      index++;
      let grade = Number(input[index]);
      sumGrade += grade;
      allGrades += grade;
      counter++;
    }

    console.log(`${exercise} - ${(sumGrade / trainers).toFixed(2)}.`);
    index++;
    command = input[index];
  }
  console.log(
    `Student's final assessment is ${(allGrades / counter).toFixed(2)}.`
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
