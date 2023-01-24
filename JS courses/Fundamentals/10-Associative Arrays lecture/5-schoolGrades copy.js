function schoolGrades(input) {
  let studentsObj = {};
  for (let line of input) {
    let currLine = line.split(" ");
    let name = currLine.shift();
    let grades = currLine.map(Number);
    let sum = 0;
    let counter = 1;
    let avg = 0;
    for (let current of grades) {
      sum += current;
    }
    if (!studentsObj[name]) {
      avg = sum / grades.length;
    } else {
      counter++;
      let currGrades = sum / grades.length;
      avg = (studentsObj[name] + currGrades) / counter;
    }
    studentsObj[name] = avg;
  }
  let sorted = Object.entries(studentsObj).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  for (let entry of sorted) {
    console.log(`${entry[0]}: ${entry[1].toFixed(2)}`);
  }
}
schoolGrades(["Lilly 4 6 6 5", "Tim 6 6", "Tim 6 6", "Tammy 2 4 3", "Tim 6 6"]);
