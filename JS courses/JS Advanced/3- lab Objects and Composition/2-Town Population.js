function solve(arr){
    let obj={};
    arr.forEach(data => {
        let [town, population]=data.split(' <-> ');
        population=Number(population);
        if(!obj.hasOwnProperty(town)){
            obj[town]=population;
        }else{
            obj[town]+=population;
        }
    });
    for (const key in obj) {
        console.log(`${key} : ${obj[key]}`);
    }
}
solve(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
);