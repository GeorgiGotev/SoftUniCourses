function partyTime(inputOfGuests) {
    let vipList = [];
    let regularList = [];

    let flag = false;
    for (const line of inputOfGuests) {
        if (line === 'PARTY') {
            flag = true;
        }
        if (!flag) {
            if (!isNaN(line[0])) {
                vipList.push(line)
            } else {
                regularList.push(line)
            }
        } else {
            if (vipList.includes(line)) {
                vipList.splice(vipList.indexOf(line), 1)
            } else if (regularList.includes(line)) {
                regularList.splice(regularList.indexOf(line), 1)
            }
        }
    }

    let all = vipList.concat(regularList);
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