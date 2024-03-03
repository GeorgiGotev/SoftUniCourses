function minNumber(input) {
  let index = 0;
  let command = input[index];

  let min = Number.MAX_SAFE_INTEGER;

  while (command !== "Stop") {
    let num = Number(command);
    if (min > num) {
      min = num;
    }
    command = input[index++];
  }
  console.log(min);
}
minNumber(["100", "99", "80", "70", "Stop"]);
