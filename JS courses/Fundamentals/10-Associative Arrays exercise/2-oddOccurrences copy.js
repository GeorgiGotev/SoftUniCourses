function oddOccurrences(input) {
    let output = {};
    let words = input.split(' ').map(x => x.toLowerCase());

    for (let i = 0; i < words.length; i++) {
        let curr = words[i]
        if (!output.hasOwnProperty(curr)) {
            output[curr] = [];
        }
        output[curr].push(i)
    }

    let sorted = Object.entries(output).sort((a, b) => a[1][0] - b[1][0])  // sort doesn't work, because we don't have it as a solve.
    // we need just to print result as it show to us.

    let final = '';
    for (const key of sorted) {
        if (key[1].length % 2 !== 0) {
            final += `${key[0]} `
        }
    }
    console.log(final);
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');