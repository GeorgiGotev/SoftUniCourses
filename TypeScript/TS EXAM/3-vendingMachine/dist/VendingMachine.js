"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendingMachine = void 0;
class VendingMachine {
    buttonCapacity = 0;
    drinks = [];
    constructor(buttonCapacity) {
        this.buttonCapacity = buttonCapacity;
    }
    addDrink(drink) {
        if (this.drinks.length < this.buttonCapacity) {
            this.drinks.push(drink);
        }
    }
    removeDrink(name) {
        const drink = this.drinks.findIndex((drink) => drink.name == name);
        if (drink !== -1) {
            this.drinks.splice(drink, 1);
            return true;
        }
        return false;
    }
    getLongest() {
        const drink = [...this.drinks].sort((a, b) => b.volume - a.volume)[0];
        return drink.toString();
    }
    getCheapest() {
        const drink = [...this.drinks].sort((a, b) => a.price - b.price)[0];
        return drink.toString();
    }
    buyDrink(name) {
        const drink = this.drinks.find((drink) => drink.name == name);
        if (drink) {
            return drink.toString();
        }
    }
    get getCount() {
        return this.drinks.length;
    }
    report() {
        let result = `Drinks available:\n`;
        for (const drink of this.drinks) {
            result += `${drink.toString()}\n`;
        }
        return result.trim();
    }
}
exports.VendingMachine = VendingMachine;
