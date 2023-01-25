let text = 'hello world';
let newString = '';
for (const char of text) {
    console.log(char);
    newString += char;
}

let concatString = '';
for (let i = 0; i < text.length; i++) {
    console.log(text[i]);
    console.log(text.charAt(i));
    // use concat

    concatString = concatString.concat(text[i]);
}

