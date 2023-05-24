const { expect, assert } = require('chai');
const sum= require('./test');

describe('main tesdsadsat', function () {
    it('works with whole numbers', function () {
        expect(sum(3, 5)).to.be.equal(8);
    });
    it('works with floating numbers', function () {
        expect(sum(3.5, 3.2)).to.be.closeTo(6.6, 0.2);
    });
    it('check if input is with numbers', () => {
        expect(() => sum('a', 'b')).to.throw();
    });
});
