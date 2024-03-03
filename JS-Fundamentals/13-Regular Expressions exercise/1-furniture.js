function furniture(arr) {
    let pattern=/>>(?<name>[A-Za-z+]+)<<(?<price>\d+\.*\d*)!(?<count>\d+)/g;
    let totalPrice=0;
    let line=arr.shift();
    console.log('Bought furniture:');
    while(line!=='Purchase'){
        
       let product = pattern.exec(line);
       while(product!== null){
        console.log(product.groups.name);
        totalPrice+=Number(product.groups.price) * Number(product.groups.count)
        product = pattern.exec(line);
    }

        line=arr.shift();
    }
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);

}
furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']
);