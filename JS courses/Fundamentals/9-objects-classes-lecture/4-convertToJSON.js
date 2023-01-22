function convertToJSON(name, lastName, hairColor) {
  let personInformation = {
    name,
    lastName,
    hairColor,
  };
  return JSON.stringify(personInformation);
}
convertToJSON("George", "Jones", "Brown");
