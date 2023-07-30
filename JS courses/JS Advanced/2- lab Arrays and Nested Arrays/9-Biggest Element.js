function solve(matrix) {
    let biggestNum = Number.MIN_SAFE_INTEGER;
    matrix.forEach(arr => {
        arr.forEach(num => {
            if (biggestNum < num){
                biggestNum = num;
            }
        });
    });
   return biggestNum;
}
solve([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]]
);