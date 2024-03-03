function vacation(num, type, dayOfWeek) {
  let price = 0;
  switch (type) {
    case "Students":
      if (dayOfWeek === "Friday") {
        price = num * 8.45;
      } else if (dayOfWeek === "Saturday") {
        price = num * 9.8;
      } else if (dayOfWeek === "Sunday") {
        price = num * 10.46;
      }
      if (num >= 30) {
        price -= price * 0.15;
      }
      break;
    case "Business":
      if (num >= 100) {
        num = num - 10;
      }
      if (dayOfWeek === "Friday") {
        price = num * 10.9;
      } else if (dayOfWeek === "Saturday") {
        price = num * 15.6;
      } else if (dayOfWeek === "Sunday") {
        price = num * 16;
      }

      break;
    case "Regular":
      if (dayOfWeek === "Friday") {
        price = num * 15;
      } else if (dayOfWeek === "Saturday") {
        price = num * 20;
      } else if (dayOfWeek === "Sunday") {
        price = num * 22.5;
      }
      if (num >= 10 && num <= 20) {
        price = price - price * 0.05;
      }
      break;
  }

  console.log(`Total price: ${price.toFixed(2)}`);
}
vacation(20, "Regular", "Saturday");
