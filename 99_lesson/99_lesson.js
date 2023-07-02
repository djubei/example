`use strict`

/*

// new RegExp('pattern','flag')  синтаксис объявления регулярного выражения
// /pattert/f

const ans = prompt('Введите ваше имя')
let reg = /n/
reg = /n/i
console.log(ans.search(reg)) // показывает индекс первой найденой буквы
// Флаги
// i ищем чтото в независимости от регистра
// g ищем сразу несколько вхождений
// m многострочный режим
// \d ищем все цифры
// \w ищем все слова
// \s ищем все пробелы
// \D ищем все НЕ цифры
// \W ищем все НЕ слова
// \S ищем все пробелы



console.log(ans.match(reg)) // match показывает массив с данными строки первое совпадение совпадения /n/i
reg = /n/ig // покажет все буквы n в строке независимо от регистра
console.log(ans.match(reg)) // покажет массив со всеми буквами 'n' в строке
console.log(ans.test(reg)) // вернет true или false если в строке есть или нет совпадений

const pass = prompt('password')
reg = /./g // все буквы в строке
reg = /\./g // все точки в строке
console.log(pass.replace(/./g, '*'))

console.log('31-12-15'.replace(/-/g, ':')) // заменить все - на :
*/

/*
const pass = prompt('password')
reg = /\d/ // все цифры в строке

console.log(pass.replace(reg, 'h'))
*/

const name = 'My nam is R2D2'

console.log(name.match(/\w\d\w\d/i))



