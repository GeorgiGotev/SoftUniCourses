function encodeAndDecodeMessages() {
    let firstInputElement = document.querySelector('div>textarea');
    let secondInputElement = document.querySelector('div:nth-child(2) textarea');

    document.querySelector('div>button').addEventListener('click', encode);
    function encode() {
        let newText = '';
        for (const char of firstInputElement.value) {
            let asciNum = char.charCodeAt();
            let newChar = String.fromCharCode(Number(asciNum) + 1);
            newText += newChar;

            secondInputElement.value = newText;
            firstInputElement.value = '';
        }
    }

    document.querySelector('div:nth-child(2) button').addEventListener('click', decodeAndRead);
    function decodeAndRead() {
        let result = '';
        for (const char of secondInputElement.value) {
            let asciNum = char.charCodeAt();
            let newChar = String.fromCharCode(Number(asciNum) - 1);
            result += newChar;

            secondInputElement.value = result;
        }
    }
}

// function encodeAndDecodeMessages() {
//     let textarea = document.getElementsByTagName('textarea');
//     [...document.getElementsByTagName('button')].forEach(b => b.addEventListener('click', message));
 
//     function message(btn) {
//         if (btn.target.textContent === 'Encode and send it') {
//             let encoded = [...textarea[0].value].map(e => String.fromCharCode(e.charCodeAt(0) + 1)).join('');
//             textarea[1].value = encoded;
//             textarea[0].value = '';
//         } else if (btn.target.textContent === 'Decode and read it') {
//             let decoded = [...textarea[1].value].map(e => String.fromCharCode(e.charCodeAt(0) - 1)).join('');
//             textarea[1].value = decoded;
//         }
//     }
// }