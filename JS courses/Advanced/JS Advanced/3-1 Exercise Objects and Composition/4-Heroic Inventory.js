function solve(arr) {
    // let result = [];

    // arr.forEach(person => {
    //     let [name, level, items] = person.split(' / ');
    //     level = Number(level);
    //     result.push({ name, level, items: items ? items.split(', ') : [] })
    // });

    const result=arr.reduce((acc,el)=>{
        let [name, level,items] = el.split(' / ');
        let obj={ name,level:Number(level), items: items ? items.split(', ') : [] };
        acc.push(obj);
        return acc;
    },[]);

    console.log(JSON.stringify(result));
}
solve(['Jake / 1000 / Gauss, HolidayGrenade']);
solve(['Isacc / 25 / Apple',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);