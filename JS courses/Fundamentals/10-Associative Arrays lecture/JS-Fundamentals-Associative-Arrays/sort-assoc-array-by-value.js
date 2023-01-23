let addressBook = {
    Bob: 'Redwing Ave',
    John: 'Grover Rd',
    Peter: 'Huxley Rd',
    George: 'Mesta Crossing',
    Ted: 'Gateway Way',
    Bill: 'Gateway Way',
    Jeff: 'Huxley Rd'
};

let addressBookEntries = Object.entries(addressBook);

addressBookEntries.sort((entryA, entryB) => entryA[1].localeCompare(entryB[1]))
// addressBookEntries.sort(([keyA, valueA], [keyB, valueB]) => valueA.localeCompare(valueB))

console.log(addressBookEntries);


