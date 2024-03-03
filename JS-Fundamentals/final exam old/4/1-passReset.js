function passReset(input) {
    let rawPass = input.shift();

    let line = input.shift();
    while (line !== 'Done') {
        let action = line.split(' ');
        let command = action.shift();
        switch (command) {
            case 'TakeOdd':
                let newPass = '';
                for (let i = 0; i < rawPass.length; i++) {
                    if (i % 2 !== 0) {
                        newPass += rawPass[i];
                    }
                }
                rawPass = newPass;
                console.log(rawPass);
                break;
            case 'Cut':
                let index = Number(action[0]);
                let length = Number(action[1]);
                let cut = rawPass.substring(index, index + length);
                rawPass = rawPass.replace(cut, '');
                console.log(rawPass);
                break;
            case 'Substitute':
                let sub = action[0];
                let forReplace = action[1];
                if (rawPass.includes(sub)) {
                    while (rawPass.includes(sub)) {
                        rawPass = rawPass.replace(sub, forReplace);
                    }
                    console.log(rawPass);
                } else {
                    console.log('Nothing to replace!');
                }

                break;
        }
        line = input.shift();
    }
    console.log(`Your password is: ${rawPass}`);
}
passReset((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"])
);