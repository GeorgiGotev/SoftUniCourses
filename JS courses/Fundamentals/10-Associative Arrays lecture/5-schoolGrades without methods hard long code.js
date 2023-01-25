function schoolGrades(input) {
  let studentsObj = {};
  let personGradesCounter = {};
  for (let line of input) {
    let currLine = line.split(" ");
    let name = currLine.shift();
    let grades = currLine.map(Number);
    let sum = 0;
    let counter = 0;

    for (let current of grades) {
      counter++;
      sum += current;
    }
    if (!personGradesCounter[name]) {
      personGradesCounter[name] = counter;
    } else {
      personGradesCounter[name] += counter;
    }

    if (!studentsObj[name]) {
      studentsObj[name] = sum;
    } else {
      let oldSum = studentsObj[name];
      let newAvg = sum + oldSum;
      studentsObj[name] = newAvg;
    }
  }

  let sorted = Object.entries(studentsObj).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  for (let [student, avgGrade] of sorted) {
    console.log(
      `${student}: ${(avgGrade / personGradesCounter[student]).toFixed(2)}`
    );
  }
}
schoolGrades(["Lilly 4 6 6 5", "Tim 2", "Tammy 2 4 3", "Tim 3", "Tim 2"]);
