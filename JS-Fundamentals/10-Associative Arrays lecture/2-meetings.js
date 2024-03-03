function meetings(input) {
  let appointment = {};
  for (const line of input) {
    let [weekDay, name] = line.split(" ");
    if (!appointment[weekDay]) {
      appointment[weekDay] = name;
      console.log(`Scheduled for ${weekDay}`);
    } else {
      console.log(`Conflict on ${weekDay}!`);
    }
  }
  for (const weekDay in appointment) {
    console.log(`${weekDay} -> ${appointment[weekDay]}`);
  }
}
meetings(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
