function solve(matrix) {
    let sum1 = 0;
    let sum2 = 0;

    let counter = 0;
    for (let j = 0; j < matrix.length; j++) {
        sum1 += matrix[j][counter];
        sum2 += matrix[j][matrix.length - 1 - counter];
        counter++
    }

    console.log(`${sum1} ${sum2}`);
}

solve([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]
);