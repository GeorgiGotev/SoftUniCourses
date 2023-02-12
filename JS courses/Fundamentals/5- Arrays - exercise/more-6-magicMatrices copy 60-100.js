function isMagicMatrix(matrix) {
    let flag = true;
    let sumCol = 0;
    let first = matrix[0].reduce((a, b) => a + b);

    for (let i = 0; i < matrix.length; i++) {
        sumCol = 0;
        let row = matrix[i].reduce((a, b) => a + b);
        for (let c = 0; c < matrix[i].length; c++) {
            let num = matrix[c][i];
            sumCol += num;
        }
        if (sumCol !== first && sumCol !== row && row !== first) {
            flag = false;
        }
    }
    if (flag) {
        console.log(true);
    } else {
        console.log(false);
    }
}
isMagicMatrix(
    [[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
);