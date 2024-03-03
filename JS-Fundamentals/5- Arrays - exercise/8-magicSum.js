function magicSum(array, magicNum) {
  for (let i = 0; i < array.length; i++) {
    let currFirstNum = Number(array[i]);
    for (let n = 1 + i; n < array.length; n++) {
      let currSecondNum = Number(array[n]);
      if (currFirstNum + currSecondNum === magicNum) {
        console.log(`${currFirstNum} ${currSecondNum}`);
      }
    }
  }
}
magicSum([1, 2, 3, 4, 5, 6], 6);
