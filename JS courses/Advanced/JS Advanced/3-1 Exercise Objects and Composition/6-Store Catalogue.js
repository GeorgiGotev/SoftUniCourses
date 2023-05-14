function solve(arr) {
    let obj = {};
    arr.forEach(product => {
        let [name, price] = product.split(' : ');
        price = Number(price);
        obj[name] = price;
    });
    let sorted = Object.keys(obj).sort((a, b) => a.localeCompare(b));

    let firstLetter = '';
    for (const name of sorted) {
        if (firstLetter !== name[0]) {
            firstLetter = name[0];
            console.log(firstLetter);
        }
        console.log(`  ${name}: ${obj[name]}`);
    }
}
solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
);