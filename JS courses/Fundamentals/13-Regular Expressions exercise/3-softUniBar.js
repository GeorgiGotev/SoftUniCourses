function softUniBar(input) {
    let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>[0-9])\|[^|$%.]*?(?<price>[0-9]+\.*[0-9]*)\$/g;

    let line = input.shift();
    let sum = 0;
    while (line !== 'end of shift') {
        let result = pattern.exec(line);
        while (result !== null) {
            let { name,product,count,price}=result.groups;
            sum += Number(count) * Number(price);
            console.log(`${name}: ${product} - ${(Number(count) * Number(price)).toFixed(2)}`);
            result = pattern.exec(line)
        }
        line = input.shift();
    }
    console.log(`Total income: ${sum.toFixed(2)}`);
}
softUniBar(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']
);