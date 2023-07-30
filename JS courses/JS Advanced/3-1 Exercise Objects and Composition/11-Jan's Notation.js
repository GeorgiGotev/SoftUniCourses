function solve(arr) {

    let mapObj = {
        '+': (a, b) => a + b,
        '-': (a, b) => b - a,
        '*': (a, b) => a * b,
        '/': (a, b) => b / a,
    }
    let copyArr = [...arr];
    let numbers = [];

    for (let i = 0; i <= copyArr.length; i++) {
        if (i === copyArr.length) {
            if (numbers.length === 1) {
                return numbers[0];
            }
            return 'Error: too many operands!';
        }
        if (typeof copyArr[i] === 'number') {
            numbers.push(copyArr[i]);
        } else {
            let operand = copyArr[i];

            if (numbers.length < 2) {
                return 'Error: not enough operands!';
            } 
                let a = numbers.pop();
                let b = numbers.pop();
                let result = mapObj[operand](a, b);
                numbers.push(result)
             
        }
    }
}
console.log(solve([
    31,
    2,
    '+',
    11,
    '/']
));