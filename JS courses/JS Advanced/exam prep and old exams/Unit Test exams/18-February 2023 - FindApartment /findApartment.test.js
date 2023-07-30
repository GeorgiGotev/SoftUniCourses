const findNewApartment = require("./findApartment");
const {expect,assert}=require ('chai');


describe("Tests findNewApartment", function() {
    describe("isGoodLocation", function() {

        it("true", function() {
            expect(findNewApartment.isGoodLocation('Varna', true)).to.eq('You can go on home tour!');
            expect(findNewApartment.isGoodLocation('Plovdiv', true)).to.eq('You can go on home tour!');
            expect(findNewApartment.isGoodLocation('Sofia', true)).to.eq('You can go on home tour!');
        });
        it("false", function() {
            expect(findNewApartment.isGoodLocation('Sofia', false)).to.eq('There is no public transport in area.');
            expect(findNewApartment.isGoodLocation('Varna', false)).to.eq('There is no public transport in area.');
            expect(findNewApartment.isGoodLocation('Plovdiv', false)).to.eq('There is no public transport in area.');
            expect(findNewApartment.isGoodLocation('Burgas', false)).to.eq('This location is not suitable for you.');
            expect(findNewApartment.isGoodLocation('Burgas', true)).to.eq('This location is not suitable for you.');
            
        });
        it("wrong input", function() {
            expect(()=>findNewApartment.isGoodLocation(1, 'a')).to.throw('Invalid input!');
            expect(()=>findNewApartment.isGoodLocation([], 1)).to.throw('Invalid input!');
            expect(()=>findNewApartment.isGoodLocation({}, [])).to.throw('Invalid input!');
            expect(()=>findNewApartment.isGoodLocation(true, {})).to.throw('Invalid input!');
            expect(()=>findNewApartment.isGoodLocation('a', {})).to.throw('Invalid input!');
            expect(()=>findNewApartment.isGoodLocation('a', 1)).to.throw('Invalid input!');
            expect(()=>findNewApartment.isGoodLocation('a', [])).to.throw('Invalid input!');
            expect(()=>findNewApartment.isGoodLocation('a', "a")).to.throw('Invalid input!');
        });
     });

     describe("isLargeEnough", function() {
        
        
        it("true", function() {
            expect(findNewApartment.isLargeEnough([20,30],20)).to.eq('20, 30')
        });
        it("false", function() {
            expect(()=>findNewApartment.isLargeEnough([],10)).to.throw('Invalid input!');
            expect(()=>findNewApartment.isLargeEnough([],'a')).to.throw('Invalid input!');
            expect(()=>findNewApartment.isLargeEnough({},'a')).to.throw('Invalid input!');
            expect(()=>findNewApartment.isLargeEnough(true,'a')).to.throw('Invalid input!');
            expect(()=>findNewApartment.isLargeEnough('',[])).to.throw('Invalid input!');
        });
     });
     describe("isItAffordable", function() {

        it("true", function() {
            expect(findNewApartment.isItAffordable(1,1)).to.eq('You can afford this home!');
            expect(findNewApartment.isItAffordable(1,2)).to.eq('You can afford this home!');
        });
        it("false", function() {
            expect(findNewApartment.isItAffordable(2,1)).to.eq(`You don't have enough money for this house!`);
            
        });
        it("wrong input", function() {
            expect(()=>findNewApartment.isGoodLocation(-1, -1)).to.throw('Invalid input!');
            expect(()=>findNewApartment.isGoodLocation(1, -1)).to.throw('Invalid input!');
            expect(()=>findNewApartment.isGoodLocation(-1, 1)).to.throw('Invalid input!');
            expect(()=>findNewApartment.isGoodLocation(true, {})).to.throw('Invalid input!');
            expect(()=>findNewApartment.isGoodLocation('a', {})).to.throw('Invalid input!');
            expect(()=>findNewApartment.isGoodLocation('a', 1)).to.throw('Invalid input!');
            expect(()=>findNewApartment.isGoodLocation('a', [])).to.throw('Invalid input!');
            expect(()=>findNewApartment.isGoodLocation('a', "a")).to.throw('Invalid input!');
        });
     });
});
