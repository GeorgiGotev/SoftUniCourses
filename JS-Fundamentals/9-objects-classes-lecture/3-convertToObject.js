function convertToObject(jsonToString) {
  let person = JSON.parse(jsonToString);

  for (const key in person) {
    console.log(`${key}: ${person[key]}`);
  }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
