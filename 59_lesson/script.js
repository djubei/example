// for in не используют для массива или строки или любой другой конструкции где важен порядок
// потому что иногда бывает ошибка и порядок нарушается

// для массивов используют for of он сразу выводит значение

// если к объекту можно применить кострукцию for of значит он итерируемый

// у итерируемого объекта есть св-во в прототипе Symbol(Symbol.iterator):ƒ values()

// у итерируемых объектов строгое соответствие порядка в переборе  и исключение всех лишних св=в которые
// могут быть унаследованы например объявленные нами методы Array.prototype.someMethod = function () {console.log('hi')}

const user = {
  name: 'Max',
  surname: 'Romanenko',
  birthday: '04-03-1989',
  showMyPublicData: function () {
    console.log(`${ this.name } ${ this.surname }`)
  }
}

let arr = ['b', 'a', 'c']


for (const key in user) {
  console.log(user[key])
}
for (const key in arr) {
  console.log(arr[key])
}

let arrNum = [2, 5, 2, 7, 9]
console.log(arrNum.sort((a, b) => a - b))

let str = 'sdfsdfdsfsdf'
for (const key in str) {
  console.log(str[key])
}
for (const value of str) {
  console.log(value)
}
console.dir(arr)

Array.prototype.someMethod = function () {
  console.log('hi')
}
for (const value in arr) {
  console.log(arr[value])
}

const salaries = {
  max: 5000,
  ann: 1000,
  ivan: 500,
  someMethod() {
    console.log('hello')
  }
}

salaries[Symbol.iterator] = function () {

  return {
    last: this.max,
    current: this.ivan,
    next() {
      if (this.current < this.last) {
        this.current = this.current + 500
        return {done: false, value: this.current}
      } else {
        return {done: true}
      }
    }
  }
}

for (const salary of salaries) {
  console.log(salary)
}

const iter = salaries[Symbol.iterator]()
console.log(iter)
console.log(iter.next())
