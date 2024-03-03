function thePyramidOfKingDjoser(baseFloor, materialValue) {
  let gold = 0;
  let stone = 0;
  let marble = 0;
  let lapis = 0;
  let floor = 0;

  for (let i = baseFloor; i >= 1; i -= 2) {
    floor++;
    if (i === 2) {
      gold = 4;
      break;
    } else if (i === 1) {
      gold = 1;
      break;
    }

    let floorArea = Math.pow(i, 2);
    let insideFloorArea = Math.pow(i - 2, 2);
    if (floor % 5 === 0) {
      stone += insideFloorArea;
      lapis += floorArea - insideFloorArea;
    } else {
      stone += insideFloorArea;
      marble += floorArea - insideFloorArea;
    }
  }

  console.log(`Stone required: ${Math.ceil(stone * materialValue)}`);
  console.log(`Marble required: ${Math.ceil(marble * materialValue)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapis * materialValue)}`);
  console.log(`Gold required: ${Math.ceil(gold * materialValue)}`);
  console.log(`Final pyramid height: ${Math.floor(floor * materialValue)}`);
}
thePyramidOfKingDjoser(11, 1);
