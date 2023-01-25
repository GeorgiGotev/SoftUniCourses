function countStringOccurrences(text, word) {
    let counter = 0;
    let arr = text.split(' ')
    for (const string of arr) {
        if (word === string) {
            counter++;
        }
    }
    console.log(counter);
}
countStringOccurrences('This is a word and it also is a sentence',
    'is'
);