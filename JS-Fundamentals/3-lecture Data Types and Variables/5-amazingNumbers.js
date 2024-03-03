function amazingNumbers(num) {
  let numToStr = num.toString();
  let sum = 0;
  let flag = false;
  for (let i = 0; i < numToStr.length; i++) {
    sum += Number(numToStr[i]);
  }
  let sumToStr = sum.toString();
  for (let j = 0; j < sumToStr.length; j++) {
    if (Number(sumToStr[j]) === 9) {
      flag = true;
      break;
    }
  }
  if (flag) {
    console.log(`${num} Amazing? True`);
  } else {
    console.log(`${num} Amazing? False`);
  }
}

amazingNumbers(583472);
