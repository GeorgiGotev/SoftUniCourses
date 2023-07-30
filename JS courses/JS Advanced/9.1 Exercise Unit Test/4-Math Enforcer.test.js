const mathEnforcer = require('./4-Math Enforcer');
const { expect, assert } = require('chai');

describe('check mathEnForcer func', () => {
    describe('addFive', () => {
        it('check addFive wrong input', () => {
            expect(mathEnforcer.addFive('a')).to.equal(undefined);
            expect(mathEnforcer.addFive('')).to.equal(undefined);
            expect(mathEnforcer.addFive(true)).to.equal(undefined);
            expect(mathEnforcer.addFive('1')).to.equal(undefined);
            expect(mathEnforcer.addFive([])).to.equal(undefined);
            expect(mathEnforcer.addFive({})).to.equal(undefined);
        });
        it('addFive correct input', () => {
            expect(mathEnforcer.addFive(5)).to.equal(10);
            expect(mathEnforcer.addFive(10)).to.equal(15);
            expect(mathEnforcer.addFive(0.01)).to.equal(5.01);
            expect(mathEnforcer.addFive(0.002)).to.equal(5.002);
            expect(mathEnforcer.addFive(-1)).to.equal(4);
        });
    });
    describe('subtractTen', () => {
        it('check subtractTen', () => {
            expect(mathEnforcer.subtractTen(12)).to.equal(2);
            expect(mathEnforcer.subtractTen(10)).to.equal(0);
            expect(mathEnforcer.subtractTen(10.2)).to.closeTo(0.2,0.2);
            expect(mathEnforcer.subtractTen(9.9)).to.closeTo(-0.1,0.2);
            expect(mathEnforcer.subtractTen(-1)).to.equal(-11);
        });
        it('subtractTen wrong input', () => {
            expect(mathEnforcer.subtractTen('a')).to.equal(undefined);
            expect(mathEnforcer.subtractTen('')).to.equal(undefined);
            expect(mathEnforcer.subtractTen(true)).to.equal(undefined);
            expect(mathEnforcer.subtractTen('1')).to.equal(undefined);
            expect(mathEnforcer.subtractTen([])).to.equal(undefined);
            expect(mathEnforcer.subtractTen({})).to.equal(undefined);
        });
    });
    describe('sum', () => {
        it('check sum', () => {
            expect(mathEnforcer.sum(1, 1)).to.equal(2);
            expect(mathEnforcer.sum(1, 2)).to.equal(3);
            expect(mathEnforcer.sum(0.03, 0.01)).to.equal(0.04);
            expect(mathEnforcer.sum(1, 0)).to.equal(1);
            expect(mathEnforcer.sum(0, 0)).to.equal(0);
            expect(mathEnforcer.sum(0.001, 0.001)).to.equal(0.002);
            expect(mathEnforcer.sum(-1, -2)).to.equal(-3);
        });
        it('wrong input', () => {
            expect(mathEnforcer.sum('a', 1)).to.equal(undefined);
            expect(mathEnforcer.sum('a', 'a')).to.equal(undefined);
            expect(mathEnforcer.sum(1, 'a')).to.equal(undefined);
            expect(mathEnforcer.sum(1, [])).to.equal(undefined);
            expect(mathEnforcer.sum(1, {})).to.equal(undefined);
            expect(mathEnforcer.sum(1, true)).to.equal(undefined);
            expect(mathEnforcer.sum([], 1)).to.equal(undefined);
            expect(mathEnforcer.sum(true, 1)).to.equal(undefined);
            expect(mathEnforcer.sum({}, 1)).to.equal(undefined);
        });
    });
});
