function multiplicationTable(num) {
  for (let i = 1; i <= 10; i++) {
    let sum = i * num;
    console.log(`${num} X ${i} = ${sum}`);
  }
}
multiplicationTable(5);
