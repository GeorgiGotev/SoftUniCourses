type CityType = {
  cityName: string;
  population: number;
  treasury: number;
  taxRate: number;
  collectTaxes(): void;
  applyGrowth(percentage: number): void;
  applyRecession(percentage: number): void;
};

function cityTaxes(cityName: string, population: number, treasury: number): CityType {
  const city: CityType = {
    cityName,
    population,
    treasury,
    taxRate: 10,
    collectTaxes(): void {
      this.treasury += this.population * this.taxRate;
    },
    applyGrowth(percentage: number): void {
      this.population += (this.population * percentage) / 100;
    },
    applyRecession(percentage: number): void {
      this.treasury -= (this.treasury * percentage) / 100;
    },
  };

  return city;
}

const city = cityTaxes("Tortuga", 7000, 15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);

console.log(city);
