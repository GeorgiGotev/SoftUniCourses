function blackFlag(input) {
    let days = Number(input.shift());
    let getherPerDay = Number(input.shift());
    let expectedTotal = Number(input.shift());
    let totalGain = 0;

    for (let i = 1; i <= days; i++) {
        totalGain += getherPerDay;
        if (i % 3 === 0) {
            totalGain += getherPerDay * 0.5;
        }
        if (i % 5 === 0) {
            totalGain -= totalGain * 0.3;
        }
    }
    if (totalGain >= expectedTotal) {
        return `Ahoy! ${totalGain.toFixed(2)} plunder gained.`;
    } else {
        return `Collected only ${(totalGain / expectedTotal * 100).toFixed(2)}% of the plunder.`;
    }

}


console.log(blackFlag(["10",
    "20",
    "380"])); 