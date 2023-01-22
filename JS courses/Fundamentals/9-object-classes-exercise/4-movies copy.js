function movies(arr) {
  let movies = [];

  for (const el of arr) {
    if (el.includes("addMovie")) {
      let nameOfMovie = el.split("addMovie ")[1];
      movies.push({ name: nameOfMovie });
    } else if (el.includes("directedBy")) {
      let [name, director] = el.split(" directedBy ");
      let movie = movies.find((x) => x.name === name); //with find method in array, which find the first same element and take it
      if (movie) {
        movie.director = director;
      }
    } else if (el.includes("onDate")) {
      let [name, date] = el.split(" onDate ");
      movies.forEach((movie) => {
        // with forEach loop, which iterate in all array and check if the film name is included
        if (movie.name === name) {
          movie.date = date;
        }
      });
    }
  }
  movies.forEach((movie) => {
    if (movie.name && movie.director && movie.date) {
      console.log(JSON.stringify(movie));
    }
  });
}
movies([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
