function triangleOfNumbers(num) {
  for (let i = 1; i <= num; i++) {
    let result = "";
    for (let j = i; j <= i; j++) {
      for (let k = 1; k <= i; k++) {
        result += `${j} `;
      }
    }
    console.log(result.trim());
  }
}
triangleOfNumbers(6);
