function solution() {
    let library = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    }
    let store = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    }

    function manager(input) {
        let [command, action, quantity] = input.split(' ');
        quantity = Number(quantity);
        if (command === 'prepare') {
            const recipe = library[action];
            
            for (const el in recipe) {
                
                if (recipe[el] * quantity > store[el]) {
                    return `Error: not enough ${el} in stock`
                }
            }
            for (const el in recipe) {
                store[el] -= recipe[el] * quantity;
            }
            return 'Success';
        } else if (command === "restock") {
            store[action] += quantity;
            return 'Success';
        } else if (command === "report") {
            let result = [];
            for (const el in store) {
                result.push(`${el}=${store[el]}`);
            }
            return result.join(' ');
        }
    }
    return manager;
}






let manager = solution();
console.log(manager("restock flavour 50")); // Success 
console.log(manager("prepare lemonade 4"));
console.log(manager("restock carbohydrate 10")); // Error: not enough carbohydrate in stock 
console.log(manager("restock flavour 10")); // Error: not enough carbohydrate in stock 
console.log(manager("prepare apple 1")); // Error: not enough carbohydrate in stock 
console.log(manager("restock fat 10")); // Error: not enough carbohydrate in stock 
console.log(manager("prepare burger 1")); // Error: not enough carbohydrate in stock 
console.log(manager("report")); // Error: not enough carbohydrate in stock 
console.log(manager("report")); // Error: not enough carbohydrate in stock 
console.log(manager("report")); // Error: not enough carbohydrate in stock 
console.log(manager("report")); // Error: not enough carbohydrate in stock 

console.log(manager("report")); // Error: not enough carbohydrate in stock 
// Error: not enough carbohydrate in stock 

