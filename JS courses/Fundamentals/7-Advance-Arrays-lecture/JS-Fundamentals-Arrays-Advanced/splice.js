// Splice mutates the original array
let cars = ['bmw', 'mercedess', 'toyota', 'vw'];

// Remove single elements in the middle
let removedCars = cars.splice(2, 1);
console.log(cars);
console.log(removedCars);

// Remove two elements in the middle
cars = ['bmw', 'mercedess', 'toyota', 'vw'];
let middleCars = cars.splice(1, 2);
console.log('Original array: ', cars);
console.log('middleCars ', middleCars);

// Add elements in the middle
cars = ['bmw', 'mercedess', 'toyota', 'vw'];
cars.splice(1, 0, 'lada', 'trabant');
console.log(cars);

// Combine add and remove
cars.splice(1, 2, 'honda');
console.log(cars);
