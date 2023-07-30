const sumOfTwoNumbers=require('./index.js');
const {assert} = require('chai');

describe('sum of two numbers', ()=>{
    it('solves', ()=>{
        assert.equal(sumOfTwoNumbers(3,4),12);
    });
});
    
