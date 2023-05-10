    function solve(matrix) {

        let pairs = 0;
        

        for (let i = 0; i < matrix.length - 1; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                
                if (matrix[i][j] === matrix[i][j + 1]) {
                    pairs++;
                }
                if (matrix[i][j] === matrix[i + 1][j]) {
                    pairs++;
                }
                if (i == matrix.length - 2 && matrix[i + 1][j] == matrix[i + 1][j + 1]) {
                    pairs++; //checking for last row in horizontal for pairs
                }
                
            }
        }
        console.log(pairs);



    }
solve([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '5', '4'],
['9', '9', '7', '5', '4']]


);