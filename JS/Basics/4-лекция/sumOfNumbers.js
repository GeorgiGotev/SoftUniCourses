function sumOfNumbers(input) {
  let n = input[0];

  let sum = 0;

  for (let i = 0; i < n.length; i++) {
    let digit = Number(n[i]);
    sum += digit;
  }
  console.log(`The sum of the digits is:${sum}`);
}
sumOfNumbers(["1234"]);
