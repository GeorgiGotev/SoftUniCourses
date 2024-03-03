function gramophone(string1, string2, string3) {
  let songDuration = (string1.length * string2.length * string3.length) / 2;
  let plateRotation = songDuration / 2.5;
  console.log(`The plate was rotated ${Math.ceil(plateRotation)} times.`);
}
gramophone("Black Sabbath", "Paranoid", "War Pigs");
