function rightPlace(string1, char, string2) {
  let replace = string1.replace("_", char);
  let result = replace === string2 ? "Matched" : "Not Matched";
  console.log(result);
}
rightPlace("Str_ng", "o", "Strong");
