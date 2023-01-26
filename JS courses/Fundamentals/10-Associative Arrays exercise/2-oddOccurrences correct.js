function oddOccurrences(input) {
    let output = {};
    let words = input.split(' ').map(x => x.toLowerCase());
    for (const word of words) {
        if (!output.hasOwnProperty(word)) {
            output[word] = 0;
        } else {
            output[word]++
        }
    }

    let final = '';

    for (let word of words) {
        if (output[word] % 2 === 0) {
            final += `${word} `;
            delete output[word];
        }
    }
    console.log(final);
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');