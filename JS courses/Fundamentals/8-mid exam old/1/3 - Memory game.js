function memoryGame(input) {

    let numbersArr = input[0].split(' ');
    let counter = 0;
    let index = 1;
    let command = input[index];
    while (command !== 'end') {
        counter++;
        let currI = input[index].split(' ').map(Number);
        let currNum=numbersArr[currI[0]]

        if (currI[0] < 0 
            || currI[1] < 0 
            || currI[0] >= numbersArr.length 
            || currI[1] >= numbersArr.length 
            || currI[0] === currI[1]) {
            let newEl = `-${counter}a`;
            numbersArr.splice((numbersArr.length / 2), 0, newEl, newEl);
            console.log(`Invalid input! Adding additional elements to the board`);
        } else {
            if (numbersArr[currI[0]] === numbersArr[currI[1]]) {
                console.log(`Congrats! You have found matching elements - ${currNum}!`);
                let index1=numbersArr.indexOf(currNum)
                numbersArr.splice(index1, 1);
                let index2 = numbersArr.indexOf(currNum);
                numbersArr.splice(index2, 1);
            } else {
                console.log(`Try again!`);
            }
        }

        if (numbersArr.length === 0) {
            console.log(`You have won in ${counter} turns!`);
            break;
        }
        index++;
        command = input[index];

    }
    if (numbersArr.length > 0) {
        console.log(`Sorry you lose :(`);
        console.log(numbersArr.join(' '));
    }
}
memoryGame([
    "a 2 4 a 2 4",
    "0 3",
    "0 2",
    "0 1",
    "0 1",
    "end"
]
);
console.log('--------------------');
memoryGame([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"
]
);