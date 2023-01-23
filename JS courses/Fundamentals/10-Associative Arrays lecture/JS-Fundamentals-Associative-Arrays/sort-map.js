let phoneBook = new Map();

phoneBook.set('ivaylo', '11651621'); 
phoneBook.set('pesho', '11651623'); 
phoneBook.set('gosho', '11651634'); 
phoneBook.set('stamat', '11651645'); 
phoneBook.set('mariyka', '11651624'); 

let phoneBookEntries = Array.from(phoneBook.entries());

phoneBookEntries.sort((entryA, entryB) => entryA[0].localeCompare(entryB[0]));

console.log(phoneBookEntries);
