function movieProfit(input) {
  let filmName = input[0];
  let days = Number(input[1]);
  let tickets = Number(input[2]);
  let ticketPrice = Number(input[3]);
  let percentCinema = Number(input[4]) / 100;

  let sumOfTicketsPerDay = ticketPrice * tickets;
  let incomes = sumOfTicketsPerDay * days;
  let cinemaIncomes = incomes * percentCinema;
  let finalResult = incomes - cinemaIncomes;

  console.log(
    `The profit from the movie ${filmName} is ${finalResult.toFixed(2)} lv.`
  );
}
movieProfit(["The Programmer", "20", "500", "7.50", "7"]);
