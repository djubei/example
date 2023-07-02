let massive = [1, 2, 3, 4, 5, 6, 7]

massive.push(4) //добавляет в конец массива

console.log(massive)

massive.pop() //удаляет последний элемент массива

massive.unshift(0, 12, 34, 0)// добавляет элемент в начало массива "очень ресурсоемкая операция"
console.log(massive)

massive.shift()// удаляет элемент из начала массива и возвращает его "очень ресурсоемкая операция"
console.log(massive)

delete massive[0] // удаляет значение первого элемента массива оставляя "empty"
console.log(massive)
console.log()


for (let i = 0; i < massive.length; i++) {
  console.log(massive[i])
}
for (const value of massive) {
  console.log(value)
}


let a = []
massive.forEach((elem, index, array) => {
  if (typeof elem === "number") {
    a[index - 1] = elem
  }

})

console.log(a, 'a')

a.forEach((elem, index, array) => {
  array[index] = elem + 1

})
console.log(a)

for (let i = 0; i < a.length; i++) {
  a[i] += 1
}
console.log(a)

let newObj = {}
a.forEach(((elem, index, array) => {
  newObj[index] = elem

}))
console.log(newObj)


let z = []
let i = 0
for (const key in newObj) {

  if (newObj[key] % 2 === 0) {
    z[i] = newObj[key]
    i++
  }

}
console.log(z)

// let str = prompt('', '')
// console.log(str.split(' '))// разделяет строку на массив
// console.log(str.split(' ').join(""))// разделяет массив на строку
function compareNum(a, b) {
  return a - b
}

z.sort(compareNum)
z.a = 1
console.log(z)
for (let j = 0; j < z.length; j++) {
  console.log(z[j])
  console.log(z['a'])
}

let n = {
  a: 1,
  b: 2,
  c: 3
}
Array.prototype.z = function () {
  console.log('z1')
}
Object.prototype.z = function () {
  console.log('z2')
}
Object.prototype.y = function () {
  console.log('y2')
}

for (const nKey in z) {
  console.log(nKey)
}
console.log(z)

