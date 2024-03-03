function activationKey(data) {
    let rawKey = data.shift();

    for (const line of data) {
        if (line === 'Generate') {
            break;
        }
        let [command, ...action] = line.split('>>>');
        switch (command) {
            case 'Contains':
                rawKey.includes(action[0]) ? console.log(`${rawKey} contains ${action[0]}`)
                    : console.log('Substring not found!');
                break;
            case 'Flip':
                let startIndex=Number(action[1]);
                let endIndex=Number(action[2]);
                let substr= rawKey.substring(startIndex,endIndex);
                action[0]==='Upper' ? substr=substr.toUpperCase() : substr=substr.toLowerCase();
                rawKey = rawKey.substring(0,startIndex) + substr + rawKey.substring(endIndex);
                console.log(rawKey);
                break;
            case 'Slice':
                let firstIndex=Number(action[0]);
                let lastIndex=Number(action[1]);
                rawKey = rawKey.substring(0,firstIndex) + rawKey.substring(lastIndex);
                console.log(rawKey);
                break;
        }
    }
    console.log(`Your activation key is: ${rawKey}`);
}
activationKey(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"]);
