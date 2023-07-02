//
//
//
//
//
class User {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  #surname = 'Romanenko' // с помощью такого синтаксиса мы можем задать приватное свойство которое нельзя получить снаружи #-обозначает приватность


  get Surname() {
    return this.#surname
  }

  set Surname(surname) {
    this.#surname = surname
  }

  get Age() {
    return this.age
  }

  set Age(age) {
    if (typeof age === 'number') {
      this.age = age
    } else {
      console.log("ошибка")
    }
  }
}

const max = new User('Max', 34)


max.Age = "ыфвф"
max.Age
