function ages(age) {
  let personType = Number(age);
  if (personType < 0) {
    console.log("out of bounds");
  } else if (personType <= 2) {
    console.log("baby");
  } else if (personType <= 13) {
    console.log("child");
  } else if (personType <= 19) {
    console.log("teenager");
  } else if (personType <= 65) {
    console.log("adult");
  } else if (personType >= 66) {
    console.log("elder");
  }
}
ages([-5]);
