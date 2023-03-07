function astra(input) {

    let pattern = /([#|])(?<item>[a-zA-Z\s]+)\1(?<expiration>[0-9]{2}\/[0-9]{2}\/[0-9]{2})\1(?<calories>\d{1,5})\1/g;
    let result = [];
    let iterator = input[0].match(pattern);
    let totalCalories = 0;
    console.log(iterator);
    for (const line of iterator) {
        totalCalories += Number(line.groups.calories);
        result.push({ item: line.groups.item, day: line.groups.expiration, cal: line.groups.calories })

    }
    console.log(`You have food to last you for: ${Math.floor(totalCalories / 2000)} days!`);

    for (const line of result) {
        console.log(`Item: ${line.item}, Best before: ${line.day}, Nutrition: ${line.cal}`)
    }
}
astra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
]
);