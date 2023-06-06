const motorcycleRider = require('./Motorcycle Rider');
const { expect, assert } = require('chai');

describe('motorcycleRider func', function () {
    describe('licenseRestriction method ', function () {
        it('true ', function () {
            expect(motorcycleRider.licenseRestriction('AM')).to.eq(
                'Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.'
            );
            expect(motorcycleRider.licenseRestriction('A1')).to.eq(
                'Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.'
            );
            expect(motorcycleRider.licenseRestriction('A2')).to.eq(
                'Motorcycles with maximum power of 35KW. and the minimum age is 18.'
            );
            expect(motorcycleRider.licenseRestriction('A')).to.eq(
                'No motorcycle restrictions, and the minimum age is 24.'
            );
            expect(()=>motorcycleRider.licenseRestriction('B')).to.throw(
                'Invalid Information!'
            );
        });
        it('false ', function () {});
    });
    describe('motorcycleShowroom method ', function () {
        it('true ', function () {
            expect(motorcycleRider.motorcycleShowroom(['70','60'],80)).to.eq('There are 2 available motorcycles matching your criteria!');
            expect(motorcycleRider.motorcycleShowroom(['80'],80)).to.eq('There are 1 available motorcycles matching your criteria!');
        });
        it('false ', function () {
            expect(()=>motorcycleRider.motorcycleShowroom([],80)).to.throw('Invalid Information!');
            expect(()=>motorcycleRider.motorcycleShowroom(['50'],49)).to.throw('Invalid Information!');
            expect(()=>motorcycleRider.motorcycleShowroom(['70','60'],'49')).to.throw('Invalid Information!');
            expect(()=>motorcycleRider.motorcycleShowroom(['70','60'],true)).to.throw('Invalid Information!');
            expect(()=>motorcycleRider.motorcycleShowroom(50,80)).to.throw('Invalid Information!');
            expect(()=>motorcycleRider.motorcycleShowroom(true,80)).to.throw('Invalid Information!');
            expect(()=>motorcycleRider.motorcycleShowroom(['70','60'],[80])).to.throw('Invalid Information!');
        });
    });
    describe('otherSpendings method ', function () {
        it('true ', function () {
            expect(motorcycleRider.otherSpendings(['helmet', 'jacked'],['engine oil', 'oil filter'],true)).to.eq(`You spend $540.00 for equipment and consumables with 10% discount!`);
            expect(motorcycleRider.otherSpendings(['helmet', 'jacked'],['engine oil', 'oil filter'],false)).to.eq('You spend $600.00 for equipment and consumables!');
        });
        it('false ', function () {});
    });
});
