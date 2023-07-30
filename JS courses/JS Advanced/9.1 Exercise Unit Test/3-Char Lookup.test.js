const lookupChar = require('./3-Char Lookup');
const { expect, assert } = require('chai');

describe('test func lookupChar', () => {
    it('returning undefined', () => {
        expect(lookupChar(1, 'a')).to.equal(undefined);
        expect(lookupChar(1, 1)).to.equal(undefined);
        expect(lookupChar([], [])).to.equal(undefined);
        expect(lookupChar({}, {})).to.equal(undefined);
        expect(lookupChar(true, 2)).to.equal(undefined);
        expect(lookupChar(false, 1)).to.equal(undefined);
        expect(lookupChar('a', 'a')).to.equal(undefined);
        expect(lookupChar('a', [])).to.equal(undefined);
        expect(lookupChar('a', {})).to.equal(undefined);
        expect(lookupChar({},1)).to.equal(undefined);
        expect(lookupChar([], 1)).to.equal(undefined);
        expect(lookupChar('a', 1.1)).to.equal(undefined); //floating point number!!!
    });
    it('returning Incorrect index',()=>{
        let str='abc'
        expect(lookupChar(str,3)).to.equal('Incorrect index');
        expect(lookupChar(str,-1)).to.equal('Incorrect index');
    });
    it('returning char at the specified index',()=>{
        let str='abc'
        expect(lookupChar(str,0)).to.equal('a')
        expect(lookupChar(str,2)).to.equal('c')
        expect(lookupChar(str,1)).to.equal('b')
    });
});
