'use strict'
let o = new Object()
o.test = 1
o['g'] = 2
console.log('o', o)
o.run = function (n) {
  alert("Пробежал " + n + " метров!")
}

let options = {
  name: 'test',
  width: 1024,
  high: 1024,
  color: {
    border: 'black',
    bgc: 'red'
  },
  makeTest1() {
    console.log('test1')
  },
  makeTest2: function () {
    console.log('test2')
  }
}

//delete options.high

console.log(options, 'options')


let counter1 = 0
for (let key in options) {
  if (typeof options[key] === "object") {
    for (let i in options[key]) {
      console.log(`Свойство ${ key } имеет значение ${ options[key][i] }`)
      counter1++
    }
  } else {
    console.log(`Свойство ${ key } имеет значение ${ options[key] }`)
    counter1++
  }

}
let counter = 0
for (let key in options) {

  counter++

}
console.log(counter, 'counter')

let objLength = Object.keys(options).length
console.log(objLength, "objLength")
options.makeTest1()
options.makeTest2()

const {border, bgc} = options.color
console.log(border, bgc)

function this1() {

  let vasya = {name: 'Вася'}

  let petya = {name: 'Петя'}


  let sayName = function () {

    alert("Я - " + (this.name ? this.name : 'безымянный'))

  }


  vasya.sayName = sayName


// один и тот же метод в двух объектах

  petya.sayName = vasya.sayName


// тут - this будет petya

  petya.sayName()  // Я - Петя


// тут - this будет vasya

  vasya.sayName()  // Я - Вася


// а тут - вызывается метод глобального объекта window, у которого нет имени

  sayName()
} // Я - безымянный

for (let key in options) {

  if (!options.hasOwnProperty(key)) continue

  //...Эта форма отфильтровывает свойства, которые принадлежат не самому объекту, а его прототипу. Поэтому она работает,
  // даже если в прототип Object добавлены новые свойства.

}

function Animal(name) {
  this.name = name
  this.canWalk = true
}

let animal = new Animal('cat')
console.log(animal)
console.log(animal instanceof Animal)  // => true проверяет принадлежность к классу (родительский класс)

function Rabbit(name) {
  this.name = name
}

Rabbit.prototype = animal

let big = new Rabbit('chuk')
let small = new Rabbit('gek')

console.log(big, 'chuk')
console.log(big.canWalk)

if (big.__proto__) {
  console.log(small.__proto__.name, 'name')
}
console.log(big.name)

animal.canWalk = false

//big.canWalk  // false
//small.canWalk // false

big.canWalk = true

//alert(big.canWalk)  // false

//alert(small.canWalk)  // true

console.log(Animal.prototype = {}, 'Animal.prototype')


Animal.prototype.move = function (n) {

  this.distance = n

  console.log(this.distance, 'distance')
}
let annieMal = new Animal('annie')
annieMal.move(4)
annieMal.move(6)


function Hamster() {
  this.food = []
}

Hamster.prototype = {

  food: [],

  found: function (something) {

    this.food.push(something)

  }

}


let speedy = new Hamster()

let lazy = new Hamster()


speedy.found("apple")

speedy.found("orange")


console.log(speedy.food.length, 'speedy.food.length') // 2

console.log(lazy.food.length, 'lazy.food.length') // 2 (!??)

Rabbit.prototype = new Animal()


function extend(Child, Parent) {
  let F = function () {
  }
  F.prototype = Parent.prototype
  Child.prototype = new F()
  Child.prototype.constructor = Child
  Child.superclass = Parent.prototype
}


// создали базовый класс

function Animal() {
}


// создали класс

// и сделали его потомком базового

function Rabbit() {
}

extend(Rabbit, Animal)


// добавили в класс Rabbit методы и свойства

Rabbit.prototype.run = function () {
}


// все, теперь можно создавать объекты

// класса-потомка и использовать методы класса-родителя

let rabbit = new Rabbit()

//rabbit.animalMethod()

/*
function Animal(name) {// factory function возвращает объект

  let speed = 10

  return {

    name: name,

    run: function (distance) {

      return distance / speed

    }

  }

}

let pet1 = Animal()

let pet2 = Animal()*/


/*function Rabbit(name) { //создание потомка

  // вызвать конструктор родителя,
  // получить родительский объект в me
  let me = Animal(name)

  // добавить приватную переменную
  let jumps = 0

  /!* добавить новые методы к me *!/
  me.jump = function () {
    jumps++
  }
  me.getJumps = function () {
    return jumps
  }

  // поставить правильное свойство конструктора
  // (делаем вид, что объект создали мы, а не Animal)
  me.constructor = arguments

  return me
}*/

let vasya = {
  name: "Василий"
}
let dima = {
  name: "Дмитрий"
}

function say() {
  console.log("Привет " + this.name)
}

