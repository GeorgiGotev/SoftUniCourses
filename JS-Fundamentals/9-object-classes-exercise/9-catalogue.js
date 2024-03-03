function catalogue(input) {
    let products = {};
    for (const line of input) {
        let [name, price] = line.split(' : ');
        products[name] = Number(price);
    }

    let sorted = Object.keys(products).sort((a, b) => a.localeCompare(b));
    let char=''
    for (const key of sorted) {
        if(char!==key[0]){
            char=key[0];
            console.log(char);
        }
        
        console.log(`  ${key}: ${products[key]}`);
    }

}
catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]
);