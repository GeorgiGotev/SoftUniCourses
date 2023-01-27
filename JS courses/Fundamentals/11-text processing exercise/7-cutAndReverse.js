function cutAndReverse(string) {
    let result = '';
    let result2 = '';
    for (let i = (string.length / 2) - 1; i >= 0; i--) {
        result += string[i];
    }
    for (let i = string.length - 1; i >= string.length / 2; i--) {
        result2 += string[i]
    }
    console.log(result);
    console.log(result2);
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');