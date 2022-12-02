function oldBooks(input) {
  index = 0;
  let ourBook = input[index++];
  let command = input[index++];
  let bookCount = 0;

  while (command !== "No More Books") {
    if (command === ourBook) {
      console.log(`You checked ${bookCount} books and found it.`);
      return;
    }

    bookCount++;
    command = input[index++];
  }

  console.log(`The book you search is not here!`);
  console.log(`You checked ${bookCount} books.`);
}

oldBooks([
  "Bourne",
  "True Story",
  "Forever",
  "More Space",
  "The Girl",
  "Spaceship",
  "Strongest",
  "Profit",
  "Tripple",
  "Stella",
  "The Matrix",
  "Bourne",
]);
