function printAndSum(num1, num2) {
  let result = 0;
  let output = "";
  for (let i = num1; i <= num2; i++) {
    let currNumber = i;
    result += currNumber;
    output += `${currNumber} `;
  }
  console.log(output.trim());
  console.log(`Sum: ${result}`);
}
printAndSum(5, 10);
