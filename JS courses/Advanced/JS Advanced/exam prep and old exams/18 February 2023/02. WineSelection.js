class WineSelection {
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }
    reserveABottle(wineName, wineType, price) {
        if (this.space > 0) {
            this.wines.push({ wineName, wineType, price, paid: false });
            this.space--;
            return `You reserved a bottle of ${wineName} ${wineType} wine.`;
        } else {
            throw new Error('Not enough space in the cellar.');
        }
    }
    payWineBottle(wineName, price) {
        let currWine = this.wines.find((x) => x.wineName === wineName);

        if (currWine) {
            if (currWine.paid) {
                throw new Error(`${wineName} has already been paid.`);
            } else {
                currWine.paid = true;
                this.bill += price;
                return `You bought a ${wineName} for a ${price}$.`;
            }
        } else {
            throw new Error(`${wineName} is not in the cellar.`);
        }
    }
    openBottle(wineName) {
        let currWine = this.wines.find((x) => x.wineName === wineName);
        if (!currWine) {
            throw new Error(`The wine, you're looking for, is not found.`);
        }
        if (currWine.paid === false) {
            throw new Error(
                `${wineName} need to be paid before open the bottle.`
            );
        } else {
            let index = this.wines.indexOf(currWine);
            this.wines.splice(index, 1);
            return `You drank a bottle of ${wineName}.`;
        }
    }
    cellarRevision(wineType) {
        // console.log(arguments);
        if (!arguments[0]) {
            let firstLine = `You have space for ${this.space} bottles more.\n`;
            let secondLine = `You paid ${this.bill}$ for the wine.\n`;
            this.wines.sort((a, b) => a.wineName.localeCompare(b.wineName));
            this.wines.map((x) => {
                if (x.paid === true) {
                    x.paid = 'Has Paid';
                } else {
                    x.paid = 'Not Paid';
                }
                return this.wines;
            });
            let lastLine = this.wines.map(
                (x) => (x = `${x.wineName} > ${x.wineType} - ${x.paid}.\n`)
            );
            return firstLine + secondLine + lastLine.join('').trim();
        } else {
            let currWine = this.wines.find((x) => x.wineType === wineType);
            if (!currWine) {
                throw new Error(`There is no ${wineType} in the cellar.`);
            } else {
                let result = '';
                currWine.paid = true
                    ? (result = `${currWine.wineName} > ${wineType} - Not Paid.`)
                    : `${currWine.wineName} > ${wineType} - Has Paid.`;
                return result;
            }
        }
    }
}

const selection = new WineSelection(5)
selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
console.log(selection.cellarRevision());


