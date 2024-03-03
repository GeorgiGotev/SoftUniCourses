function solve(arr) {
    let sorted = arr.sort((a, b) => a - b);

    return sorted.slice(sorted.length / 2);
}
console.log(solve([4, 7, 2, 5,3])); 