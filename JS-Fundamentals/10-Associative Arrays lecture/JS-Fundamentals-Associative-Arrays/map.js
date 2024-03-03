let phoneBookMap = new Map();

// add multiple items in map during initialization
// let map = new Map([
//     ['ivo', '123123'],
//     ['gosho', '1232343'],
// ])
// console.log(map);

phoneBookMap.set('pesho', '1231321321');
phoneBookMap.set('gosho', '2331321121');
phoneBookMap.set('mariyka', '4313asd321');

console.log(phoneBookMap.get('pesho'));

console.log(phoneBookMap.size);

if (phoneBookMap.has('gosho')) {
    console.log('Gosho is in the house!');
}

// phoneBookMap.delete('gosho');

// iterate kyes in map
for (const key of phoneBookMap.keys()) {
    console.log(key);
}

// iterate values in map
for (const value of phoneBookMap.values()) {
    console.log(value);
}

// iterate entries in map
for (const kvp of phoneBookMap.entries()) {
    console.log(`${kvp[0]} -> ${kvp[1]}`);
}

// iterate map (same as above)
for (const kvp of phoneBookMap) {
    console.log(`${kvp[0]} -> ${kvp[1]}`);
}

// iterate with foreach method
phoneBookMap.forEach((value, key) => {
    console.log(`${key} -> ${value}`);
});

// convert map to object
let pb = Object.fromEntries(phoneBookMap.entries());

