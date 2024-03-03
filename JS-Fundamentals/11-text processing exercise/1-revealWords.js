function revealWords(wordsToReplace, sentence) {

    let words = wordsToReplace.split(', ')
    let sentenceOfStrings = sentence; //сочи към една референция??? и правим копие, тъй като е стринг..
    words.forEach(element => {
        sentenceOfStrings = sentenceOfStrings.replace('*'.repeat(element.length), element);
    });

    console.log(sentenceOfStrings);
}
revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages'
);