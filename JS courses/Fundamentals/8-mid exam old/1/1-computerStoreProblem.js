function computerStoreProblem(input) {
    let specialOrRegular = input.pop();
    let inputNumbers = input.map(Number);

    let priceWithoutTaxes = 0;
    let taxes = 0;
    let totalPrice = 0;

    for (let i = 0; i < inputNumbers.length; i++) {
        let currPart = inputNumbers[i];
        if (currPart < 0) {
            console.log("Invalid price!");
            continue;
        }
        priceWithoutTaxes += currPart
        taxes = priceWithoutTaxes * 0.2
        totalPrice = taxes + priceWithoutTaxes;
        if (specialOrRegular === 'special') {
            totalPrice = totalPrice * 0.9;
        }

    }
    if (totalPrice === 0) {
        console.log("Invalid order!");
    } else {
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${priceWithoutTaxes.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log('-----------');
        console.log(`Total price: ${totalPrice.toFixed(2)}$`);
    }
}
computerStoreProblem(['regular']);