function solve(input){
    let obj={};
    let line=input.shift();
    while(line!=='End'){
        let [command, ...commands]=line.split(' ');
        let hero=commands[0];
        let spellName=commands[1];
        switch(command){
            case 'Enroll':
                if(!obj[hero]){
                    obj[hero]=[];
                }else{
                    console.log(`${hero} is already enrolled.`);
                }
                break;
            case 'Learn':
                if(!obj[hero]){
                    console.log(`${hero} doesn't exist.`);
                }else{
                    if(obj[hero].includes(spellName)){
                        console.log(`${hero} has already learnt ${spellName}.`);
                    }else{
                        obj[hero].push(spellName);
                    }
                }
                break;
            case 'Unlearn':
                if(!obj[hero]){
                    console.log(`${hero} doesn't exist.`);
                }else if(!obj[hero].includes(spellName)){
                    console.log(`${hero} doesn't know ${spellName}.`);
                }else{
                    let indexOf=obj[hero].indexOf(spellName);
                    obj[hero].splice(indexOf,1);
                }
                
                break;
        }
        line=input.shift();
        }
        console.log('Heroes:');
        for (const key in obj) {
            console.log(`== ${key}: ${obj[key].join(', ')}`);
        }
}
solve(["Enroll Stefan",
"Enroll Peter",
"Enroll Stefan",
"Learn Stefan ItShouldWork",
"Learn John ItShouldNotWork",
"Unlearn George Dispel",
// "Unlearn Stefan ItShouldWork",
"End"]);
