function power(base, radix) {
    let result = base ** radix;

    return result
}

let returnedValue = power(2, 8);
console.log('Returned value = ' + returnedValue);


// print function result without variable
console.log(power(3, 2));

// return boolean
function pass(grade) {
    return grade >= 3;
}

if (pass(3.9)) {
    console.log('Student passed the exam');
} else {
    console.log('Student didn\'t pass the exam');
}
