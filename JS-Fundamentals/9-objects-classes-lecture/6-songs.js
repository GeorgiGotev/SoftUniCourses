function songs(arr) {
  let songs = [];
  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
  }

  let numberOfSongs = arr.shift();
  let typeOfPrint = arr.pop();

  for (let i = 0; i < numberOfSongs; i++) {
    let [typeList, name, time] = arr[i].split("_");
    songs.push(new Song(typeList, name, time));
  }
  if (typeOfPrint === "all") {
    songs.forEach((x) => console.log(x.name));
  } else {
    let filtered = songs.filter((x) => x.typeList === typeOfPrint);
    filtered.forEach((x) => console.log(x.name));
  }
}
songs([
  3,
  "favourite_DownTown_3:14",
  "favourite_Kiss_4:16",
  "favourite_Smooth Criminal_4:01",
  "favourite",
]);
