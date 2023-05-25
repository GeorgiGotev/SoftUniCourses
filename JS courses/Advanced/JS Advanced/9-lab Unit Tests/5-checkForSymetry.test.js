const isSymmetric = require('./5-checkForSymetry');

const { assert, expect } = require('chai');

describe('test symmetric arr of numbers', () => {
    it('check if it is array', () => {
        expect(isSymmetric({})).to.equal(false);
        expect(isSymmetric('a')).to.equal(false);
        expect(isSymmetric(1)).to.equal(false);
        expect(isSymmetric(true)).to.equal(false);
    });
    it('check for correct array', () => {
        expect(isSymmetric([1, 2, 1])).to.equal(true);
        expect(isSymmetric([1, 2, 2, 1])).to.equal(true);
        expect(isSymmetric(['a', 'b', 'a'])).to.equal(true);
    });
    it('check for wrong array', () => {
        expect(isSymmetric(['a', 'b', 'c'])).to.equal(false);
        expect(isSymmetric([1, 2, 2, 3])).to.equal(false);
        expect(isSymmetric([1, 2, 3])).to.equal(false);
        expect(isSymmetric([1, 2, '1'])).to.equal(false);
        expect(isSymmetric([1, 2, 'c'])).to.equal(false);

    });
});
