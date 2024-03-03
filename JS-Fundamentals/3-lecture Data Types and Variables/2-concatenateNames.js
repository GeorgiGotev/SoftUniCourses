function concatenateNames(firstName, secondName, delimiter) {
  let concatenated = [firstName, secondName].join(delimiter);
  console.log(concatenated);
}
concatenateNames("John", "Smith", "->");
