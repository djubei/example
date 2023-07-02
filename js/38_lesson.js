/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку.
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены -
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

// Код возьмите из предыдущего домашнего задания



const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,
  start() {
    this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (this.count === '' || this.count === null || this.count <= 0 || isNaN(this.count)) {
      this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
    console.log(personalMovieDB)
  },
  rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
      const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '').trim();

      if (a != null && b != null && a !== '' && b !== '' && a.length < 50) {
        this.movies[a] = b;
        console.log('done');
      } else {
        console.log('error');
        i--;
      }
    }
  },
  detectPersonalLevel() {
    if (this.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (this.count >= 10 && this.count < 30) {
      console.log("Вы классический зритель");
    } else if (this.count >= 30) {
      console.log("Вы киноман");
    } else {
      console.log("Произошла ошибка");
    }
  },
  writeYourGenres() {
    for (let i = 0; i < 3; i++) {
      this.genres[i] = prompt(`ваш любимый жанр под номером ${ i + 1 }`)
      while (!this.genres[i]) {
        console.log(this.genres[i])
        this.genres[i] = prompt(`ваш любимый жанр под номером ${ i + 1 }`)
      }
    }
    this.genres.forEach((gen, i) => {
      console.log(`Любимый жанр ${ i + 1 }  - это${ gen } `)
    })
  },
  showMyDB() {
    if (!this.private) {
      console.log(personalMovieDB);
    }
  },
  go() {
    this.showMyDB()
    this.start();
    this.rememberMyFilms();
    this.detectPersonalLevel();
    this.writeYourGenres();
    this.showMyDB();
  },
  toggleVisibleMyDB() {
    this.private = !this.private
  }
};

personalMovieDB.go()



/*students.sort()
let arr = []
for (let i = 0; i < students.length; i++) {
  let a = students.splice(0, 3)
  arr.push(a)
  if (students.length < 3) {
    if (!students.length) {
      arr.push('Оставшиеся студенты: -')
    } else {
      arr.push(`Оставшиеся студенты: ${ [...students] }`)
    }
  }
}

console.log(arr)


const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Sam'];


function sortStudentsByGroups(arr) {
  arr.sort()
  let group = []
  for (let i = 0; i < arr.length; i++) {
    let a = arr.splice(0, 3)
    group.push(a)
    if (arr.length < 3) {
      if (!arr.length) {
        group.push('Оставшиеся студенты: -')
      } else {
        group.push(`Оставшиеся студенты: ${arr.length === 0 ? '-' : arr.join(', ')}`)

      }
    }
  }
  console.log(group)
  return group
}

sortStudentsByGroups(students)*/



