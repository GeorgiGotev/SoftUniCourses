function solve(arr) {
    let obj = {};

    arr.forEach((line) => {
        let [carBrand, model, num] = line.split(' | ');
        num = Number(num);
        
        if(!obj.hasOwnProperty(carBrand)){
            obj[carBrand]={};
        }
        if(!obj[carBrand].hasOwnProperty(model)){
            obj[carBrand][model]=num;
        }else{
            obj[carBrand][model]+=num;
        }


        // data[brand] = data[brand] || {}
		// data[brand][model] = data[brand][model] || 0
		// data[brand][model] += Number(q)



    });
    let entries=Object.entries(obj)
    for (const key of entries) {
        console.log(key[0]);
        for (const model in key[1]) {
           console.log(`###${model} -> ${key[1][model]}`);
        }
    }
}
solve([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10',
]);
