function integerAndFloat(num1, num2, num3) {
  let sum = num1 + num2 + num3;
  let intOrFloat = "";
  if (sum % 1 === 0) {
    intOrFloat = "Integer";
  } else {
    intOrFloat = "Float";
  }
  console.log(`${sum} - ${intOrFloat}`);
}
integerAndFloat(9, 100, 1.1);
