function pascalCaseSplitter(text) {

    let result = text[0];
    let toLower = text.toLowerCase();

    for (let i = 1; i < text.length; i++) {
        if (text[i] !== toLower[i]) {
            result += ', '
        }
        result += text[i]
    }

    console.log(result);
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');