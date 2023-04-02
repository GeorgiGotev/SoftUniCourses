function solve(input){
    let n=Number(input.shift());
    let pattern=/(.+)>(?<first>\d{3})\|(?<second>[a-z]{3})\|(?<third>[A-Z]{3})\|(?<fourth>.{3})[ˆ><]*\1/g;
    let text=input.shift();
    while(text){
        let result=pattern.exec(text);
        if(result===null){
            console.log('Try another password!');
        }
        while(result){
            let {first,second,third,fourth}=result.groups;
            console.log(`Password: ${first}${second}${third}${fourth}`);
            result=pattern.exec(text);
        }
        text=input.shift();
    }
}
solve(["5",
"aa>111|mqu|BAU|mqu<aa",
"()>111!aaa!AAA!^&*<()",
"o>088|abc|AAA|***<o",
"asd>asd|asd|ASD|asd<asd",
"*>088|zzzz|ZzZ|123<*"])
;
