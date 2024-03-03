class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }
    addBook (bookName, bookAuthor){
        if(this.capacity===0){
            throw new Error("Not enough space in the collection.")
        }
        this.capacity--;
        this.books.push({bookName,bookAuthor,payed:false});
        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }
    payBook( bookName ) {
        let currBook=this.books.find(x=>x.bookName===bookName);
        if(!currBook){
            throw new Error(`${bookName} is not in the collection.`)
        }
        if(currBook.payed){
            throw new Error(`${bookName} has already been paid.`)
        }
        currBook.payed=true;
        return `${bookName} has been successfully paid.`
    }
    removeBook(bookName) {
        let currBook=this.books.find(x=>x.bookName===bookName);
        if(!currBook){
            throw new Error(`The book, you're looking for, is not found.`)
        }
        if(!currBook.payed){
            throw new Error(`${bookName} need to be paid before removing from the collection.`)
        }
        let index=this.books.indexOf(currBook);
        this.books.splice(index,1);
        this.capacity++;
        return `${bookName} remove from the collection.`
    }
    getStatistics(bookAuthor){
        if(bookAuthor===undefined){
            let result=[`The book collection has ${this.capacity} empty spots left.`];
            this.books.map(x=>{
                if(x.payed){
                    x.payed='Has Paid';
                }else{
                    x.payed='Not Paid';
                }
            })
            this.books.sort((a,b)=>a.bookName.localeCompare(b.bookName)).map(x=> result.push(`${x.bookName} == ${x.bookAuthor} - ${x.payed}.`));
            return result.join('\n').trim();
        }else{
          if(!this.books.find(x=>x.bookAuthor===bookAuthor)){
            throw new Error(`${bookAuthor} is not in the collection.`)
          }
          let pay=''
          this.books.map(x=>{
            x.payed===true ? pay='Has Paid' : pay='Not Paid'
        })
            let output='';
            this.books.map(x=>output+=`${x.bookName} == ${x.bookAuthor} - ${pay}.\n`);
            return output.trim();
        }
    }
}
const library = new LibraryCollection(2)
console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
console.log(library.getStatistics('Miguel de Cervantes'));
// const library = new LibraryCollection(5)
// library.addBook('Don Quixote', 'Miguel de Cervantes');
// library.payBook('Don Quixote');
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// library.addBook('Ulysses', 'James Joyce');
// console.log(library.getStatistics());





