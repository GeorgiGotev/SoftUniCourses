// Function declaration
function solve() {
    console.log('Function delcaration');
}

// Function expression
let func = function () {
    console.log('function expression');
}

// Function calls inside a function
function main() {
    solve();
    func();
}

// function invokation
solve();
func();
main();

// Funcitons allways return value
let returnedValue = solve();
console.log(returnedValue);

// Function expression with parameters
const sum = function (a, b) {
    console.log(a + b);
}
sum(1, 2);
