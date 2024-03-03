function partyTime(inputOfGuests) {
    let vipList = [];
    let regularList = [];


    let partyIndex = inputOfGuests.indexOf('PARTY');

    for (let i = 0; i < partyIndex; i++) {
        if (!isNaN(inputOfGuests[i][0])) {
            vipList.push(inputOfGuests[i])
        } else {
            regularList.push(inputOfGuests[i])
        }
    }
    let all = vipList.concat(regularList);

    for (let i = partyIndex + 1; i < inputOfGuests.length; i++) {
        all.splice(all.indexOf(inputOfGuests[i]), 1);
    }
    console.log(all.length);
    all.forEach(guest => {
        console.log(guest);
    });
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