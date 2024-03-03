function storeProvision(inStock, delivery) {
  storeProducts = {};

  for (let i = 0; i < inStock.length; i += 2) {
    storeProducts[inStock[i]] = Number(inStock[i + 1]);
  }
  for (let i = 0; i < delivery.length; i += 2) {
    if (!storeProducts.hasOwnProperty(delivery[i])) {
      storeProducts[delivery[i]] = 0;
    }
    storeProducts[delivery[i]] += Number(delivery[i + 1]);
  }
  for (const product in storeProducts) {
    //key => value
    console.log(`${product} -> ${storeProducts[product]}`);
  }
}
storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
