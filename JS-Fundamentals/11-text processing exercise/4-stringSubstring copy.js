function stringSubstring(word, string) {
    let wordToLower = word.toLowerCase();
    let stringToLower = string.toLowerCase()
    let workingString = stringToLower.split(' ');

    if (workingString.includes(wordToLower)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }

}
stringSubstring('python',
    'JavaScript is python the python best python programming language');