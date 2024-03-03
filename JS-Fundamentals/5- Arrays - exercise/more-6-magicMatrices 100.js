function magicMatrices(input) {
    let flag = true;
    let first=0;

    for (const line of input[0]) {
        first+=line;
    }
    
    for (let i = 0; i < input.length; i++) {
        let rowSum = 0;
        let colSum = 0;
       
        for (const line of input[i]) {
            colSum += line;
        }
        for (let col = 0; col < input.length; col++) {
            rowSum += input[col][i];
        }
        if (rowSum !== colSum || rowSum !==first || colSum!==first) {
            flag = false;
        }
    }

    if (flag) {
        console.log('true');
    } else {
        console.log('false');
    }
}
magicMatrices([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]

);