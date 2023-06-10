const chooseYourCar = require('./chooseYourCar');
const { assert, expect } = require('chai');

describe('chooseCar …', function () {
    describe('choosingCar …', function () {
        it('true …', function () {
            expect(chooseYourCar.choosingType('Sedan', 'red', 2010)).to.eq(
                'This red Sedan meets the requirements, that you have.'
            );
            expect(chooseYourCar.choosingType('Sedan', 'red', 2022)).to.eq(
                'This red Sedan meets the requirements, that you have.'
            );
            expect(chooseYourCar.choosingType('Sedan', 'red', 2009)).to.eq(
                'This Sedan is too old for you, especially with that red color.'
            );
        });
        it('false …', function () {
            expect(()=>chooseYourCar.choosingType('Sedan','red',1899)).to.Throw('Invalid Year!');
            expect(()=>chooseYourCar.choosingType('Sedan','red',2023)).to.Throw('Invalid Year!');
            expect(()=>chooseYourCar.choosingType('a','red',2022)).to.Throw('This type of car is not what you are looking for.');
            expect(()=>chooseYourCar.choosingType('a','red',1900)).to.Throw('This type of car is not what you are looking for.');
        });
    });
    describe('brandName …', function () {
        it('true …', function () {
            expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"],1)).to.eq('BMW, Peugeot');
        });
        it('throw Error …', function () {
            expect(()=>chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"],3)).to.throw('Invalid Information!');
            expect(()=>chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"],-1)).to.throw('Invalid Information!');
            expect(()=>chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"],'1')).to.throw('Invalid Information!');
            expect(()=>chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"],true)).to.throw('Invalid Information!');
            expect(()=>chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"],{})).to.throw('Invalid Information!');
            expect(()=>chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"],[])).to.throw('Invalid Information!');
            expect(()=>chooseYourCar.brandName('a',1)).to.throw('Invalid Information!');
            expect(()=>chooseYourCar.brandName(true,1)).to.throw('Invalid Information!');
            expect(()=>chooseYourCar.brandName({},1)).to.throw('Invalid Information!');
            expect(()=>chooseYourCar.brandName(1,1)).to.throw('Invalid Information!');
            expect(()=>chooseYourCar.brandName([],1)).to.throw('Invalid Information!');
        });
    });
    describe('CarFuelConsumption  …', function () {
        it('true …', function () {
            expect(chooseYourCar.carFuelConsumption(100,7)).to.eq('The car is efficient enough, it burns 7.00 liters/100 km.');
            expect(chooseYourCar.carFuelConsumption(100,6.1)).to.eq('The car is efficient enough, it burns 6.10 liters/100 km.');
            expect(chooseYourCar.carFuelConsumption(100,7.1)).to.eq('The car burns too much fuel - 7.10 liters!');
            expect(chooseYourCar.carFuelConsumption(100,8)).to.eq('The car burns too much fuel - 8.00 liters!');
        });
        it('false …', function () {
            expect(()=>chooseYourCar.carFuelConsumption('',1)).to.Throw('Invalid Information!');
            expect(()=>chooseYourCar.carFuelConsumption([],1)).to.Throw('Invalid Information!');
            expect(()=>chooseYourCar.carFuelConsumption({},1)).to.Throw('Invalid Information!');
            expect(()=>chooseYourCar.carFuelConsumption(true,1)).to.Throw('Invalid Information!');
            expect(()=>chooseYourCar.carFuelConsumption(-1,1)).to.Throw('Invalid Information!');
            expect(()=>chooseYourCar.carFuelConsumption(0,1)).to.Throw('Invalid Information!');
            expect(()=>chooseYourCar.carFuelConsumption(1,'')).to.Throw('Invalid Information!');
            expect(()=>chooseYourCar.carFuelConsumption(1,[])).to.Throw('Invalid Information!');
            expect(()=>chooseYourCar.carFuelConsumption(1,{})).to.Throw('Invalid Information!');
            expect(()=>chooseYourCar.carFuelConsumption(1,true)).to.Throw('Invalid Information!');
            expect(()=>chooseYourCar.carFuelConsumption(1,-1)).to.Throw('Invalid Information!');
            expect(()=>chooseYourCar.carFuelConsumption(1,0)).to.Throw('Invalid Information!');
        });
    });
});
