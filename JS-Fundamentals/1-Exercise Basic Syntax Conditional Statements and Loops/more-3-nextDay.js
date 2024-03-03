function nextDay(year, month, day) {
  let date = new Date(year, month - 1, day + 1);
  let dd = date.getDate();
  let mm = date.getMonth() + 1;
  let yyyy = date.getFullYear();

  date = yyyy + "-" + mm + "-" + dd;

  console.log(date);
}
nextDay(2016, 9, 30);
