const isOddOrEven=require('./2-evenOrOdd.js');
const {assert,expect} = require('chai');

describe('evenOrOdd test', ()=>{
    it('should return undefined if parameter is number', ()=>{
        assert.equal(isOddOrEven(4), undefined);
    });
    it('should return undefined if parameter is obj', ()=>{
        assert.equal(isOddOrEven({name:'pesho'}), undefined)
    });
    it('should return even', ()=>{
        assert.equal(isOddOrEven('hi'), 'even')
    });
    it('should return odd', ()=>{
        expect(isOddOrEven('hello')).to.equal('odd')
    });
});
    
