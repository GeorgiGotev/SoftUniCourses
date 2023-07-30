// function solve(arr){
//     let obj={}

// arr.forEach(townInfo => {
//     let [name,product,price]=townInfo.split(' | ');
//     price=Number(price);
//     if(!obj.hasOwnProperty(product)){
//         obj[product]={
//             name,
//             price,
//         };
//     }
//     if(price<obj[product].price){
//         obj[product].price=price;
//         obj[product].name=name;
//     }
// });
//     let result=Object.entries(obj);
//     for (const key of result) {
//         console.log(`${key[0]} -> ${key[1].price} (${key[1].name})`);
//     }
// }


function solve(arr) {

    let result = {};

    arr.forEach(element => {
        const [town, product, price] = element.split(' | ');
        if (!result[product]) {
            result[product] = {};
        }
        result[product][town] = Number(price);
    });

    for (const [product, townsWithPrices] of Object.entries(result)) {
        let sorted = Object.entries(townsWithPrices).sort((a, b) => a[1] - b[1]);
        const [town, price] = sorted[0];
        console.log(`${product} -> ${price} (${town})`);
    }
}
solve(['Sample Town | Sample Product | 100010',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
);