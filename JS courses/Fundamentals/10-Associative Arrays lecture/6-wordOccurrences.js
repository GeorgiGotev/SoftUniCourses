function wordOccurrences(input) {
  let result = {};

  for (const words of input) {
    let currWord = words.split(" ");

    if (!result.hasOwnProperty(currWord)) {
      result[currWord] = 0; // if doesn't exist  (add it to the object)
    }
    result[currWord]++; //add +1 if it repeat or =1 if it exist for a first time, when we've added it above
  }
  let sorted = Object.entries(result).sort((a, b) => b[1] - a[1]);
  for (const entry of sorted) {
    console.log(`${entry[0]} -> ${entry[1]} times`);
  }
}
wordOccurrences([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);
