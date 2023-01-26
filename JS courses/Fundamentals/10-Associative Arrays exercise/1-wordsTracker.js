function wordsTracker(input) {

    let wordCounter = {};

    let searchingWords = input.shift().split(' ');

    for (const word of searchingWords) {
        wordCounter[word] = 0;
        input.forEach(element => {
            if (element === word) {
                wordCounter[word]++
            }
        });

    }

    let sorted = Object.entries(wordCounter).sort((a, b) => b[1] - a[1]);

    for (const entries of sorted) {
        console.log(`${entries[0]} - ${entries[1]}`);
    }

}
wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
);