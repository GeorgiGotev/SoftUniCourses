function specialNumbers(num) {
  for (let i = 1; i <= num; i++) {
    let first = 0;
    let last = 0;
    let sum = 0;
    if (i < 10) {
      if (i % 5 === 0 || i % 7 === 0) {
        console.log(`${i} -> True`);
      } else {
        console.log(`${i} -> False`);
      }
    } else {
      last += i % 10;
      first = Math.trunc(i / 10);
      sum = last + first;
      if (sum === 5 || sum === 7 || sum === 11) {
        console.log(`${i} -> True`);
      } else {
        console.log(`${i} -> False`);
      }
    }
  }
}
specialNumbers(15);
