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
                let result=cm1.split('').reverse().join('');
                 inputMessage=inputMessage.replace(cm1,'');
                inputMessage=inputMessage + result;
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
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ]
  
  );