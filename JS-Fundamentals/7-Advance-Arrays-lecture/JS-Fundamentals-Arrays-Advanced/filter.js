let numbers = [2, 4, 1, 9, 10, 3];

let evenNumbers = numbers.filter(num => num % 2 === 0);
let oddNumbers = numbers.filter(x => x % 2 !== 0);

console.log(numbers);
console.log(evenNumbers);
console.log(oddNumbers);

// Take numbers on even positions
let evenPositionNumbers = numbers.filter((x, i) => i % 2 === 0);
console.log('evenPositionNumbers');
console.log(evenPositionNumbers);

// filtering with strings
let names = ['ivo', 'pesho', 'gosho', 'ani'];

let shortNames = names.filter(x => x.length <= 3);
console.log(shortNames);
