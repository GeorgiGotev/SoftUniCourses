function employees(arrOfNames) {
  let employeesObj = {};
  for (const el of arrOfNames) {
    employeesObj[el] = el.length; // employeesObj[el] =>key , el.length=>value
  }
  for (const key in employeesObj) {
    //  employeesObj[el] = key    // el.length =employeesObj[key]
    console.log(`Name: ${key} -- Personal Number: ${employeesObj[key]}`);
  }
}
employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
