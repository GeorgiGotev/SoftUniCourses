function familyTrip(input) {
  let budget = Number(input[0]);
  let numberOfNights = Number(input[1]);
  let pricePerNight = Number(input[2]);
  let addExpense = Number(input[3]) / 100;
  if (numberOfNights >= 7) {
    pricePerNight -= pricePerNight * 0.05;
  }
  let priceForHotel = numberOfNights * pricePerNight;
  let totalPrice = budget * addExpense + priceForHotel;

  if (budget > totalPrice) {
    console.log(
      `Ivanovi will be left with ${(budget - totalPrice).toFixed(
        2
      )} leva after vacation.`
    );
  } else {
    console.log(`${(totalPrice - budget).toFixed(2)} leva needed.`);
  }
}
familyTrip(["500", "7", "66", "15"]);
