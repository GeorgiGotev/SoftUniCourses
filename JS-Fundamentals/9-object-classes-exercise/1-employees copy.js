function employees(arrOfNames) {
  let employeesObj = {};
  arrOfNames.forEach((person) => {
    employeesObj[person] = person.length; // key/value
  });
  for (const key in employeesObj) {
    console.log(`Name: ${key} -- Personal Number: ${employeesObj[key]}`); // key/value
  }
  // console.log(employeesObj);
}

employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
