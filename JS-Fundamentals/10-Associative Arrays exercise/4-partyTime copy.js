function partyTime(inputOfGuests) {

    let vipList = [];
    let regularList = [];

    let currGuest = inputOfGuests.shift();
    while (currGuest !== 'PARTY') {
        let vip = isNaN(currGuest[0]);
        if (!vip) {
            vipList.push(currGuest);
        } else {
            regularList.push(currGuest);
        }
        currGuest = inputOfGuests.shift();
    }
    let all = vipList.concat(regularList);

    for (const guest of inputOfGuests) {
        all.splice(all.indexOf(guest), 1)
    }
    console.log(all.length);


    for (const guest of all) {
        console.log(guest);
    }

}
partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]





);