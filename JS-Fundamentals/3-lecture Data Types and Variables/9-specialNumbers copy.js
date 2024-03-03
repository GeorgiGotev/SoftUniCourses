function specialNumbers(num) {
  for (let i = 1; i <= num; i++) {
    let sum = 0;
    sum += i % 10;
    sum += Math.trunc(i / 10);
    if (sum === 5 || sum === 7 || sum === 11) {
      console.log(`${i} -> True`);
    } else {
      console.log(`${i} -> False`);
    }
  }
}
specialNumbers(15);
