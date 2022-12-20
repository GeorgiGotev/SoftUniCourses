function movieRatings(input) {
  let index = 0;
  let numberOfFilms = Number(input[index++]);
  let sumRating = 0;
  let maxRating = Number.MIN_SAFE_INTEGER;
  let maxTitle = "";
  let minRating = Number.MAX_SAFE_INTEGER;
  let minTitle = "";

  for (let i = 0; i < numberOfFilms; i++) {
    let filmName = input[index++];
    let currFilmRating = Number(input[index++]);
    sumRating += currFilmRating;
    if (currFilmRating > maxRating) {
      maxRating = currFilmRating;
      maxTitle = filmName;
    }
    if (currFilmRating < minRating) {
      minRating = currFilmRating;
      minTitle = filmName;
    }
  }
  let avg = sumRating / numberOfFilms;
  console.log(`${maxTitle} is with highest rating: ${maxRating.toFixed(1)}`);
  console.log(`${minTitle} is with lowest rating: ${minRating.toFixed(1)}`);
  console.log(`Average rating: ${avg.toFixed(1)}`);
}

movieRatings([
  "3",
  "Interstellar",
  "8.5",
  "Dangal",
  "8.3",
  "Green Book",
  "8.2",
]);
