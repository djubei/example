/*
/!* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате:
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли *!/

'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')
const film1 = prompt('Один из последних просмотренных фильмов?', '')
const rating1 = +prompt('На сколько оцените его?', '')
const film2 = prompt('Один из последних просмотренных фильмов?', '')
const rating2 = +prompt('На сколько оцените его?', '')

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
}
personalMovieDB.movies[film1]=rating1
personalMovieDB.movies[film2]=rating2
console.log(personalMovieDB)*/

const lines = 5
let result = ''

for (let i = 0; i <= lines; i++) {
  for (let j = 0; j < lines - i; j++) {
    result += " ";
  }
  for (let k = 0; k < 2 * i + 1; k++) {
    result += "*";
  }
  result += "\n";
}
console.log(result)

const nnn ='nnn'
export default nnn