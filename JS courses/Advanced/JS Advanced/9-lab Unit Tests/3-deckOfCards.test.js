const { printDeckOfCards } = require("./3-deckOfCards");
const { expect, assert}=require('chai');
   
describe('test for valid cards', ()=>{
    it('valid input',()=>{
        let inputArr=['AS', '10D', 'KH', '2C'];
        let result='A♠ 10♦ K♥ 2♣';
        expect(printDeckOfCards(inputArr)).to.equal(result);
    });
    it('invalid input',()=>{
        let inputArr=['5S', '3D', '1D'];
        let result='Invalid card: 1D';
        expect(printDeckOfCards(inputArr)).to.equal(result);
    });
});