function solve(matrix) {
  let targetSum = matrix[0].reduce((a, b) => a + b, 0);

  for (let i = 0; i < matrix[0].length; i++) {
    let colSum = 0;
    let rowSum = matrix[i].reduce((a, b) => a + b, 0);

    for (let j = 0; j < matrix.length; j++) {
      colSum += matrix[j][i];
    }
    if (colSum !== targetSum || rowSum !== targetSum) {
      return false;
    }
  }
  return true;
}

console.log(
  solve([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5],
  ])
);
