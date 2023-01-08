function requiredReading(bookPages, pagesPerHour, mustReadDays) {
  let totalTimeForBook = bookPages / pagesPerHour;
  let requiredTime = totalTimeForBook / mustReadDays;

  console.log(requiredTime);
}
requiredReading(212, 20, 2);
