function pass(input) {
  let index = 0;
  let username = input[index++];
  let password = input[index++];
  let currentPass = input[index++];

  while (currentPass !== password) {
    currentPass = input[index++];
  }
  console.log(`Welcome ${username}!`);
}
pass(["Nakov", "1234", "Pass", "1324", "1234"]);
