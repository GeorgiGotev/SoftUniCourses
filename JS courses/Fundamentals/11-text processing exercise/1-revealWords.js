function revealWords(wordsToReplace, sentence) {

    let words = wordsToReplace.split(', ')
    let sentenceOfStrings = sentence;
    words.forEach(element => {
        sentenceOfStrings = sentenceOfStrings.replace('*'.repeat(element.length), element);
    });

    console.log(sentenceOfStrings);
}
revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages'
);