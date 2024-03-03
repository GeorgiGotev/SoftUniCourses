function cinemaTickets(input) {
  let index = 0;
  let filmName = input[index++];
  let student = 0;
  let standard = 0;
  let kid = 0;

  while (filmName !== "Finish") {
    let freeSpaces = Number(input[index++]);
    let roomSpace = freeSpaces;
    let counter = 0;
    while (true) {
      if (freeSpaces === 0) {
        break;
      }
      let currTicket = input[index++];

      if (currTicket === "End") {
        break;
      }
      if (currTicket === "student") {
        student++;
      } else if (currTicket === "standard") {
        standard++;
      } else if (currTicket === "kid") {
        kid++;
      }
      counter++;
      freeSpaces--;
    }

    console.log(
      `${filmName} - ${((counter / roomSpace) * 100).toFixed(2)}% full.`
    );

    filmName = input[index++];
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
  "Taxi",
  "10",
  "standard",
  "kid",
  "student",
  "student",
  "standard",
  "standard",
  "End",
  "Scary Movie",
  "6",
  "student",
  "student",
  "student",
  "student",
  "student",
  "student",
  "Finish",
]);
