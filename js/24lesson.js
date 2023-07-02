

'use strict';


const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')


const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
}
debugger
if (!numberOfFilms) {
  console.log('error')
} else if (numberOfFilms <= 10) {
  console.log('мало')
} else if (numberOfFilms >= 30) {
  console.log('киноман')
} else {
  console.log('классический')
}
for (let i = 0; i < numberOfFilms; i++) {
  const film = prompt('Один из последних просмотренных фильмов?', '')

  if (!film || film.length > 50) {
    console.log(i)
    i--
    console.log(i)
  } else {
    const rating = +prompt('На сколько оцените его?', '')
    personalMovieDB.movies[film] = rating
  }
}


console.log(personalMovieDB)


