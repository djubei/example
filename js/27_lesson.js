function f() {

  for (let i = 0; i < 5; i++) {
    console.log(i)
    for (let i = 0; i < 5; i++) {
      console.log(i, 'j')
      if (i === 3) {
        return
      }

    }// return завершит ф-ию все что идет после return - unreachable, break остановит цикл и мы увидим 'done'
  }
  console.log('done')
}

f()

//ф-ия без явного return возвращает undefined
console.log(console)

console.log('2' + 2)

function sayHello(name) {
  return "Привет, " + name + "!"
}

sayHello('вася')

function returnNeighboringNumbers(number) {

  return [--number, ++number, ++number]
}

returnNeighboringNumbers(3)


function getMathResult(arg1, arg2) {
  let x = []
  if (typeof arg2 !== "number" || arg2 <= 0) {
    return arg1
  } else {
    for (let i = 1; i <= arg2; i++) {
      x[i - 1] = arg1 * i
    }
  }
  return x.join('---')
}

getMathResult(3, 4)