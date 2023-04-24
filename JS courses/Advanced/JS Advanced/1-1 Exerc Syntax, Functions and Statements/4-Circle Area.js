function solve(a) {
    let type= typeof a;
    type === 'number' ? console.log((Math.PI * (a ** 2)).toFixed(2)) : console.log(`We can not calculate the circle area, because we receive a ${type}.`);
}
solve(5);