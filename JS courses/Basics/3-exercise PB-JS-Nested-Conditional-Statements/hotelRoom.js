function hotelRoom(input) {
  let season = input[0];
  let days = Number(input[1]);
  let studio = 0;
  let apartament = 0;
  if (season === "May" || season === "October") {
    if (days > 14) {
      studio = days * 50 * 0.7;
      apartament = days * 65 * 0.9;
    } else if (days > 7 && days <= 14) {
      studio = days * 50 * 0.95;
      apartament = days * 65;
    } else {
      studio = days * 50;
      apartament = days * 65;
    }
  }
  if (season === "June" || season === "September") {
    if (days > 14) {
      studio = days * 75.2 * 0.8;
      apartament = days * 68.7 * 0.9;
    } else {
      studio = days * 75.2;
      apartament = days * 68.7;
    }
  }
  if (season === "July" || season === "August") {
    if (days > 14) {
      apartament = 77 * days * 0.9;
      studio = days * 76;
    } else {
      apartament = days * 77;
      studio = days * 76;
    }
  }
  console.log(`Apartment: ${apartament.toFixed(2)} lv.`);
  console.log(`Studio: ${studio.toFixed(2)} lv.`);
}
hotelRoom(["August", "20"]);
