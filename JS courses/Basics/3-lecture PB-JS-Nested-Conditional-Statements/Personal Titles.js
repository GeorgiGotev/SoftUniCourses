function personalTitles(input) {
  let year = Number(input[0]);
  let title = input[1];

  if (title === "f") {
    if (year >= 16) {
      console.log("Ms.");
    } else {
      console.log("Miss");
    }
  } else {
    if (year >= 16) {
      console.log("Mr.");
    } else {
      console.log("Master");
    }
  }
}
personalTitles(["12", "f"]);
