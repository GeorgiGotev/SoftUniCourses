function schoolGrades(input) {
  let studentsObj = {};
  for (let line of input) {
    let currLine = line.split(" ");
    let name = currLine.shift();
    let grades = currLine.map(Number);

    if (!studentsObj[name]) {
      studentsObj[name] = grades;
    } else {
      let setOfGrades = studentsObj[name];
      for (const grade of grades) {
        setOfGrades.push(grade);
        studentsObj[name] = setOfGrades;
      }
    }
  }
  let sorted = Object.entries(studentsObj).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  for (let [student, avgGrade] of sorted) {
    let sum = 0;
    for (const grade of avgGrade) {
      sum += grade;
    }
    console.log(`${student}: ${(sum / avgGrade.length).toFixed(2)}`);
  }
}

schoolGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
