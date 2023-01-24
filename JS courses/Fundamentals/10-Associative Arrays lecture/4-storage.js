function storage(input) {
  let order = {};

  for (const list of input) {
    let [product, quantity] = list.split(" ");
    quantity = Number(quantity);

    if (!order.hasOwnProperty(product)) {
      order[product] = 0; // if doesn't exist  (add it to the object)
    }
    order[product] += quantity; // put a value after we've added it or += if it exist
  }
  for (const key in order) {
    console.log(`${key} -> ${order[key]}`);
  }
}
storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
