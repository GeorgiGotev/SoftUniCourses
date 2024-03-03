let numbers = [2, 4, 1, 6, 2];
let cars = ['bmw', 'mercedess', 'toyota', 'vw', 'audi'];

console.log('--Using default sort--');
numbers.sort();
cars.sort();
console.log(numbers); // Mutates original array
console.log(cars); // Mutates original array

console.log('--Default sort limitation--');
numbers = [2, 4, 1, 6, 2, 100];
cars = ['bmw', 'mercedess', 'toyota', 'VW', 'audi'];
numbers.sort();
cars.sort();
console.log(numbers);
console.log(cars);

console.log('--Sort numbers--');
numbers = [2, 4, 1, 6, 2, 100];
// numbers.sort((a, b) => {
//     if (a < b) { // a - b = negative
//         return -1;
//     } else if (a > b) { // a - b = positive
//         return 1;
//     } else { // a - b == zero
//         return 0;
//     }
// });

numbers.sort((a, b) => a - b); // b - a for descending order
console.log(numbers);

console.log('--Sort strings--');
cars = ['bmw', 'mercedess', 'toyota', 'VW', 'audi'];
cars.sort((a, b) => a.localeCompare(b))
console.log(cars);
