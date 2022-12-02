function graduation(input) {
  let index = 0;
  let name = input[index++];
  let i = 1;
  let sumGrades = 0;
  let negative = 0;
  let flag = false;

  while (i <= 12) {
    currentGrade = Number(input[index++]);

    if (currentGrade < 4) {
      negative++;
      if (negative === 2) {
        flag = true;
        break;
      }
      continue;
    }
    sumGrades += currentGrade;
    i++;
  }
  if (flag) {
    console.log(`${name} has been excluded at ${i} grade`);
  } else {
    console.log(
      `${name} graduated. Average grade: ${(sumGrades / 12).toFixed(2)}`
    );
  }
}

graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);
