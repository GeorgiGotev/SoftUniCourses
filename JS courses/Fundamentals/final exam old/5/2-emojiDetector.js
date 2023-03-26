function emoji(data) {
    let emojiPattern=/(\:{2}|\*{2})(?<emoji>[A-Z][a-z]{2,})\1/gm;
    let digitPattern=/\d/g;
    let coolness=data[0].match(digitPattern).reduce((a,b)=>a*b,1);
    let emojiCounter=0;
    let coolEmojis=[];
    let emojis = data[0].matchAll(emojiPattern);

    console.log(`Cool threshold: ${coolness}`);
    
    for (const emoji of emojis) {
        emojiCounter++;
        let singleEmoji=emoji.groups.emoji;
        let emojiAsciSum=0;
        for(let i=0;i<singleEmoji.length;i++){
            emojiAsciSum+=singleEmoji[i].charCodeAt();
        }
        if(emojiAsciSum>=coolness){
            coolEmojis.push(emoji[0])
        }
    }
    console.log(`${emojiCounter} emojis found in the text. The cool ones are:`);
    console.log(coolEmojis.join('\n'));
}
emoji(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);