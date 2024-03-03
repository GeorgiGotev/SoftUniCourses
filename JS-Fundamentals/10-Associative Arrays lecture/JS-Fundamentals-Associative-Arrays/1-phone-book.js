function printPhoneBook(input) {
    let phoneBook = {};

    for (const entry of input) {
        // let [name, phone] = entry.split(' '); // ['Tim', '0834212554']

        let entryArr = entry.split(' '); // ['Tim', '0834212554']
        // phoneBook[entryArr[0]] = entryArr[1];
        let name = entryArr[0];
        let phone = entryArr[1];

        phoneBook[name] = phone;
    }

    for (let name in phoneBook) {
        console.log(`${name} -> ${phoneBook[name]}`);
    }
}

printPhoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
);
