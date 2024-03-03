function thePyramidOfKingDjoser(base, value) {
  let baseStones = Number(base);
  let stonesHigh = Number(value);
  let stone = 0;
  let gold = 0;
  let marble = 0;
  let lapis = 0;
  let floor = 0;

  for (let i = baseStones; i > 2; i -= 2) {
    floor++;
    let floorArea = i * i;
    let insideFloorArea = (i - 2) * (i - 2);
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
thePyramidOfKingDjoser(11, 0.75);
