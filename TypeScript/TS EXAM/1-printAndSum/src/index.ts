function printAndSum(start: number, end: number): void {
  let sum: number = 0;
  let allNumbers: number[] = [];
  for (let i = start; i <= end; i++) {
    sum += i;
    allNumbers.push(i);
  }

  console.log(allNumbers.join(" "));
  console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);
