function numbers(input) {

    let numbersArr = input.split(' ').map(Number);
    let sum = 0;
    numbersArr.forEach(element => sum+=element);

   numbersArr.filter(x=>x>sum / numbersArr.length);

   numbersArr.sort((a, b) => b - a);
    console.log(numbersArr.slice(0, 5).join(' '));
    if(numbersArr.length===0){
        console.log('No');
    }

}
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');