function solve(arr) {
    let sorted = arr.sort((a, b) => a.localeCompare(b));
    result = [];
    counter = 1;
    for (const name of sorted) {
        result.push(`${counter}.${name}`)
        counter++;
    }
    console.log(result.join('\n'));
}
solve(["John", "Bob", "Christina", "Ema"]);