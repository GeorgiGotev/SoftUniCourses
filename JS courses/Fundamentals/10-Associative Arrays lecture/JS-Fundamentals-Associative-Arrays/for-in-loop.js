let phoneBook = {
    ivaylo: '11651621',
    pesho: '11651623',
    gosho: '11651634',
    stamat: '11651645',
    mariyka: '11651624',
};

for (let name in phoneBook) {
    console.log(`${name} -> ${phoneBook[name]}`);
}

// for in with arrays
let names = ['pesho', 'gosho', 'stamat'];
for (let index in names) {
    console.log(index);
}

