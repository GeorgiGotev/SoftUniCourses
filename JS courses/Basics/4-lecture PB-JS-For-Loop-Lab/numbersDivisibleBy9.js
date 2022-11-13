function numbersDivisibleBy9(input) {
  let num1 = Number(input[0]);
  let num2 = Number(input[1]);
  let sum = 0;
  let output = "";

  for (let i = num1; i <= num2; i++) {
    if (i % 9 === 0) {
      let curr = i;
      sum += curr;
      output += i + "\n";
    }
  }
  console.log(`The sum: ${sum}`);
  console.log(output);
}
numbersDivisibleBy9(["100", "200"]);
