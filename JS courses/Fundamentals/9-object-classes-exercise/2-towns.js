function towns(arrayOfTowns) {
  let townInfo = {};

  for (const currTown of arrayOfTowns) {
    let [town, latitude, longitude] = currTown.split(" | ");
    townInfo.town = town; //first variant   .town   second ["town"] for keys
    townInfo["latitude"] = Number(latitude).toFixed(2); //second variant of adding keys/values to object
    townInfo["longitude"] = Number(longitude).toFixed(2);
    console.log(townInfo);
  }
}
towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
