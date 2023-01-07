function amazingNumbers(num) {
  let numToStr = num.toString();
  let sum = 0;
  let flag = false;
  for (let i = 0; i < numToStr.length; i++) {
    sum += Number(numToStr[i]);
  }
  let result = sum.toString().includes(9);

  console.log(result ? `${num} Amazing? True` : `${num} Amazing? False`);
}
amazingNumbers(583472);
