const rgbToHexColor = require("./6-rgbToHex");
const {assert,expect}=require('chai');

describe('test rdbToHex functionality',()=>{
    it('invalid numbers',()=>{
        expect(rgbToHexColor(256,255,255)).to.equal(undefined);
        expect(rgbToHexColor(255,256,255)).to.equal(undefined);
        expect(rgbToHexColor(255,255,256)).to.equal(undefined);
        expect(rgbToHexColor(-1,255,255)).to.equal(undefined);
        expect(rgbToHexColor(255,-1,255)).to.equal(undefined);
        expect(rgbToHexColor(255,255,-1)).to.equal(undefined);
        expect(rgbToHexColor('255',255,255)).to.equal(undefined);
        expect(rgbToHexColor(255,'255',255)).to.equal(undefined);
        expect(rgbToHexColor(255,255,'255')).to.equal(undefined);
        expect(rgbToHexColor([],255,255)).to.equal(undefined);
        expect(rgbToHexColor(255,[],255)).to.equal(undefined);
        expect(rgbToHexColor(255,255,[])).to.equal(undefined);
        expect(rgbToHexColor({},255,255)).to.equal(undefined);
        expect(rgbToHexColor(255,{},255)).to.equal(undefined);
        expect(rgbToHexColor(255,255,{})).to.equal(undefined);
        expect(rgbToHexColor([],-1,{})).to.equal(undefined);
        expect(rgbToHexColor(255,true,{})).to.equal(undefined);
        expect(rgbToHexColor(false,255,{})).to.equal(undefined);
    });
    it('true solution',()=>{
        expect(rgbToHexColor(255,158,70)).to.equal('#FF9E46');
        expect(rgbToHexColor(200,158,70)).to.equal('#C89E46');
        expect(rgbToHexColor(0,0,0)).to.equal('#000000');
    });
});