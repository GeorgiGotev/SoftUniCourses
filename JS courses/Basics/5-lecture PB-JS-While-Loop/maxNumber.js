function maxNumber(input) {
  let comand = input[0];
  let index = 0;

  let max = Number.MIN_SAFE_INTEGER;

  while (comand !== "Stop") {
    let num = Number(comand);
    if (num > max) {
      max = num;
    }
    comand = input[index];
    index++;
  }
  console.log(max);
}
maxNumber(["100", "99", "80", "70", "Stop"]);
