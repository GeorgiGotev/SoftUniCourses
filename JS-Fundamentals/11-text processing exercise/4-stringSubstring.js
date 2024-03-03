function stringSubstring(word, string) {

    let newString = string.split(' ');

    for (const string of newString) {
        if (word.toLowerCase() === string.toLowerCase()) {
            return console.log(word);
        }
    }
    console.log(`${word} not found!`);
}
stringSubstring('python',
    'JavaScript is python the python best python programming language');