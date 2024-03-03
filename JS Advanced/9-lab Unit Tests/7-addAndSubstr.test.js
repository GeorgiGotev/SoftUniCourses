const createCalculator = require('./7-addAndSubstr');
const { assert, expect } = require('chai');

describe('check createCalculator functionality', () => {
    let value = null;

    beforeEach(() => {
        calc = createCalculator();
    });
    it('return zero', () => {
        expect(calc.get()).to.equal(0);
    });
    it('add numbers', () => {
        calc.add(1);
        expect(calc.get()).to.equal(1);
    });
    it('add numbers', () => {
        calc.add(1);
        calc.add(1);
        expect(calc.get()).to.equal(2);
    });
    it('substr numbers', () => {
        calc.subtract(1);
        expect(calc.get()).to.equal(-1);
    });
    it('get functionality', () => {
        calc.add(2);
        calc.subtract(1);
        expect(calc.get()).to.equal(1);
    });
    it('get functionality', () => {
        calc.add('2');
        calc.add(2);
        calc.subtract(1)
        calc.subtract('1');
        expect(calc.get()).to.equal(2);
    });
    it('correct structure',()=>{
        expect(typeof calc).to.be.equal('object');
        expect(calc).to.has.ownProperty('add');
        expect (calc).to.has.ownProperty('subtract');
        expect(calc).to.has.ownProperty('get');
    });
});
