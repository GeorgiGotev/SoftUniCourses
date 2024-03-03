function sortAnArrayBy2Criteria(array) {
  let result = array.sort((a, b) => a.length - b.length || a.localeCompare(b));
  result.forEach((element) => {
    //for each???!?!!
    console.log(element);
  });
  //   console.log(result.join("\n"));
}
sortAnArrayBy2Criteria(["Isacc", "Theodor", "Jack", "Asdn", "George"]);
