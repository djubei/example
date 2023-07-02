let singleton = function () {

  // Внутренняя логика
  function sayHello() {
    console.log('Hello');
  }

  // Внешнее API
  return {
    sayHello
  }
}()
singleton.sayHello()

// Объявление модуля как глобальной переменной
let Module = function (a) {

  // Внутренняя логика
  function sayHello() {
    console.log(a + 'Hello');
  }

  // Внешнее API
  return {
    sayHello: sayHello
  }
}
let module = new Module('.!.')
module.sayHello()
let zodule = new Module('=]')
zodule.sayHello()


