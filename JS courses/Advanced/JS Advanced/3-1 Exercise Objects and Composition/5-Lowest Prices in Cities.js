function solve(arr){
    let obj={}
    
arr.forEach(townInfo => {
    let [name,product,price]=townInfo.split(' | ');
    price=Number(price);
    if(!obj.hasOwnProperty(product)){
        obj[product]={
            name,
            price,
        };
    }
    if(price<obj[product].price){
        obj[product].price=price;
        obj[product].name=name;
    }
});
    let result=Object.entries(obj);
    for (const key of result) {
        console.log(`${key[0]} -> ${key[1].price} (${key[1].name})`);
    }
}
solve(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
);