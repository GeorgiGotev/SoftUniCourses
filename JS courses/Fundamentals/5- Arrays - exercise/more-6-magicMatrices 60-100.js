function magicMatrices(input) {
    let flag = true;
    let firstLine = 0;
    let firstRow = 0;

    firstLine = input[0][0] + input[0][1] + input[0][2]; // sum of first line matrix
    firstRow = input[0][0] + input[1][0] + input[2][0]; // sum of first row matrix


    for (let i = 0; i < input.length; i++) {   //iterate every line

        let rowSum = 0;
        let sumOfLine = 0;

        for (let col = 0; col < input[i].length; col++) {   // sum of every line
            sumOfLine += input[i][col];
        }
        for (let row = 0; row < input[i].length; row++) {  //sum of every row
            rowSum += input[row][i];
        }
        if (rowSum !== sumOfLine || rowSum !== firstLine || rowSum !== firstRow || sumOfLine !== firstLine || sumOfLine !== firstRow) {
            flag = false;  // check if every row is same with line and check  VS first ones..  here we can use reduce method too
        }

    }

    if (flag) {
        console.log('true');
    } else {
        console.log('false');
    }
}
magicMatrices([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]




);