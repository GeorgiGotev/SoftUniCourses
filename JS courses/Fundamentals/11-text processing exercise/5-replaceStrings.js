function replaceStrings(input) {

    let result = []
    for (let i = 0; i < input.length; i++) {
        if (input[i] !== (input[i + 1])) {
            result.push(input[i])
        }
    }
    console.log(result.join(''));

}
replaceStrings('aaaaabbbbbcdddeeeedssaa');