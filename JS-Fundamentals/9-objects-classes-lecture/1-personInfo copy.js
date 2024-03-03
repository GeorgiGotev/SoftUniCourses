function personInfo(firstName, lastName, age) {
  let person = {};
  (person["firstName"] = firstName),
    (person.lastName = lastName),
    (person.age = age),
    console.log(person);
}
personInfo("Peter", "Pan", "20");
