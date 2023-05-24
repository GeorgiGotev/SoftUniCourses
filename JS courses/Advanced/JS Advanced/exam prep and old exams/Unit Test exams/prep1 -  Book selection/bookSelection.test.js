const bookSelection = require('./bookSelection');
const { expect, assert } = require('chai');

describe('tests', () => {
    describe('isGenreSuitable', () => {
        it('wrong age', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 12)).to.equal(
                'Books with Thriller genre are not suitable for kids at 12 age'
            );
            expect(bookSelection.isGenreSuitable('Horror', 12)).to.equal(
                'Books with Horror genre are not suitable for kids at 12 age'
            );
        });
        it('age above 12', () => {
            const text = `Those books are suitable`;
            expect(bookSelection.isGenreSuitable('Horror', 13)).to.equal(text);
            expect(bookSelection.isGenreSuitable('Horror', 25)).to.equal(text);
            expect(bookSelection.isGenreSuitable('Thriller', 13)).to.equal(
                text
            );
            expect(bookSelection.isGenreSuitable('Thriller', 25)).to.equal(
                text
            );
        });
    });
    describe('isItAffordable', () => {
        it('can afford', () => {
            expect(bookSelection.isItAffordable(1, 2)).to.equal(
                'Book bought. You have 1$ left'
            );
            expect(bookSelection.isItAffordable(1, 1)).to.equal(
                'Book bought. You have 0$ left'
            );
        });
        it('can not afford', () => {
            const text = "You don't have enough money";
            expect(bookSelection.isItAffordable(3, 2)).to.be.equal(text);
        });
        it('check if input is number', () => {
            expect(() => bookSelection.isItAffordable(1, 'a')).to.throw(
                'Invalid input'
            );
            expect(() => bookSelection.isItAffordable('a', 1)).to.throw(
                'Invalid input'
            );
            expect(() => bookSelection.isItAffordable('a', '1')).to.throw(
                'Invalid input'
            );
            expect(() => bookSelection.isItAffordable('1', '1')).to.throw(
                'Invalid input'
            );
            expect(() => bookSelection.isItAffordable('a', 'b')).to.throw(
                'Invalid input'
            );
        });
    });
    describe('suitableTitles (books, wantedGenre)', () => {
        it('check if added obj are correct', () => {
            expect(() => bookSelection.suitableTitles('a', 'b')).to.throw(
                'Invalid input'
            );
            expect(() => bookSelection.suitableTitles(1, 'b')).to.throw(
                'Invalid input'
            );
            expect(() => bookSelection.suitableTitles('a', 1)).to.throw(
                'Invalid input'
            );
            expect(() => bookSelection.suitableTitles({}, 1)).to.throw(
                'Invalid input'
            );
            expect(() => bookSelection.suitableTitles({}, [])).to.throw(
                'Invalid input'
            );
            expect(() => bookSelection.suitableTitles(1, 2)).to.throw(
                'Invalid input'
            );
            expect(() => bookSelection.suitableTitles({}, {})).to.throw(
                'Invalid input'
            );
            expect(() =>
                bookSelection.suitableTitles(
                    [{ title: 'The Da Vinci Code', genre: 'Thriller' }],
                    1
                )
            ).to.throw('Invalid input');
            expect(() =>
                bookSelection.suitableTitles(
                    [{ title: 'The Da Vinci Code', genre: 'Thriller' }],
                    {}
                )
            ).to.throw('Invalid input');
            expect(() =>
                bookSelection.suitableTitles(
                    [{ title: 'The Da Vinci Code', genre: 'Thriller' }],
                    []
                )
            ).to.throw('Invalid input');
            it('correct', () => {
                let inputArr = [
                    { title: 'The Da Vinci Code', genre: 'Thriller' },
                    { title: 'The Da Vinci Code1', genre: 'Thriller' },
                    { title: 'The Da Vinci Code2', genre: 'Horror' },
                ];
                let result = ['The Da Vinci Code', 'The Da Vinci Code1'];
                expect(
                    bookSelection.suitableTitles(inputArr, 'Thriller').join(' ')
                ).to.equal(result.join(' '));
            });
            let inputArr = [
                { title: 'The Da Vinci Code', genre: 'Thriller' },
                { title: 'The Da Vinci Code1', genre: 'Thriller' },
                { title: 'The Da Vinci Code2', genre: 'Horror' },
            ];
            let result2 = ['The Da Vinci Code2'];
            expect(
                bookSelection.suitableTitles(inputArr, 'Horror').join(' ')
            ).to.equal(result2.join(' '));
        });
    });
});
