function printAndSum(start, end) {
    let sum = 0;
    let allNumbers = [];
    for (let i = start; i <= end; i++) {
        sum += i;
        allNumbers.push(i);
    }
    console.log(allNumbers.join(" "));
    console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);
