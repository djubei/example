let a = 1
let b = 2;

a = [b, b = a][0]
console.log(a, b)


let c = 5
let z = c
console.log(z + c + c)

let obj2 = {
  c: 4,
  z: 5
}

let obj = {
  a: 1,
  b: 2
}
let objCopy = {...obj}

console.log(obj === objCopy)//false


function copy(obj) {
  let newObj = {}
  for (const objElement in obj) {
    newObj[objElement] = obj[objElement]
  }
  console.log(newObj, `newObj`)
  return newObj
}

copy(obj)
let g = [1, 2, 3]
console.log(typeof obj)
console.log(typeof g)
console.log(g.constructor === Array)
console.log(Object.prototype.toString.call(obj))
console.log(Object.prototype.toString.call(g))


Object.assign(obj, obj2) // объединение объектов
let y = Object.assign({}, obj2) // копирование объекта
console.log(y === obj2) //false

let deepObj = {
  a: 1,
  b: 2,
  c: {
    g: 1,
    v: 2
  }
}

const deepCope = JSON.parse(JSON.stringify(deepObj))
console.log(deepCope.c === deepObj.c) //false

let array = [1, 2, 3, 4, 5]
let newArray = array.map(it => it)
let newArray2 = [...array].reverse()
let newArray3 = array.slice()


//1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.

const personalPlanPeter = {
  showAgeAndLangs(personalPlanPeter) {
    return `Мне ${ personalPlanPeter.age } и я владею языками: ${ personalPlanPeter.skills.languages.map(el => el.toUpperCase()).toString().replace(",", " ") }`
  },
  name: "Peter",
  age: "29",
  skills: {
    languages: ['ru', 'eng'],
    programmingLangs: {
      js: '20%',
      php: '10%'
    },
    exp: '1 month'
  }
};

function showExperience(plan) {
  let {exp} = plan.skills
  return exp
}

function showProgrammingLangs(plan) {
  let progress = ''

  for (const lang in plan.skills.programmingLangs) {
    progress += `Язык ${ lang } изучен на ${ plan.skills.programmingLangs[lang] } \n`
  }
  return progress
}


showExperience(personalPlanPeter)
showProgrammingLangs(personalPlanPeter)
console.log(...personalPlanPeter.skills.languages.map(el => el.toUpperCase()))
personalPlanPeter.showAgeAndLangs(personalPlanPeter)


/*


1) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.

showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'

Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'

2) напишите функцию standardizeStrings, которая будет принимать в себя массив строк и будет выводить в консоль
эти строки в нижнем регистре.

Пример:

standardizeStrings(favoriteCities)  выведет в консоль

lisbon
rome
milan
dublin
Это частая задача в реальности, так как от пользователя нам могут прийти ответы в самых разных форматах. В том числе и с разными буквами :) Поэтому нам нужно привести строки в один формат для правильной работы.

Ответ с кодом этих задач можно найти тут: ссылка

Если у вас получилось немного по другому, но решение засчитывается - то все в порядке. Помните, что вариантов решения всегда несколько.

Но постарайтесь решить самостоятельно 🙂

Продолжение задач дальше по курсу.*/

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
  let a = `Семья состоит из: ${ arr.join(' ') };`
  console.log(a)
  return a
}

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
  for (const arrElement of arr) {
    console.log(arrElement.toLowerCase())
  }
}

showFamily(family)
standardizeStrings(favoriteCities)
console.log(family.join(' '))


/*

3) Задача с собеседований. Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку в
 обратном порядке.

Пример:

const someString = 'This is some strange string';
reverse(someString) => 'gnirts egnarts emos si sihT'

Функцию можно применить к любой строке. Если в функцию приходит не строка - вернуть сообщение "Ошибка!"

Это очень интересная задача, которую можно решить несколькими способами. Её дают для того, чтобы оценить навыки и знания программиста, посмотреть как он думает. Как небольшая подсказка, есть метод, который может вам помочь. И часть дополнительных вариантов решения мы тоже изучим в течении курса.

Может показать сложной с первого взгляда, но это совсем не так 🙂

4) Представьте такую реальную ситуацию. У вас есть банкомат, который выдает деньги из двух разных банков
в разных валютах. Один банк основной с базовыми валютами, второй дополнительный с прочими валютами:

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
Вам нужно создать главную функцию банкомата availableCurr, которая принимает два
аргумента: первый - это массив со всеми доступными валютами из двух банков сразу
(сейчас представим, что они не могут повторяться), второй - необязательный аргумент, который
указывает ту валюту, которая сейчас закончилась в банкомате. Если массив в первом аргументе пустой
 - то функция возвращает строку 'Нет доступных валют'. Функция возвращает строку в нужном виде.

Пример:

availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')
Вернет строку:

Доступные валюты:
UAH
RUB
Заметьте:

- CNY (юань) исчез из списка валют, значит такая валюта закончилась

- После валюты: стоит перенос строки \n, и после каждой валюты тоже. Это важно для тестов

- Данные для первого аргумента должны приходить сразу из двух банков, причем сначала baseCurrencies, потом additionalCurrencies по порядку

Ответ с кодом этих задач можно найти тут: ссылка

Если у вас получилось немного по другому, но решение засчитывается - то все в порядке. Помните, что вариантов решения всегда несколько.

Но постарайтесь решить самостоятельно 🙂*/


const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {

}


const someString = 'This is some strange string';

//reverse(someString) => 'gnirts egnarts emos si sihT'


function reverse(str) {
  if (typeof str !== "string") {
    return "Ошибка!";
  }
  let s = [...str];
  let st = '';
  for (let i = 1; i <= s.length; i++) {
    st += s[s.length - i];
  }
  return st;

}

reverse(someString)

console.log([...someString].reverse().join(''))
console.log([...'This is some strange string'])





