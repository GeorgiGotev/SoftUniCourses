const movieTheater = require("./03. Movie Theater _Resources");
const {expect, assert}=require ('chai');

describe("movieTheater …", function() {
    describe("ageRestrictions …", function() {

        it("true …", function() {
           expect(movieTheater.ageRestrictions('G')).to.eq('All ages admitted to watch the movie');
           expect(movieTheater.ageRestrictions('PG')).to.eq('Parental guidance suggested! Some material may not be suitable for pre-teenagers');
           expect(movieTheater.ageRestrictions('R')).to.eq('Restricted! Under 17 requires accompanying parent or adult guardian');
           expect(movieTheater.ageRestrictions('NC-17')).to.eq('No one under 17 admitted to watch the movie');
           expect(movieTheater.ageRestrictions('a')).to.eq('There are no age restrictions for this movie');
        });
      //   it("TODO …", function() {
           
      //   });
     });
     describe("moneySpent …", function() {

        it("true …", function() {
           expect(movieTheater.moneySpent(1,['Nachos', 'Popcorn'],['Soda', 'Water'])).to.eq('The total cost for the purchase is 29.50');
           expect(movieTheater.moneySpent(2,['Nachos', 'Popcorn'],['Soda', 'Water'])).to.eq('The total cost for the purchase is 44.50');
           expect(movieTheater.moneySpent(3,['Nachos', 'Popcorn'],['Soda', 'Water'])).to.eq('The total cost for the purchase with applied discount is 47.60');
           expect(movieTheater.moneySpent(4,['Nachos', 'Popcorn'],['Soda', 'Water'])).to.eq('The total cost for the purchase with applied discount is 59.60');
        });
        it("validate Input …", function() {
           expect(()=>movieTheater.moneySpent(1,[],1)).to.throw('Invalid input');
           expect(()=>movieTheater.moneySpent(1,[],true)).to.throw('Invalid input');
           expect(()=>movieTheater.moneySpent(1,[],'1')).to.throw('Invalid input');
           expect(()=>movieTheater.moneySpent(1,[],{})).to.throw('Invalid input');
           expect(()=>movieTheater.moneySpent(1,1,[])).to.throw('Invalid input');
           expect(()=>movieTheater.moneySpent(1,true,1)).to.throw('Invalid input');
           expect(()=>movieTheater.moneySpent(1,{},1)).to.throw('Invalid input');
           expect(()=>movieTheater.moneySpent([],[],[])).to.throw('Invalid input');
           expect(()=>movieTheater.moneySpent('a',[],[])).to.throw('Invalid input');
           expect(()=>movieTheater.moneySpent([],[],[])).to.throw('Invalid input');
           expect(()=>movieTheater.moneySpent([],[],[])).to.throw('Invalid input');
           expect(()=>movieTheater.moneySpent(true,[],[])).to.throw('Invalid input');
        });
     });
     describe("reservation …", function() {

        it("true …", function() {
           expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }],5)).to.eq(2);
           expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }],7)).to.eq(1);
           expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }],6)).to.eq(1);
           expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }],4)).to.eq(2);
        });
        it("validate …", function() {
           expect(()=>movieTheater.reservation([],[])).to.throw('Invalid input');
           expect(()=>movieTheater.reservation([],'a')).to.throw('Invalid input');
           expect(()=>movieTheater.reservation([],true)).to.throw('Invalid input');
           expect(()=>movieTheater.reservation([],{})).to.throw('Invalid input');
           expect(()=>movieTheater.reservation([],'a')).to.throw('Invalid input');
           expect(()=>movieTheater.reservation([],'s')).to.throw('Invalid input');
           expect(()=>movieTheater.reservation([],true)).to.throw('Invalid input');
           expect(()=>movieTheater.reservation([],{})).to.throw('Invalid input');
           expect(()=>movieTheater.reservation([],[])).to.throw('Invalid input');
           expect(()=>movieTheater.reservation([],[])).to.throw('Invalid input');
        });
     });

     
});
