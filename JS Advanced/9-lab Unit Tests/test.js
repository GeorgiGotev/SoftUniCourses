function sum(a, b) {
    if (typeof a != 'number' || typeof b != 'number') {
        throw new Error('it is not a number');
    }
    return a + b;
}
module.exports = sum;
