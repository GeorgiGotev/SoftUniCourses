function numbers(input) {

    let numbersArr = input.split(' ').map(Number);
    let sum = 0;
    numbersArr.forEach(element => sum+=element);
    let avg = sum / numbersArr.length;

    let result = [];
numbersArr.forEach(element => {
    if(element>avg){
        result.push(element);
    }
});
    result.sort((a, b) => b - a);
    let output = result.slice(0, 5)
    console.log(output.join(' '));
    if(output.length===0){
        console.log('No');
    }

}
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');