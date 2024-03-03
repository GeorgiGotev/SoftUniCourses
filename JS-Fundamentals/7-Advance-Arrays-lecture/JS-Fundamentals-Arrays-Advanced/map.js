let numbers = [2, 4, 1, 6, 10];

let doubleNumbers = numbers.map(num => num * 2);

console.log(numbers);
console.log(doubleNumbers);

// Solution without map
function mapDouble(arr) {
    let transormedArr = [];

    for (const el of arr) {
        transormedArr.push(el * 2);
    }
    console.log(transormedArr);
}

// implement map - advanced
function map(arr, callback) {
    let transormedArr = [];

    for (const el of arr) {
        transormedArr.push(callback(el));
    }

    return transormedArr;
}

let result = map(numbers, x => x * 2);
console.log(result);
