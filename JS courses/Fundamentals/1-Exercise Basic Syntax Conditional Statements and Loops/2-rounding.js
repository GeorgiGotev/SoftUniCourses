function rounding(num, num2) {
  if (num2 > 15) {
    num2 = 15;
  }
  num = num.toFixed(num2);
  console.log(parseFloat(num));
}
rounding(3.144432, 3);
