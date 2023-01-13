function repeatString(string, counter) {
  result = "";
  for (let i = 0; i < counter; i++) {
    result += string;
  }
  return result;
}
repeatString("abc", 3);
