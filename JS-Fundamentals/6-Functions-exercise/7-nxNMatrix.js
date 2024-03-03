function nxNMatrix(number) {
  for (let i = 1; i <= number; i++) {
    result = "";
    for (let j = 1; j <= number; j++) {
      result += `${number} `;
    }
    console.log(result.trim());
  }
}
nxNMatrix(7);
