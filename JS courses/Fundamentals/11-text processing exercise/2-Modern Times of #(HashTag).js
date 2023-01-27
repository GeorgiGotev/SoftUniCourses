function hashTag(input) {
    let words = input.split(' ');

    for (const word of words) {
        if (word.startsWith('#') && word.length > 1) {
            let result = word.substring(1, word.length)
            let flag = true;
            let wordCopy = '';
            for (let i = 0; i < result.length; i++) {
                const char = result[i].toLowerCase();
                if (char.charCodeAt() < 97 || char.charCodeAt() > 122) {
                    flag = false;
                    break;
                } else {
                    wordCopy += result[i];
                }
            }
            if (flag) {
                console.log(wordCopy);
            }
        }
    }
}
hashTag('The symbol # is known #variousl32y in English-speaking #regions as the #numBer sign');

