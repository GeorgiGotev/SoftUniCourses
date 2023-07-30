
const lottery = require('./Lottery');
const { assert, expect } = require('chai');

describe('lottery …', function () {
    describe('buyLotteryTicket …', function () {
        it('true …', function () {
            expect(lottery.buyLotteryTicket(1,1,true)).to.eq('You bought 1 tickets for 1$.');
            expect(lottery.buyLotteryTicket(2,2,true)).to.eq('You bought 2 tickets for 4$.');
        });
        it('false …', function () {
            expect(()=>lottery.buyLotteryTicket(1,'',true)).to.throw('Invalid input!');
            expect(()=>lottery.buyLotteryTicket(1,'a',true)).to.throw('Invalid input!');
            expect(()=>lottery.buyLotteryTicket(1,[],true)).to.throw('Invalid input!');
            expect(()=>lottery.buyLotteryTicket(1,{},true)).to.throw('Invalid input!');
            expect(()=>lottery.buyLotteryTicket(1,'1',true)).to.throw('Invalid input!');
            expect(()=>lottery.buyLotteryTicket(1,0,true)).to.throw('Invalid input!');
            expect(()=>lottery.buyLotteryTicket(1,-1,true)).to.throw('Invalid input!');
            expect(()=>lottery.buyLotteryTicket(1,0.1,true)).to.throw('Invalid input!');
            expect(()=>lottery.buyLotteryTicket(1,-0.1,true)).to.throw('Invalid input!');
            expect(()=>lottery.buyLotteryTicket(1,true,true)).to.throw('Invalid input!');

            expect(()=>lottery.buyLotteryTicket('',1,true)).to.throw('Invalid input!');
            expect(()=>lottery.buyLotteryTicket('a',1,true)).to.throw('Invalid input!');
            expect(()=>lottery.buyLotteryTicket({},1,true)).to.throw('Invalid input!');
            expect(()=>lottery.buyLotteryTicket([],1,true)).to.throw('Invalid input!');
            expect(()=>lottery.buyLotteryTicket(0,1,true)).to.throw('Invalid input!');
            expect(()=>lottery.buyLotteryTicket(-1,1,true)).to.throw('Invalid input!');
            expect(()=>lottery.buyLotteryTicket(-0.1,1,true)).to.throw('Invalid input!');
            expect(()=>lottery.buyLotteryTicket('1',1,true)).to.throw('Invalid input!');

            expect(()=>lottery.buyLotteryTicket(1,1,false)).to.throw('Unable to buy lottery ticket!');


        });
    });
    describe('checkTicket  …', function () {
        it('true …', function () {
            expect(lottery.checkTicket([0,1,2,3,4,5],[0,1,2,3,4,5])).to.eq("You win the JACKPOT!!!");
            expect(lottery.checkTicket([0,1,2,6,7,8],[0,1,2,3,4,5])).to.eq("Congratulations you win, check your reward!");
            expect(lottery.checkTicket([0,1,2,3,4,8],[0,1,2,3,4,5])).to.eq("Congratulations you win, check your reward!");
        });
        it('throw Error …', function () {
           expect(()=>lottery.checkTicket(1,[0,1,2,3,4,5])).to.throw('Invalid input!');
           expect(()=>lottery.checkTicket('',[0,1,2,3,4,5])).to.throw('Invalid input!');
           expect(()=>lottery.checkTicket('a',[0,1,2,3,4,5])).to.throw('Invalid input!');
           expect(()=>lottery.checkTicket([],[0,1,2,3,4,5])).to.throw('Invalid input!');
           expect(()=>lottery.checkTicket({},[0,1,2,3,4,5])).to.throw('Invalid input!');
           expect(()=>lottery.checkTicket(true,[0,1,2,3,4,5])).to.throw('Invalid input!');
           expect(()=>lottery.checkTicket([0,1,2,3,4,5],1)).to.throw('Invalid input!');
           expect(()=>lottery.checkTicket([0,1,2,3,4,5],'')).to.throw('Invalid input!');
           expect(()=>lottery.checkTicket([0,1,2,3,4,5],'a')).to.throw('Invalid input!');
           expect(()=>lottery.checkTicket([0,1,2,3,4,5],[])).to.throw('Invalid input!');
           expect(()=>lottery.checkTicket([0,1,2,3,4,5],{})).to.throw('Invalid input!');
           expect(()=>lottery.checkTicket([0,1,2,3,4,5],true)).to.throw('Invalid input!');
           expect(()=>lottery.checkTicket([0,1,2,3,4,5],[0,1,2,3,4,5,6])).to.throw('Invalid input!');
           expect(()=>lottery.checkTicket([0,1,2,3,4,5],[0,1,2,3,4])).to.throw('Invalid input!');
           expect(()=>lottery.checkTicket([0,1,2,3,4,5,6],[0,1,2,3,4,5])).to.throw('Invalid input!');
           expect(()=>lottery.checkTicket([0,1,2,3,4],[0,1,2,3,4,5])).to.throw('Invalid input!');
        });
    });
    describe('secondChance  …', function () {
        it('true …', function () {
            expect(lottery.secondChance(4,[0,1,2,3,4,5])).to.eq("You win our second chance prize!");
            expect(lottery.secondChance(6,[0,1,2,3,4,5])).to.eq("Sorry, your ticket didn't win!");
           
        });
        it('error …', function () {
            expect(()=>lottery.secondChance('',[0,1,2,3,4,5])).to.throw('Invalid input!');
            expect(()=>lottery.secondChance('a',[0,1,2,3,4,5])).to.throw('Invalid input!');
            expect(()=>lottery.secondChance([],[0,1,2,3,4,5])).to.throw('Invalid input!');
            expect(()=>lottery.secondChance({},[0,1,2,3,4,5])).to.throw('Invalid input!');
            expect(()=>lottery.secondChance(true,[0,1,2,3,4,5])).to.throw('Invalid input!');
            expect(()=>lottery.secondChance(1,'')).to.throw('Invalid input!');
            expect(()=>lottery.secondChance(1,1)).to.throw('Invalid input!');
            expect(()=>lottery.secondChance(1,'a')).to.throw('Invalid input!');
            expect(()=>lottery.secondChance(1,{})).to.throw('Invalid input!');
            expect(()=>lottery.secondChance(1,true)).to.throw('Invalid input!');
        });
    });
});
