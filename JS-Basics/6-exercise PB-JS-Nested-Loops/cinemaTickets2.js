function cinemaTickets(input) {
  let index = 0;
  let filmName = input[index++];
  let student = 0;
  let standard = 0;
  let kid = 0;

  while (filmName !== "Finish") {
    let freeSpaces = Number(input[index++]);
    let currTicket = input[index++];
    let counter = 0;
    while (currTicket !== "End" && counter <= freeSpaces) {
      counter++;
      if (currTicket === "student") {
        student++;
      } else if (currTicket === "standard") {
        standard++;
      } else if (currTicket === "kid") {
        kid++;
      }
      if (freeSpaces === counter) {
        break;
      }
      currTicket = input[index++];
    }

    console.log(
      `${filmName} - ${((counter / freeSpaces) * 100).toFixed(2)}% full.`
    );
    filmName = input[index++];
    //if (currTicket === "Finish") {
    //break;
    //}
  }

  let totalTickets = standard + student + kid;
  console.log(`Total tickets: ${totalTickets}`);
  console.log(
    `${((student / totalTickets) * 100).toFixed(2)}% student tickets.`
  );
  console.log(
    `${((standard / totalTickets) * 100).toFixed(2)}% standard tickets.`
  );
  console.log(`${((kid / totalTickets) * 100).toFixed(2)}% kids tickets.`);
}

cinemaTickets([
  "Shutter Island",
  "9",
  "standard",
  "standard",
  "standard",
  "student",
  "student",
  "student",
  "kid",
  "kid",
  "kid",
  "Rush",
  "9",
  "standard",
  "standard",
  "standard",
  "student",
  "student",
  "student",
  "kid",
  "kid",
  "kid",
  "Deadpool",
  "9",
  "standard",
  "standard",
  "standard",
  "student",
  "student",
  "student",
  "kid",
  "kid",
  "kid",
  "Finish",
]);
