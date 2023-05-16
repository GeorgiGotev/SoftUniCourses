function solve(arr) {
    let result = [];
    let sorted = arr.sort((a, b) => a - b);
    while (sorted.length) {
        result.push(sorted.shift(), sorted.pop());
        // result.push(sorted.pop());
    }
    return (result);
}
console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));