function pirates(data) {
    let obj={};
    let command=data.shift();
    let counter=0;
    while(command!=='Sail'){
        let [city,people,treasure]=command.split('||');
        people=Number(people);
        treasure=Number(treasure);
        if(!obj[city]){
            obj[city]={
                population:0,
                gold:0
            }
        }
        obj[city].population+=people;
        obj[city].gold+=treasure;
        command=data.shift();
    }
    let line=data.shift();
    while(line!=='End'){
        let [action, ...token]=line.split('=>');
        switch(action){
            case 'Plunder':
               let city=token[0];
               let population=Number(token[1]);
               let gold =Number(token[2]);
               if(obj.hasOwnProperty(city)){
                obj[city].population-=population;
                obj[city].gold-=gold;
               }
               console.log(`${city} plundered! ${gold} gold stolen, ${population} citizens killed.`);
               if(obj[city].gold===0 || obj[city].population===0){
                console.log(`${city} has been wiped off the map!`);
                delete obj[city];
               }
                break;
            case 'Prosper':
                let town=token[0];
                let addedGold=Number(token[1]);
                if(addedGold<0){
                    console.log('Gold added cannot be a negative number!');
                }else{
                    obj[town].gold+=addedGold;
                    console.log(`${addedGold} gold added to the city treasury. ${town} now has ${obj[town].gold} gold.`);
                }
                break;
        }
        line=data.shift();
    }
    for (const key in obj) {
        counter++;
    }
    if(counter>0){
        console.log(`Ahoy, Captain! There are ${counter} wealthy settlements to go to:`);
        
    for (const key in obj) {
        console.log(`${key} -> Population: ${obj[key].population} citizens, Gold: ${obj[key].gold} kg`);
    }
}else{
    console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
}
}
pirates(["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"]);
