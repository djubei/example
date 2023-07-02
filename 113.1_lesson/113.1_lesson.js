/*
console.log(23)

//filter
const names = ['Ann', 'Ivan', 'Alex,', 'Matumba', 'Kseniamorf']

const shortNames = names.filter(name => name.length < 5)


//map

const names1 = ['AnnA', 'IvAn', 'AlEx,', 'Matumba', 'Kseniamorf']

const upperCaseNames = names1.map(name => name[0].toUpperCase() + name.toLowerCase().slice(1))


//every/some


const some = ['AnnA', 1, 'AlEx,', 'Matumba', 'Kseniamorf']

some.some(item => typeof item === "number")

const every = ['AnnA', '1', 'AlEx,', 'Matumba', 'Kseniamorf']

every.every(item => typeof item === "string")

//reduce

const numbers = [1, 2, 3, 4, 5, 6, 7]

numbers.reduce((acc, item,) => acc + item, 0)


//Object.entries

const obj = {
  Ann: 'person',
  dog: 'animal',
  oak: 'tree',
  apple: 'fruit',
}
let arr = Object.entries(obj)

arr = arr.map(t => t[0])

arr.reduce((acc, item) => `${ acc },${ item }`)

arr = Object.entries(obj)
arr = arr.reduce((acc, item) => {
  if (item[1] === 'person') {
    return acc + item[0]
  }
  return acc
}, '')

console.log(arr)

*/
/*1) У вас есть небольшой массив с данными о доходах каждой торговой точки. Напишите функцию getPositiveIncomeAmount,
 которая принимает этот массив данных и возвращает сумму только положительных значений из каждого объекта. (число)

Пример:

getPositiveIncomeAmount(funds) => 13300

2) Напишите функцию getTotalIncomeAmount, которая тоже принимает этот массив данных.
Если хотя бы один из объектов содержит отрицательное значение поля amount, то функция возвращает сумму всех значений.
(число) Если таких значений нет - запускается функция getPositiveIncomeAmount с тем же массивом данных.

Пример:

getTotalIncomeAmount(funds) => -500*/

const funds = [
  {amount: -1400},
  {amount: 2400},
  {amount: -1000},
  {amount: 500},
  {amount: 10400},
  {amount: -11400}
];


const getPositiveIncomeAmount = (data) => {
  return data.reduce((acc, obj) => {
    if (obj.amount > 0) {
      acc += obj.amount
    }
    return acc
  }, 0)
};
getPositiveIncomeAmount(funds)


const getTotalIncomeAmount = (data) => {
  if (data.some(obj => obj.amount < 0)) {
    return data.reduce((acc, obj) => {
      return acc += obj.amount
    }, 0)
  } else {
    return data.reduce((acc, obj) => {
      if (obj.amount > 0) {
        acc += obj.amount
      }
      return acc
    }, 0)
  }
};
getTotalIncomeAmount(funds)