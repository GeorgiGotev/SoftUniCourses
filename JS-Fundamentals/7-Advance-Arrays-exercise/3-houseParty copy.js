function houseParty(input) {
  let result = [];

  for (let el of input) {
    let listOfGuests = el.split(" ");
    let going = listOfGuests[2] === "going!";

    if (going) {
      if (result.includes(listOfGuests[0])) {
        console.log(`${listOfGuests[0]} is already in the list!`);
      } else {
        result.push(listOfGuests[0]);
      }
    } else {
      if (!result.includes(listOfGuests[0])) {
        console.log(`${listOfGuests[0]} is not in the list!`);
      } else {
        index = result.indexOf(listOfGuests[0]);
        result.splice(index, 1);
      }
    }
  }

  console.log(result.join("\n"));
}
houseParty([
  "Tom is going!",
  "Annie is going!",
  "Tom is going!",
  "Garry is going!",
  "Jerry is going!",
]);
