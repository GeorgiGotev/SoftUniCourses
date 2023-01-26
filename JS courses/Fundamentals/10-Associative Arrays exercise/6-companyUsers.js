function companyUsers(input) {
    let companyObj = {};
    for (const line of input) {

        let [company, id] = line.split(' -> ')

        if (!companyObj[company]) {
            companyObj[company] = []
        }

        if (!companyObj[company].includes(id)) {
            companyObj[company].push(id)
        }
    }

    let sorted = Object.entries(companyObj).sort((a, b) => a[0].localeCompare(b[0]))

    for (let [key, value] of sorted) {
        console.log(key);
        for (const id of value) {
            console.log(`-- ${id}`);
        }
    }
}


companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]


);