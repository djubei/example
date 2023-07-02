import { gg } from "./scratch.js";
import * as say from "./scratch.js";
import { mb as asd } from "./scratch.js"
import { tralala } from "./scratch.js";
import { default as abv, gde } from "./scratch.js"
import kkk from "./19lesson.js"

export { asd }
export { gg } from "./scratch.js"
export { default as bbb } from "./19lesson.js"
export * from "./scratch.js"
export { default } from "./scratch.js"
console.log(gg)
console.log(import.meta.url, 'meta')
console.log(this, 'this')
// что бы импортировать что-то в скрипте скрипт должен быть модулем а путь расширение должно быть точным ".js" import { gg } from "./scratch.js";"
//загрузка внешних модулей, таких как <script type="module" src="...">, не блокирует обработку HTML.
//такой скрипт может видеть элементы HTML страницы и работать с ними в отличии от обычного
"use strict"

function showMessage() {
  console.log('hello world')
}

showMessage()


function showFirstMessage(text) {
  let num = 10 // локальная переменная
  console.log(text)
}

showFirstMessage('text world')
//console.log(num) // мы ее не видим


let varr = 1

function showFirstMessage1(text) {
  varr = 10 // меняем в блоке ф-ии
  console.log(text)
}

showFirstMessage1('showFirstMessage1')
console.log('varr -', varr)

let varr1 = 20

function showFirstMessage2(text) {
  let varr1 = 10 // меняем в блоке ф-ии
  console.log(text)
}

console.log('varr1 -', varr1)

//замыкание это сама ф-ии со всеми внешними переменными которые ей доступны

function fooDeclaration() { //function declaration объявление ф-ии доступна для вызова до ее объявления
  return 1
}

let fooExpression = function () { //function expression функциональное выражение
  return 1
}

let fooArrow = () => { // arrow function стрелочная ф-ия не имеет своего контекста
  return 1
}

/*
let name = "John";

function sayHi() {
  return ("Hi, " + name);
}

name = "Pete";

sayHi(); // что будет показано: "John" или "Pete"?


*/

function makeWorker() {
  let name = "Pete";

  return function () {
    return (name);
  };
}

let name = "John";

// create a function
let work = makeWorker();

// call it
work(); // что будет показано? "Pete" (из места создания) или "John" (из места выполнения)


//Один вызов – одно лексическое окружение
//Пожалуйста, обратите внимание, что новое лексическое окружение функции создаётся каждый раз, когда функция выполняется.
//И, если функция вызывается несколько раз, то для каждого вызова будет своё лексическое окружение, со своими,
// специфичными для этого вызова, локальными переменными и параметрами.


/*
// функция-конструктор возвращает новый объект
function User(name) {

  // методом объекта становится вложенная функция
  this.sayHi = function() {
    alert(name);
  };
}

let user = new User("John");
user.sayHi(); // у кода метода "sayHi" есть доступ к внешней переменной "name"*/


function makeCounter() {
  let count = 0;

  return function () {
    return count++; // есть доступ к внешней переменной "count"
  };
}

let counter = makeCounter();
let cc = makeCounter()
cc() //0
counter() // 0
counter() // 1
counter() // 2
makeCounter()() //0
makeCounter()() //0
makeCounter()(); //0


(function () {

  let message = "Hellooooooooooo";

  console.log(message); // Hello

})();

// Пути создания IIFE

(function () {
  console.log("Скобки вокруг функции");
})();

(function () {
  console.log("Скобки вокруг всего");
}());

!function () {
  console.log("Выражение начинается с логического оператора NOT");
}();

+function () {
  console.log("Выражение начинается с унарного плюса");
}();


let value = "surprice"

function f() {
  let value = Math.random();

  function g() {
    //debugger; // в консоли: напишите alert(value); Такой переменной нет!
  }

  return g;
}

let g = f();
g();

let sum = (a) => {
  return (b) => a + b
}
console.log('sum', sum(4)(-1))


let arr = [1, 2, 3, 4, 5, 6, 7];
const inBetween = (a, b) => {
  return function (t) {
    return t >= a && t <= b
  }


}
let arr2 = []
const inArrayy = (arr1) => {

  return function (t) {
    //debugger
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === t) {
        arr2.push(t)
      }
    }
  }

}
const inArray = (arr1) => {

  return function (t) {
    //debugger
    arr1.includes(t)
  }


}


const a = arr.filter(inBetween(3, 6))
const b = arr.filter(inArray([3, 6, 10]))

console.log(...a)
console.log(arr2)


let users = [
  {name: "John", age: 20, surname: "Johnson"},
  {name: "Pete", age: 18, surname: "Peterson"},
  {name: "Ann", age: 19, surname: "Hathaway"}
];


const byFiledName = (fieldName) => {
  return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1
}


let n = users.sort(byFiledName('name'));
let m = users.sort(byFiledName('age'));
let v = users.sort(byFiledName('surname'));
console.log('v', v)


function makeArmy() {
  let shooters = [];

  for (let i = 0; i < 10; i++) {
    //debugger
    let shooter = function () { // функция shooter
      console.log(i); // должна выводить порядковый номер
    };
    shooters.push(shooter);
  }

  return shooters;
}

let army = makeArmy();
console.log('army', army)
army[0](); // у 0-го стрелка будет номер 10
army[5](); // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...
console.log(say.mb, say.bm, say.gg)
console.log(asd, 'asd')
console.log(tralala, 'tralala')
console.log(abv, 'abv')
console.log(gde, 'gde')
console.log(kkk, 'kkk')


// функция объявленная с помощью new Function([arg1, arg2, ...argN], functionBody); в её [[Environment]]
// записывается ссылка не на внешнее лексическое окружение, в котором она была создана, а на глобальное.
// Поэтому такая функция имеет доступ только к глобальным переменным.
function getFunc() {
  let value = "test";

  let func = new Function('alert(value)');

  return func;
}

getFunc()(); // ошибка: value не определено

new Function('a', 'b', 'return a + b'); // стандартный синтаксис
new Function('a,b', 'return a + b'); // через запятую в одной строке
new Function('a , b', 'return a + b'); // через запятую с пробелами в одной строке
//Функции, объявленные через new Function, имеют [[Environment]], ссылающийся на глобальное лексическое окружение,
// а не на родительское. Поэтому они не могут использовать внешние локальные переменные. Но это очень хорошо,
// потому что страхует нас от ошибок. Переданные явно параметры – гораздо лучшее архитектурное решение,
// которое не вызывает проблем у минификаторов.
