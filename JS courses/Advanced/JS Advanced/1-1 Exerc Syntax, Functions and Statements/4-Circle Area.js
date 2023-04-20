function solve(a) {
    let typeOf = typeof a;
    if (typeOf === 'number') {
        let area = Math.PI * (a ** 2);
        console.log(area.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeOf}.`);
    }
}
solve('g');