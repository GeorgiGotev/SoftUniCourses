function sortNumbers(num1, num2, num3) {
  let array = [];
  array.push(num1, num2, num3);
  let sorted = array.sort((a, b) => b - a);
  console.log(sorted.join("\n"));
}
sortNumbers(-2, 1, 3);
