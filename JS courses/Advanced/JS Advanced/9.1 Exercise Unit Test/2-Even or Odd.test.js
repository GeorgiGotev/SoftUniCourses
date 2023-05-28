const isOddOrEven = require('./2-Even or Odd');
const { expect, assert } = require('chai');

describe('test isOddOrEven function', () => {
    it('check to return undefined', () => {
        expect(typeof isOddOrEven(3243)).to.equal('undefined');
        expect(typeof isOddOrEven([])).to.equal('undefined');
        expect(typeof isOddOrEven({})).to.equal('undefined');
        expect(typeof isOddOrEven(true)).to.equal('undefined');
        expect(typeof isOddOrEven(false)).to.equal('undefined');
    });
    it('check odd result',()=>{
        expect(isOddOrEven('abc')).to.equal('odd');
    });
    it('check even result',()=>{
        expect(isOddOrEven('ab')).to.equal('even');
    });
});
