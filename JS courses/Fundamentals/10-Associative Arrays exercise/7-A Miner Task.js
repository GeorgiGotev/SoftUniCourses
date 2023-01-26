function minerTask(input) {
    let obj = {}
    for (let i = 0; i < input.length; i += 2) {
        let resource = input[i]
        let quantity = Number(input[i + 1])

        if (!obj.hasOwnProperty(resource)) {
            obj[resource] = 0;
        }
        obj[resource] += Number(quantity);

    }
    for (const key in obj) {
        console.log(`${key} -> ${obj[key]}`);
    }
}
minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]

);