function rightPlace(string1, char, string2) {
  for (let i = 0; i < string1.length; i++) {
    if (string1[i] === "_") {
      if (string2[i] === char) {
        console.log("Matched");
      } else {
        console.log("Not Matched");
      }
    }
  }
}
rightPlace("Str_ng", "o", "Strong");
