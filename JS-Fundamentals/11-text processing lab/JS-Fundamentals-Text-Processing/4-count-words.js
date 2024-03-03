function wordCounter(text, word) {
    let count = text.split(' ').filter(w => w === word).length;
    console.log(count);
}

wordCounter('This is a word and it also is a sentence', 'is');