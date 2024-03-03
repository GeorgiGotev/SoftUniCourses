function solve(num, variant) {
    const cardNumbers = {
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        10: 10,
        J: 'J',
        Q: 'Q',
        K: 'K',
        A: 'A',
    };
    const type = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663',
    };
    if (!cardNumbers[num] || !type[variant]) {
        throw new Error('Error');
    }

    let result = {
        num,
        variant,
        toString() {
            return cardNumbers[this.num]+type[this.variant];
        },
    };
    return result;
}

module.exports={solve};
