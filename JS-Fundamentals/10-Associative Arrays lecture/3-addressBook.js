function addressBook(input) {
  let addresses = {};
  input.forEach((element) => {
    let [name, address] = element.split(":");
    addresses[name] = address;
  });

  let sorted = Object.entries(addresses).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  for (const iterator of sorted) {
    console.log(`${iterator[0]} -> ${addresses[iterator[0]]}`); // addresses[iterator[0] === iterator[1]
  }
}
addressBook([
  "Bob:Huxley Rd",
  "John:Milwaukee Crossing",
  "Peter:Fordem Ave",
  "Bob:Redwing Ave",
  "George:Mesta Crossing",
  "Ted:Gateway Way",
  "Bill:Gateway Way",
  "John:Grover Rd",
  "Peter:Huxley Rd",
  "Jeff:Gateway Way",
  "Jeff:Huxley Rd",
]);
