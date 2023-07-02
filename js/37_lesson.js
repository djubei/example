//когда мы применяем методы к строке js в начале оборачивает эту строку в объект и после модификации возвращает строку
//на место

let str = 'new'
let strObj = new String(str)
console.log(str)
console.log(strObj)
console.log(typeof strObj)
console.log(typeof str)

console.dir([1, 2, 3])


let soldier = {
  health: 100,
  armor: 100,
  sayHello: function () {
    console.log('Hello')
  },
  sayHi() {
    console.log('Hi')
  }
}
let john = {
  health: 100
}

john.__proto__ = soldier //одно и тоже унаследовать прототип от
Object.setPrototypeOf(john, soldier) //одно и тоже унаследовать прототип от

console.log(john.armor)
john.sayHello()
john.sayHi()

let vasya = new Object(soldier)
let leha = Object.create(soldier)
console.log(vasya)//создает объект со св-вами и методами
console.log(leha)// создает пустой объект с доступом к св-вам и методам


