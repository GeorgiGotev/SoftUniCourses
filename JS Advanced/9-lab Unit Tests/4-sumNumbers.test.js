const sum = require("./4-SumNumbers");
const{assert,expect}=require('chai');

describe('test sum function', ()=>{
    it('test for true solution',()=>{
        // let arrInput=[1,2];
        expect(sum([1,2])).to.equal(3);
    })
})