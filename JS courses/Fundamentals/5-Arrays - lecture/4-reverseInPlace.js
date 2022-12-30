function reverseInPlace(strings) {
  for (let i = 0; i < strings.length / 2; i++) {
    let currNum = strings[i];
    strings[i] = strings[strings.length - 1 - i];
    strings[strings.length - 1 - i] = currNum;
  }
  console.log(strings.join(" "));
}
reverseInPlace(["33", "123", "0", "dd"]);
