function employees(arrOfNames) {
  let employeesObj = {};
  arrOfNames.forEach((person) => {
    employeesObj[person] = person.length; // key/value
    console.log(`Name: ${person} -- Personal Number: ${employeesObj[person]}`);
  });
}

employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
