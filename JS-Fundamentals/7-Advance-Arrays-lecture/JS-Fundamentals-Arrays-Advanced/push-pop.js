let cars = ['bmw', 'mercedess', 'toyota', 'vw'];
console.log(cars);

// Add at the end of the array
cars.push('audi');
console.log(cars);

// Add multiple elements at the end of the array
cars.push('trabant', 'lada');
console.log(cars);

// remove last car from the array
cars.pop();
console.log(cars);

// remove and get the last element from the array
let lastCar = cars.pop();
console.log(cars);
console.log('removed car', lastCar);

// get new length after push
let currentCarCount = cars.push('honda');
console.log(cars);
console.log('Current car count = ', currentCarCount);

// Remove last element without pop
cars.length = cars.length - 1;
console.log(cars);
