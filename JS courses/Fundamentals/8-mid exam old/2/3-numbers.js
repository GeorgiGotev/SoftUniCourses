function numbers(input) {

    let numbersArr = input.split(' ').map(Number);
    let avg = numbersArr.reduce((a, b) => a + b, 0) / numbersArr.length;
    let result = numbersArr.filter(x => x > avg).sort((a, b) => b - a).slice(0, 5);
    

    if (result.length === 0) {
        return console.log('No');
    } else {
        return result.join(' ');
    }

}
console.log(numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51'));

