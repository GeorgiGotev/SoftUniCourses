function examPreparation(input) {
  let index = 0;
  let negativeGrades = Number(input[index++]);
  let command = input[index++];
  let negativeCounter = 0;
  let counterProblems = 0;
  let sumGrades = 0;
  let task = "";
  //let flag = false;

  while (command !== "Enough") {
    task = command;
    let grades = Number(input[index++]);

    if (grades <= 4) {
      negativeCounter++;
    }

    if (negativeCounter === negativeGrades) {
      // flag = true;
      console.log(`You need a break, ${negativeCounter} poor grades.`);
      //break;
      return;
    }
    sumGrades += grades;
    counterProblems++;
    command = input[index++];
  }

  let avg = sumGrades / counterProblems;
  // if(!flag){
  console.log(`Average score: ${avg.toFixed(2)}`);
  console.log(`Number of problems: ${counterProblems}`);
  console.log(`Last problem: ${task}`);
  //}
}

examPreparation(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);