dima.say = say
vasya.say = say
vasya['say']()
dima.say()
say.call(dima)


function sum(a, b) {
  this.c = a + b
}

let obj = {}

sum.call(obj, 1, 2)
// или
sum.apply(obj, [1, 2])

console.log(obj.c)   // => 3


let afv = [1, 2, 3, 4, 5, 6, 7, 1]

for (let item of afv) {
  console.log(item, 'item')
}

let fdgdfg = {
  a: 'Alice',
  b: 'Cooper',
  e: 3,
  c: 1,
  get fullName() {
    return this.a + this.b
  },
  set fullName(fullName) {
    [this.a, this.b] = fullName.split(' ')
  }
}
let vbc = {}
for (let key in fdgdfg) {
  vbc["+" + key] = fdgdfg[key]
}
console.log(vbc)

fdgdfg.fullName = 'Max AV'
console.log(fdgdfg)

Object.defineProperty(fdgdfg, 'user', {
  get() {
    return `${ this.a } ${ this.b }`
  },
  set(user) {
    [this.a, this.b] = user.split(' ')
  }
})

console.log(fdgdfg.user, 'user')


let user = {
  _name: 'Max'
}

Object.defineProperty(user, 'name', {
  get() {
    return this._name
  },
  set(name) {
    if (name.length < 4) {
      console.log('not enough symbols')
      return
    }
    this._name = name
  }
})

console.log('name', user.name)
user.name = 'moba'
console.log('name', user.name)

function User(name, birthday) {
  this.name = name
  this.birthday = birthday
}

let john = new User('John', new Date(1992, 6, 1))
console.log(john)

Object.defineProperty(john, 'age', {
  get() {
    let todayYear = new Date().getFullYear()
    return todayYear - this.birthday.getFullYear()
  }
})
console.log(`age`, john.age)


class Student {
  constructor(name) {
    this.name = name
  }

  sayHi() {
    console.log(`Hi ${ this.name }`)
  }
}

let max = new Student('Max')

max.sayHi()


let BUser = class MyClass {
  sayHi() {
    console.log(MyClass); // имя MyClass видно только внутри класса
  }
};

new BUser().sayHi()


class VUser {

  constructor(name) {
    // вызывает сеттер
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      alert("Имя слишком короткое.");
      return;
    }
    this._name = value;
  }

}

let vuser = new VUser("Иван");
console.log(vuser.name); // Иван

vuser = new VUser("asdasd"); // Имя слишком короткое.
console.log(vuser._name, 'vuser._name')

Object.defineProperties(User.prototype, {
  name: {
    get() {
      return this._name
    },
    set(name) {
      // ...
    }
  }
});

class ZUser {
  name = "Аноним";

  sayHi() {
    console.log(`Привет, ${ this.name }!`);
  }
}

new ZUser().sayHi();

/*
class MyClass {
  prop = value; // свойство
  constructor(...) { // конструктор
    // ...
  }
  method(...) {} // метод
  get something(...) {} // геттер
  set something(...) {} // сеттер
  [Symbol.iterator]() {} // метод с вычисляемым именем (здесь - символом)
  // ...
}*/


class Alien {
  constructor(name) {
    this.speed = 0
    this.name = name
  }

  run(speed) {
    this.speed = speed
    console.log(`${ this.name } бежит со скоростью ${ this.speed }`)
  }

  showName() {
    console.log(`${ this.name }`)
  }

  stop() {
    this.speed = 0
    console.log(`${ this.name } стоит неподвижно`)
  }
}

let alien = new Alien('киса')

class Fox extends Alien {
  hide() {
    console.log(`${ this.name } прячется`)
  }
}

let fox = new Fox('белый лис')

fox.showName()
fox.hide()
fox.stop()

function fc(phrase) {
  return class {
    sayHi() {
      console.log(phrase)
    }
  }
}

class UUser extends fc('привет привет привет') {
}

new UUser().sayHi()

class Rat extends Alien {
  stop() {
    console.log('stop stop stop')
  }
}

new Rat('rat').stop()

class Bird extends Alien {
  hide() {
    console.log(this.name, 'hide')
  }

  stop() {
    super.stop();
    this.hide()
  }
}

new Bird('parrot').stop()

class Labbit extends Alien {
  stop() {
    setTimeout(() => super.stop(), 1000); // вызывает родительский stop после 1 секунды
  }
}

new Labbit('labbit').stop()


class A extends Alien {
  // генерируется для классов-потомков, у которых нет своего конструктора
  constructor(...args) {
    super(...args);
  }
}

class Snake extends Alien {
  constructor(name, earLength) {
    super(name);
    this.earLength = earLength
  }
}

let snake = new Snake('snake')

console.log(snake.name)

let [m,n,b] = 'abc'

console.log(m)