// declare associative array
let phoneBook = {
    ivaylo: '11651621',
    pesho: '11651623',
    gosho: '11651634',
    stamat: '11651645',
    mariyka: '11651624',
};

// convert associative array to normal array
let phoneBookEntries = Object.entries(phoneBook);

// sort the array
// phoneBookEntries.sort(([keyA], [keyB]) => keyA.localeCompare(keyB) );
phoneBookEntries.sort((kvpA, kvpB) => kvpA[0].localeCompare(kvpB[0]));

// optional: convert back to associative array
let sortedPhoneBook = Object.fromEntries(phoneBookEntries);

console.log(sortedPhoneBook);
