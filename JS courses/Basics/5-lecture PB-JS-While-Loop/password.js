function password(input) {
  let name = input[0];
  let password = input[1];
  let index = 2;
  while (index < input.length) {
    if (input[index] === password) {
      console.log(`Welcome ${name}!`);
    }
    index++;
  }
}
password(["Gotev", "Georgi93", "Georgi", "Georgi93"]);
