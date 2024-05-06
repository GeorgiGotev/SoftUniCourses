import { Drink } from "./Drink";

export class VendingMachine {
  buttonCapacity: number = 0;
  drinks: Drink[] = [];

  constructor(buttonCapacity: number) {
    this.buttonCapacity = buttonCapacity;
  }
  addDrink(drink: Drink): void {
    if (this.drinks.length < this.buttonCapacity) {
      this.drinks.push(drink);
    }
  }
  removeDrink(name: string): boolean {
    const drink: number = this.drinks.findIndex((drink) => drink.name == name);
    if (drink !== -1) {
      this.drinks.splice(drink, 1);
      return true;
    }
    return false;
  }
  getLongest(): string {
    const drink: Drink = [...this.drinks].sort(
      (a, b) => b.volume - a.volume
    )[0];
    return drink.toString();
  }
  getCheapest(): string {
    const drink: Drink = [...this.drinks].sort((a, b) => a.price - b.price)[0];
    return drink.toString();
  }
  buyDrink(name: string): string {
    const drink: Drink | undefined = this.drinks.find(
      (drink) => drink.name == name
    );
    if (drink) {
      return drink.toString();
    }
  }
  get getCount(): number {
    return this.drinks.length;
  }
  report(): string {
    let result: string = `Drinks available:\n`;
    for (const drink of this.drinks) {
      result += `${drink.toString()}\n`;
    }
    return result.trim();
  }
}
