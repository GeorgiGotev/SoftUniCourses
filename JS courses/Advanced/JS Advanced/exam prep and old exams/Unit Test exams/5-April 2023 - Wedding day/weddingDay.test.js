const weddingDay = require("./weddingDay");
const{assert,expect}= require ('chai');

describe("Tests weddingDay", function() {
    describe("pickVenue", function() {
        it("true", function() {
            expect(weddingDay.pickVenue(150,120,'Varna')).to.eq('This venue meets the requirements, with capacity of 150 guests and 120$ cover.');
        });
        it('false', ()=>{
            expect(weddingDay.pickVenue(149,121,'Varna')).to.eq('This venue does not meet your requirements!');
            expect(()=>weddingDay.pickVenue(150,120,'a')).to.throw('The location of this venue is not in the correct area!');
            expect(()=>weddingDay.pickVenue('','','')).to.throw('Invalid Information!');
            expect(()=>weddingDay.pickVenue([],[],1)).to.throw('Invalid Information!');
            expect(()=>weddingDay.pickVenue(1,[],[])).to.throw('Invalid Information!');
            expect(()=>weddingDay.pickVenue([],true,[])).to.throw('Invalid Information!');
            expect(()=>weddingDay.pickVenue([],[],false)).to.throw('Invalid Information!');
        })
     });
     describe('otherSpendings',()=>{
        it('true',()=>{
            let decoArr=['flowers', 'Fabric drapes and curtains'];
            let photoArr=['pictures','video']
            expect(weddingDay.otherSpendings(decoArr,photoArr,true)).to.eq(`You spend 2465$ for wedding decoration and photography with 15% discount!`)
            expect(weddingDay.otherSpendings(decoArr,photoArr,false)).to.eq('You spend 2900$ for wedding decoration and photography!')
        })
        it('false',()=>{
            expect(()=>weddingDay.otherSpendings(1,1,1)).to.throw('Invalid Information!');
            expect(()=>weddingDay.otherSpendings('a','a','a')).to.throw('Invalid Information!');
            expect(()=>weddingDay.otherSpendings([],[],'a')).to.throw('Invalid Information!');
            expect(()=>weddingDay.otherSpendings([],[],1)).to.throw('Invalid Information!');
            expect(()=>weddingDay.otherSpendings(true,[],false)).to.throw('Invalid Information!');
            expect(()=>weddingDay.otherSpendings('a',1,true)).to.throw('Invalid Information!');
            expect(()=>weddingDay.otherSpendings([],'a',true)).to.throw('Invalid Information!');
            expect(()=>weddingDay.otherSpendings('',{},[])).to.throw('Invalid Information!');
        });
     });
     describe('tableDistribution',()=>{
        it('true',()=>{
            expect(weddingDay.tableDistribution(5,1)).to.eq('There is only 5 people on every table, you can join some tables.');
            expect(weddingDay.tableDistribution(6,1)).to.eq("You have 1 tables with 6 guests on table.");
        })
        it('false',()=>{
            // expect()
        })
     })
});
