function censoredWords(text, word) {
    let result = text;
    while(result.includes(word)) {
        result = result.replace(word, '*'.repeat(word.length));
    }

    console.log(result);
}

function censoredWordsFirstLetter(text, word) {
    let result = text;
    while(result.includes(word)) {
        result = result.replace(word, word[0] + '*'.repeat(word.length - 1));
    }

    console.log(result);
}

let text = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit aperiam a dolor at asperiores, optio voluptatem id delectus incidunt esse sed!dolor'
censoredWords(text, 'dolor');