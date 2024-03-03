function chessBoard(number) {
  console.log(`<div class="chessboard">`);
  let table1 = 0;
  for (let i = 1; i <= number; i++) {
    console.log(`  <div>`);
    for (let j = 1; j <= number; j++) {
      table1++;
      if (table1 % 2 === 0) {
        console.log(`    <span class="white"></span>`);
      } else {
        console.log(`    <span class="black"></span>`);
      }
      if (j === number) {
        if (j % 2 === 0) {
          table1++;
        }
      }
    }
    console.log(`  </div>`);
  }
  console.log(`</div>`);
}
chessBoard(6);
