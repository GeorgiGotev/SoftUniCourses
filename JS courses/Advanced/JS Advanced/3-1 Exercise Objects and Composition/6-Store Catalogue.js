// function solve(arr) {
//     let obj = {};
//     arr.forEach(product => {
//         let [name, price] = product.split(' : ');
//         price = Number(price);
//         obj[name] = price;
//     });
//     let sorted = Object.keys(obj).sort((a, b) => a.localeCompare(b));

//     let firstLetter = '';
//     for (const name of sorted) {
//         if (firstLetter !== name[0]) {
//             firstLetter = name[0];
//             console.log(firstLetter);
//         }
//         console.log(`  ${name}: ${obj[name]}`);
//     }
// }

function solve(arr){
    let obj={};
    let sorted=arr.sort((a,b)=>a.localeCompare(b));

    
    sorted.forEach(line => {
        let firstLetter=line[0];
        
        if(obj[firstLetter]===undefined){
            obj[firstLetter]=[];
        }
        // let element=line.split(' : ').join(': '); just to move the dots with one position on left;
        obj[firstLetter].push(`  ${line.split(' : ').join(': ')}`);
    });
    
    // for (const key in obj) {
    //     console.log(key);
    //     for (const items of obj[key]) {
    //         console.log(items);
    //     }
    // }



    //hard way:
    let result=[];
    for (const key in obj) {
        let element=obj[key];
        result= [...result,key,...element];
    }
console.log(result.join('\n'));

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