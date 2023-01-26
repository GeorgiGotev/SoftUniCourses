function oddOccurrences(input) {
    let output = {};
    let words = input.split(' ');
    words.forEach(element => {
        let result = element.toLowerCase()
        if (!output.hasOwnProperty(result)) {
            output[result] = 0;
        }
        output[result]++
    });

    let sorted = Object.entries(output).sort((a, b) => b[1] - a[1])

    let final = '';
    for (const key of sorted) {

        if (key[1] % 2 !== 0) {
            final += `${key[0]} `
        }
    }
    console.log(final);
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');