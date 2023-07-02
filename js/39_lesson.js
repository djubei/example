// Типизация


console.log(typeof (String(null)))
console.log(typeof (String(4)))

console.log(typeof ('1' + 2))
console.log(typeof ('1' + null))

const num = 5

console.log('https://habr.com/ru/post/437512/' + num)


const fontSize = 24 + 'px'

console.log(typeof (Number('4')))


console.log(typeof (+'2'))

console.log(typeof (parseInt('15px',8)))


//const prom = +prompt('wtf?','')

let arr = [0,'',null,undefined,NaN]
let tru = !!'d'

console.log(Boolean(0))