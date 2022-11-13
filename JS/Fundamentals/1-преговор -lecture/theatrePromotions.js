function theatrePromotions(type, num) {
  if (num >= 0 && num <= 18) {
    if (type === "Weekday") {
      console.log("12" + "$");
    } else if (type === "Weekend") {
      console.log("15" + "$");
    } else if (type === "Holiday") {
      console.log("5" + "$");
    }
  } else if (num > 18 && num <= 64) {
    if (type === "Weekday") {
      console.log("18" + "$");
    } else if (type === "Weekend") {
      console.log("20" + "$");
    } else if (type === "Holiday") {
      console.log("12" + "$");
    }
  } else if (num > 64 && num <= 122) {
    if (type === "Weekday") {
      console.log("12" + "$");
    } else if (type === "Weekend") {
      console.log("15" + "$");
    } else if (type === "Holiday") {
      console.log("10" + "$");
    }
  } else {
    console.log("Error!");
  }
}
theatrePromotions("Weekday", 14);
