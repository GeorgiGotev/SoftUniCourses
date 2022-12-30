function sumEvenNumber(numbers) {
  let sum = 0;
  for (let currNum of numbers) {
    currNum = Number(currNum);
    if (currNum % 2 == 0) {
      sum += currNum;
    }
  }
  console.log(sum);
}
sumEvenNumber(["1", "2", "3", "4", "5", "6"]);
