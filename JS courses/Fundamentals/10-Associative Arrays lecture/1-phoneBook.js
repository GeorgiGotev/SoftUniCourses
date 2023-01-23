function phoneBook(arrayOfPhoneBook) {
  telephoneList = {};
  for (const list of arrayOfPhoneBook) {
    let [name, phone] = list.split(" ");
    telephoneList[name] = phone;
  }

  for (const name in telephoneList) {
    console.log(`${name} -> ${telephoneList[name]}`);
  }
}
phoneBook([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
