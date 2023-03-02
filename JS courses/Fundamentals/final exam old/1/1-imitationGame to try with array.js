function imitationGame(input) {
    // to do same logic with array
    let encryptMessage = input.shift();
    let line = input.shift();

    while (line !== 'Decode') {
        let [command, first, second] = line.split('|');

        switch (command) {
            case 'Move':
                
                first = Number(first);
                let forMove = encryptMessage.substring(0, first);
                let newOne = encryptMessage.replace(forMove, '')

                encryptMessage = newOne + forMove;

                break;
            case 'Insert':

                first = Number(first)
                encryptMessage = encryptMessage.slice(0, first) + second + encryptMessage.slice(first,)
                break;
            case 'ChangeAll':

                while (encryptMessage.includes(first)) {

                    encryptMessage = encryptMessage.replace(first, second);
                }
                break;
        }

        line = input.shift();
    }
    console.log(`The decrypted message is: ${encryptMessage}`);
}
imitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
]
);