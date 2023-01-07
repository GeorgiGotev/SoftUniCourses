function thePyramidOfKingDjoser(base, value) {
  let baseStones = Number(base);
  let stonesHigh = Number(value);
  let stone = 0;
  let gold = 0;
  let marble = 0;
  let lapis = 0;
  let floor = 0;

  while (baseStones > 2) {
    let floorArea = Math.pow(baseStones, 2);
    let insideFloorArea = Math.pow(baseStones - 2, 2);

    if (baseStones - 2 === 0) {
      break;
    }
    floor++;
    baseStones -= 2;
    if (floor % 5 === 0) {
      stone += insideFloorArea;
      lapis += floorArea - insideFloorArea;
    } else {
      stone += insideFloorArea;
      marble += floorArea - insideFloorArea;
    }
  }
  floor++;
  if (baseStones % 2 !== 0) {
    gold = 1;
  } else {
    gold = 4;
  }

  console.log(`Stone required: ${Math.ceil(stone * stonesHigh)}`);
  console.log(`Marble required: ${Math.ceil(marble * stonesHigh)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapis * stonesHigh)}`);
  console.log(`Gold required: ${Math.ceil(gold * stonesHigh)}`);
  console.log(`Final pyramid height: ${Math.floor(floor * stonesHigh)}`);
}
thePyramidOfKingDjoser(12, 0.75);
