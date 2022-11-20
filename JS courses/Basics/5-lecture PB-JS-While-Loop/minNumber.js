function minNumber(input) {
  let index = 0;
  let comand = input[index];

  let min = Number.MAX_SAFE_INTEGER;

  while (comand !== "Stop") {
    let num = Number(comand);
    if (num < min) {
      min = num;
    }
    index++;
    comand = input[index];
  }
  console.log(min);
}
minNumber(["100", "99", "80", "70", "Stop"]);
