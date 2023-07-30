class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }
    addCar(model, horsepower, price, mileage) {
        if (model === '' || horsepower < 0 || price < 0 || mileage < 0) {
            throw new Error('Invalid input!');
        }
        //check if we have this car before????
        this.availableCars.push({ model, horsepower, price, mileage });
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(
            2
        )} km - ${price.toFixed(2)}$`;
    }
    sellCar(model, desiredMileage) {
        let currCar = this.availableCars.find((x) => x.model === model);
        if (!currCar) {
            throw new Error(`${model} was not found!`);
        }
        let difference = Math.abs(currCar.mileage - desiredMileage);
        if (currCar.mileage <= desiredMileage) {
        } else if (difference <= 40000) {
            currCar.price = currCar.price * 0.95;
        } else if (difference > 40000) {
            currCar.price = currCar.price * 0.9;
        }
        this.soldCars.push({
            model,
            horsepower: currCar.horsepower,
            soldPrice: currCar.price,
        });
        this.totalIncome += currCar.price;

        let index = this.availableCars.indexOf(currCar);
        this.availableCars.splice(index, 1);

        return `${model} was sold for ${currCar.price.toFixed(2)}$`;
    }
    currentCar() {
        if (this.availableCars.length === 0) {
            return `There are no available cars`;
        } else {
            let result = ['-Available cars:'];
            this.availableCars.forEach((x) => {
                result.push(
                    `---${x.model} - ${x.horsepower} HP - ${x.mileage.toFixed(
                        2
                    )} km - ${x.price.toFixed(2)}$`
                );
            });
            return result.join('\n');
        }
    }
    salesReport(criteria) {
        if(criteria==='model'){
            this.soldCars.sort((a,b)=>a.model.localeCompare(b.model));
        }else if(criteria==='horsepower'){
            this.soldCars.sort((a,b)=>b.horsepower-a.horsepower);
        }else{
           throw new Error('Invalid criteria!'); 
        }
        let firstLine=`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$\n`;
        let secondLine=`-${this.soldCars.length} cars sold:\n`;

        let result=this.soldCars.map(x=>`---${x.model} - ${x.horsepower} HP - ${x.soldPrice.toFixed(2)}$`);
        return firstLine + secondLine + result.join('\n').trim();
    }
}
let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));
