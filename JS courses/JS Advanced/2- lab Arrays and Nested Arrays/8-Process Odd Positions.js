function solve(arr) {

    let output = arr.filter((num, i) => i  % 2 !== 0)
        .map(x => x *= 2)
        .reverse()
        .join(' ');
    return output

}
console.log(solve([3, 0, 10, 4, 7, 3]));