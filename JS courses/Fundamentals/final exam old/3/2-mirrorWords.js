function mirrorWords(input) {
    let pattern = /(#|@)(?<firstWord>[A-Za-z]{3,})\1{2}(?<secondWord>[A-Za-z]{3,})\1/g;
    let text = input.shift();
    let result = text.matchAll(pattern);
    let array = [];
    let counter=0;

    for (const iterator of result) {
        counter++;
        let reversed = iterator.groups.secondWord.split('').reverse().join('');
        if (iterator.groups.firstWord === reversed) {
            array.push(iterator.groups.firstWord + ' <=> ' + iterator.groups.secondWord);
        }
    }
    if (counter < 1) {
        console.log(`No word pairs found!`);
    } else {
        console.log(`${counter} word pairs found!`); 
    }
    if (array.length < 1) {
        console.log(`No mirror words!`);
    } else {
        console.log(`The mirror words are:`);
        console.log(array.join(", ")); 
    }
}
mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]);