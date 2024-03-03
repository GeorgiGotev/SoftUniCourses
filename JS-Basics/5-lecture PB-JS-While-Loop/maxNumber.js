function maxNumber(input) {
  let index = 0;
  let command = input[index];

  let max = Number.MIN_SAFE_INTEGER;

  while (command !== "Stop") {
    let num = Number(command);
    if (max < num) {
      max = num;
    }
    command = input[index++];
  }
  console.log(max);
}
maxNumber(["100", "99", "80", "70", "Stop"]);
