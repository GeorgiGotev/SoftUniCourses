function solve(arr){

    let store={};
    let result={};

    arr.forEach(line => {
        let [product, quantity]=line.split(' => ');
        if(!store[product]){
            store[product]=0;
        }
        store[product]+=Number(quantity)
        
        if(store[product]>=1000){
            let bottles=Math.floor(store[product]/1000)
            store[product]-=bottles*1000;
            if(!result[product]){
                result[product]=0;
            }
            result[product]+=bottles
        }
    });
    for (const key in result) {
        console.log(`${key} => ${result[key]}`);
    }
}
solve(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']);