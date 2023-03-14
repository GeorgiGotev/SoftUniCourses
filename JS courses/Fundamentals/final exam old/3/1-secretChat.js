function secretChat(input){
    let inputMessage=input.shift();
    let line=input.shift();

    while(line!=='Reveal'){
        let [command, cm1 , cm2]=line.split(':|:');
        switch(command){
            case 'InsertSpace':
            cm1=Number(cm1);
            
            let start=inputMessage.substring(0,cm1);
            let last =inputMessage.substring(cm1);
            inputMessage=start + ' ' + last;
            console.log(inputMessage);
                 break;
            case 'Reverse':
            if(inputMessage.includes(cm1)){
                let startIndexOfMessage=inputMessage.indexOf(cm1);
                let wordForReverse=inputMessage.substring(startIndexOfMessage,cm1.length+startIndexOfMessage);
                let result=wordForReverse.split('').reverse().join('');
                let first=inputMessage.substring(0,startIndexOfMessage)
                let last =inputMessage.substring(cm1.length+startIndexOfMessage);
                
                inputMessage=first + result + last;
                console.log(inputMessage);
            }else{
                console.log('error');
            }
            
                 break;
            case 'ChangeAll':
            while(inputMessage.includes(cm1)){
                inputMessage=inputMessage.replace(cm1,cm2);
            }
            console.log(inputMessage);
                 break;
        }
        line=input.shift();
    }
console.log(`You have a new text message: ${inputMessage}`);

}
secretChat([
    'Hiware?uiyGeorge',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ]
  
  );