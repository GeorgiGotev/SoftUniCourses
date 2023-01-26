function cardGame(input) {
    let handleCards = {}
    let objCardPower = {
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "10": 10,
        "J": 11,
        "Q": 12,
        "K": 13,
        "A": 14,
    }
    let objCardType = {
        "S": 4,
        "H": 3,
        "D": 2,
        "C": 1,
    }
    for (const line of input) {
        let curr = line.split(': ')
        let name = curr[0]
        let cards = curr[1].split(', ')

        if (!handleCards[name]) {
            handleCards[name] = [];
        }
        for (const card of cards) {
            if (!handleCards[name].includes(card))
                handleCards[name].push(card)
        }

    }
    let entries = Object.entries(handleCards)

    for (const [key, value] of entries) {
        sum = 0;
        for (cards of value) {

            let cardInfo = cards.split('');
            let cardType = cardInfo.pop();
            let cardPower = cardInfo.join('');
            let cardsPowerAsNumber = objCardPower[cardPower] * objCardType[cardType]
            sum += cardsPowerAsNumber

        }

        console.log(`${key}: ${sum}`);
    }
}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]
);