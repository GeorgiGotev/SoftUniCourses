function solve(input){
    let rawText=input.shift();

    let line=input.shift();
    while(line!=='Abracadabra'){
        let [action, ...commands]=line.split(' ');
        switch(action){
            case 'Abjuration':
                rawText=rawText.toUpperCase();
                console.log(rawText);
                break;
            case 'Necromancy':
                rawText=rawText.toLowerCase();
                console.log(rawText);
                break;
            case 'Illusion':
                let index=Number(commands[0]);
                if(index>=0 && index<rawText.length){
                    rawText=rawText.replace(rawText[index], commands[1])
                    console.log('Done!');
                }else{
                    console.log('The spell was too weak.');
                }
                break;
            case 'Divination':
                if(rawText.includes(commands[0])){
                    let forReplace=commands[0];
                    while(rawText.includes(forReplace)){
                        rawText=rawText.replace(forReplace, commands[1]);
                    }
                    console.log(rawText);
                }
                break;
            case 'Alteration':
                let forRemove=commands[0];
                rawText=rawText.replace(forRemove,'');
                console.log(rawText);
                break;
                default:
                    console.log('The spell did not work!');
                    break;
        }

        line=input.shift();
    }
}
solve(["SwordMaster",
"Target Target Target",
"Abjuration",
"Necromancy",
"Alteration master",
"Abracadabra"])
;
