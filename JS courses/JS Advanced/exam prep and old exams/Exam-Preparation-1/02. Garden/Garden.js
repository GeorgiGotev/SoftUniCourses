class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }
    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailable < spaceRequired) {
            throw new Error('Not enough space in the garden.')
        }
        this.plants.push({ plantName, spaceRequired, ripe: false, quantity: 0 });
        this.spaceAvailable -= spaceRequired;
        return `The ${plantName} has been successfully planted in the garden.`
    }
    ripenPlant(plantName, quantity) {
        let currPlant = this.plants.find(x => x.plantName === plantName);

        if (!this.plants.some(x => x.plantName === plantName)) {
            throw new Error(`There is no ${plantName} in the garden.`)
        }
        if (currPlant.ripe === true) {
            throw new Error(`The ${plantName} is already ripe.`);
        }
        if (quantity <= 0) {
            throw new Error('The quantity cannot be zero or negative.');
        }
        currPlant.ripe = true;
        currPlant.quantity = quantity;

        let returnText = quantity === 1 ? `${quantity} ${plantName} has successfully ripened.` :
            `${quantity} ${plantName}s have successfully ripened.`;
        return returnText;

    }
    harvestPlant(plantName) {
        let currPlant = this.plants.find(x => x.plantName === plantName);

        if (!this.plants.some(x => x.plantName === plantName)) {
            throw new Error(`There is no ${plantName} in the garden.`)
        }
        if (currPlant.ripe === false) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }

        let currPlantQuantity = currPlant.quantity;
        this.storage.push({ plantName, quantity: currPlantQuantity });
        this.spaceAvailable += currPlant.spaceRequired;

        //delete this plant from the array 'plants';
        this.plants.splice(this.plants.findIndex(a => a.plantName === plantName), 1)
        //other options to filter all plants which are different from this plantName;
        // this.plants=this.plants.filter(x=>x.plantName!==plantName); 
        return `The ${plantName} has been successfully harvested.`
    }

    generateReport() {
        let result = ''
        result += `The garden has ${this.spaceAvailable} free space left.\n`;

        // let plantsInGarden = [];
        // this.plants.forEach(element => {
        //     plantsInGarden.push(Object.entries(element)[0][1])
        // });
        // let sorted = plantsInGarden.sort((a, b) => a.localeCompare(b));
        // result += `Plants in the garden: ${sorted.join(', ')}\n`;
        result += `Plants in the garden: `
        this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName)).forEach(line => result += `${line.plantName}, `);
        result = result.substring(0, result.length - 2)
        result += `\n`;


        // if (!this.storage.length) {   //this.storage.length!==0
        //     let plantsInStorage = '';
        //     this.storage.forEach((element, i) => {
        //         if (this.storage.length - 1 !== i) {
        //             plantsInStorage += `${Object.values(element)[0]} (${Object.values(element)[1]}), `;
        //         } else {
        //             plantsInStorage += `${Object.values(element)[0]} (${Object.values(element)[1]})`
        //         }
        //     });
        //     result += `Plants in storage: ${plantsInStorage}`
        // } else {
        //     result += 'Plants in storage: The storage is empty.';
        // }

        //
        let tempArr=[];
        result += `Plants in storage: `
        if (!this.storage.length) {
            result += 'Plants in storage: The storage is empty.';
        } else {
            this.storage.forEach(plant => tempArr.push(`${plant.plantName} (${plant.quantity})`))
        }
        result +=tempArr.join(', ');

        return result
    }
}



const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 100));
console.log(myGarden.addPlant('cucumber', 30));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.ripenPlant('cucumber', -5));