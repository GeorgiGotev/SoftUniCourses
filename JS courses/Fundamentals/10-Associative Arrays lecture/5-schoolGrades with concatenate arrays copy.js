function schoolGrades(input) {
  let studentsObj = {};
  for (let line of input) {
    let currLine = line.split(" ");
    let name = currLine.shift();
    let grades = currLine.map((x) => Number(x));

    if (!studentsObj[name]) {
      studentsObj[name] = [];
    }
    studentsObj[name] = studentsObj[name].concat(grades);
  }

  let sorted = Object.entries(studentsObj).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  for (const [name, grade] of sorted) {
    let sum = 0;
    for (const line of grade) {
      sum += line;
    }

    console.log(`${name}: ${(sum / grade.length).toFixed(2)}`);
  }
}
schoolGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
