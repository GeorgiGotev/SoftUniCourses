function solve(arr){
    let result=[];
    
    arr.forEach(person => {
        let [name,level,items]=person.split(' / ');
        level=Number(level);
        items=items? items.split(', ') : [];
        result.push({name,level,items})
    });
    
    console.log(JSON.stringify(result));
}
solve(['Jake / 1000 / Gauss, HolidayGrenade']);
solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']);