//
//
//
//
/*
let num = 5;
debugger

function f() {
  let num = 4;
  debugger
  console.log(num)
}

num = 6

f();debugger*/

/*

function createCounter() {
  let counter = 0
  const myFunction = function () {
    counter = counter + 1
    return counter
  }
  return myFunction()
}


const increment = createCounter()

let c1 = increment()
let c2 = increment()
let c3 = increment()*/


/*Измените код makeCounter() так, чтобы счётчик мог уменьшать и устанавливать значение:

  counter() должен возвращать следующее значение (как и раньше).
counter.set(value) должен устанавливать счётчику значение value.
counter.decrease() должен уменьшать значение счётчика на 1.
Посмотрите код из песочницы с полным примером использования.

  P.S. Для того, чтобы сохранить текущее значение счётчика, можно воспользоваться
  как замыканием, так и свойством функции.
  Или сделать два варианта решения: и так, и так.*/

/*

let z = 5;
console.log(z++); // постфикс префикс

console.log([1, 2] + false) //1,2false
console.log([] + false - null + true)//массив в подобных операциях будет приведен к пустой строке или просто к строке

let y = 1;
let x = y = 2;  // операции присваивания выполняются справа на лево
console.log(x);

console.log([] + 1 + 2)

console.log('1'[0])

//console.log(!!(a && b), (a && b))


console.log(2 && 1 && null && 0 && undefined)


console.log(null || 2 && 3 || 4);

a = [1, 2, 3];
b = [1, 2, 3];

console.log(a === b)

console.log(+Infinity)

console.log(`apple` > `Buba`, "ежжияблоко")// посивмольное сравнение чем дальше по алфавиту буква тем выше у нее значение
// если в одном регистре, если в разных то с верхним регистром будем младше

console.log(0 || '' || 2 || undefined || true || false)

console.log([] == []) //false*/


const restorantData = {
  menu: [
    {
      name: 'Salad Caesar',
      price: '14$'
    },
    {
      name: 'Pizza Diavola',
      price: '9$'
    },
    {
      name: 'Beefsteak',
      price: '17$'
    },
    {
      name: 'Napoleon',
      price: '7$'
    }
  ],
  waitors: [
    {name: 'Alice', age: 22}, {name: 'John', age: 24}
  ],
  averageLunchPrice: '20$',
  openNow: true
};

function isOpen(prop) {
  let answer = '';
  prop ? answer = 'Открыто' : answer = 'Закрыто';

  return answer;
}

console.log(isOpen(restorantData.openNow))

function isAverageLunchPriceTrue(fDish, sDish, average) {
  let fd = +fDish.price.slice(0, -1)
  let avrg = +average.slice(0, -1)
  let sd = +sDish.price.slice(0, -1)
  let sum = fd + sd
  if (sum < avrg) {
    return 'Цена ниже средней';
  } else {
    return 'Цена выше средней';
  }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
  debugger
  const copy = Object.assign({}, data);

  copy.waitors = [{name: 'Mike', age: 32}];
  return copy;
}

transferWaitors(restorantData);