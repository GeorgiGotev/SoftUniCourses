function memoryGame(input) {

    let numbersArr = input[0].split(' ');
    let counter = 0;
    let index = 1;
    let command = input[index];
    while (command !== 'end') {
        counter++;
        let [index1,index2] = input[index].split(' ').map(Number);
        let num1=numbersArr[index1];
        if (index1 < 0 
            || index2 < 0 
            || index1 >= numbersArr.length 
            || index2 >= numbersArr.length 
            || index1 === index2) {
            let newEl = `-${counter}a`;
            numbersArr.splice((numbersArr.length / 2), 0, newEl, newEl);
            console.log(`Invalid input! Adding additional elements to the board`);
        } else {
            if (numbersArr[index1] === numbersArr[index2]) {
                console.log(`Congrats! You have found matching elements - ${num1}!`);
                let index1=numbersArr.indexOf(num1)
                numbersArr.splice(index1, 1);
                let index2 = numbersArr.indexOf(num1);
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