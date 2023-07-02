//
//
//
//
//
const box = document.getElementById('box')
console.dir(box)

const btns = document.getElementsByTagName('button')

console.dir(btns[1].style.color = 'orange')


const circle = document.getElementsByClassName('circle') // создает псевдомассив у которого нет никаких методов

console.log(circle)


const hearts = document.querySelectorAll('.heart') // создает псевдомассив с методом foreach
console.dir(hearts)

hearts.forEach(t => {
  console.log(t)
})

const oneHeart = document.querySelector('.heart') // берет первый совпавший элемент

console.dir('1')

hearts[0].style.cssText = "background-color:black"

for (let i = 0; i < hearts.length; i++) {
  hearts[i].style.backgroundColor = 'yellow'
}

for (const oneHeartElement of hearts) {
  oneHeartElement.style.backgroundColor = 'black'
}

const div1 = document.createElement('div')
const div2 = document.createElement('div')
div1.classList.add('black')
div2.style.backgroundColor = 'black'
div2.style.height = '100px'
div2.style.width = '100px'
document.body.append(div1)
document.body.prepend(div1)

const wrapper = document.querySelector('.wrapper')
wrapper.before(div2)
wrapper.after(div2)

circle[0].remove()

hearts[2].replaceWith(circle[1])

wrapper.insertBefore(div2, hearts[0])
wrapper.removeChild(div2)

wrapper.replaceChild(hearts[0], hearts[1])

wrapper.insertAdjacentHTML('beforebegin', '<h1 style="font-weight: bold">hello bobr</h1>')

wrapper.querySelector('.heart')