function solve(a) {
    let numbers = a.toString();
    let flag = true;
    let firstNum = numbers[0]
    let sum = 0;
    for (const num of numbers) {
        if (num !== firstNum) {
            flag = false;
        }
        sum += Number(num)

    }
    flag === true ? console.log('true') : console.log('false');
    console.log(sum);
}
solve(232);