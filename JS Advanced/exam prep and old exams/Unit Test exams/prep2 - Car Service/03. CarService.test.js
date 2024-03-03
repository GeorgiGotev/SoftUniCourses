const carService = require("./03. Car Service");
const {assert,expect}=require('chai');


describe('test carService func',()=>{
    describe('test isItExpensive method',()=>{
        it('true result',()=>{
            expect(carService.isItExpensive('Engine')).to.eq(`The issue with the car is more severe and it will cost more money`);
            expect(carService.isItExpensive('Transmission')).to.eq(`The issue with the car is more severe and it will cost more money`);
        });
        it('Otherwise',()=>{
            expect(carService.isItExpensive('a')).to.eq(`The overall price will be a bit cheaper`);
        });
    });
    describe('test discount method',()=>{
        it('true result',()=>{
            expect(carService.discount(3,100)).to.eq(`Discount applied! You saved ${15}$`);
            expect(carService.discount(8,100)).to.eq(`Discount applied! You saved ${30}$`);
            expect(carService.discount(2,100)).to.eq("You cannot apply a discount");
        });
        it('throw error for wrong input',()=>{
            expect(()=>carService.discount('a',1)).to.throw('Invalid input');
            expect(()=>carService.discount(1,'a')).to.throw('Invalid input');
            expect(()=>carService.discount('a','a')).to.throw('Invalid input');
            expect(()=>carService.discount([],1)).to.throw('Invalid input');
            expect(()=>carService.discount(1,[])).to.throw('Invalid input');
            expect(()=>carService.discount(1,true)).to.throw('Invalid input');
            expect(()=>carService.discount(true,1)).to.throw('Invalid input');
            expect(()=>carService.discount({},1)).to.throw('Invalid input');
            expect(()=>carService.discount(1,{})).to.throw('Invalid input');
            expect(()=>carService.discount('1','1')).to.throw('Invalid input');
            // expect(()=>carService.discount(1.1,1.2)).to.throw('Invalid input');
        })
    });
    describe('test partsToBuy method',()=>{
        let totalSum=0;
        let catalog=[{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }];
        let neededParts=["blowoff valve", "injectors"];
        neededParts.forEach(x=>{
            catalog.map(a=>{
                if(a.part===x){
                    totalSum+=a.price;
                }
            })
        })
        it('true result',()=>{
            expect(carService.partsToBuy(catalog,neededParts)).to.eq(145);
            expect(carService.partsToBuy([],neededParts)).to.eq(0);
        });
        it('test for wrong input',()=>{
            expect(()=>carService.partsToBuy('a','a')).to.throw('Invalid input');
            expect(()=>carService.partsToBuy(1,'a')).to.throw('Invalid input');
            expect(()=>carService.partsToBuy('a',1)).to.throw('Invalid input');
            expect(()=>carService.partsToBuy({},'a')).to.throw('Invalid input');
            expect(()=>carService.partsToBuy('a',{})).to.throw('Invalid input');
            expect(()=>carService.partsToBuy(1,1)).to.throw('Invalid input');
            expect(()=>carService.partsToBuy({},{})).to.throw('Invalid input');
            expect(()=>carService.partsToBuy(true,true)).to.throw('Invalid input');
            expect(()=>carService.partsToBuy(true,[])).to.throw('Invalid input');
            expect(()=>carService.partsToBuy([],true)).to.throw('Invalid input');
            expect(()=>carService.partsToBuy([],1)).to.throw('Invalid input');
            expect(()=>carService.partsToBuy(1,[])).to.throw('Invalid input');
            expect(()=>carService.partsToBuy('a',[])).to.throw('Invalid input');
            expect(()=>carService.partsToBuy([],'a')).to.throw('Invalid input');
        });

    });
});
