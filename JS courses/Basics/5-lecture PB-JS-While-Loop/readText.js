function readText(input) {
  let index = 0;
  let comand = input[index];
  while (comand !== "Stop") {
    console.log(comand);
    index++;
    comand = input[index];
  }
}
readText([
  "Nakov",
  "SoftUni",
  "Sofia",
  "Bulgaria",
  "SomeText",
  "Stop",
  "AfterStop",
  "Europe",
  "HelloWorld",
]);
