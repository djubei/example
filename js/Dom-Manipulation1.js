/*
setTimeout(() => {
  console.log('timeout 1')
}, 0)

let p = new Promise((resolve, reject) => {
  console.log('Promise')
  resolve()
})

async function asyncTest() {
  console.log('async code')
}

setTimeout(() => {
  console.log('timeout 2')
}, 5)


setTimeout(() => {
  console.log('timeout 3')
})

p.then(() => {
  console.log('Then')
})

asyncTest()

console.log('Script End')

let b = 'Script End Promise async code \'timeout 1\' \'timeout 3\ THen \'timeout 2\''
*/
//
//
//
//
/*let a = document.querySelectorAll('.a')
a.forEach(t => {
  t.style.color = 'red';
  console.log(t)
})*/
//
//
//
/*//                                Create Element
let ul = document.querySelector('.b')
let li = document.createElement("li")

//ul.prepend(b)

//                                Adding Element
ul.append(li)
let ListItem = document.querySelector("li")

console.log(ListItem)
console.log(ListItem.textContent)
console.log(ListItem.innerText)
console.log(ListItem.innerHTML)
ListItem.innerText = 'X-men'
//                                Modify Elements and Classes
ListItem.setAttribute('id', 'main-heading');
const title = document.querySelector('#main-heading');
console.log(title.getAttribute('id'))
ListItem.removeAttribute('id');


li.classList.add('list-items')
li.classList.remove('list-items')
console.log(li.classList.contains('list-items'))
//li.remove()*/
//
//
//
//                                 Parent node traversal Обход родительского узла
/*let ul = document.querySelector('ul')
console.log(ul.parentNode)
console.log(ul.parentElement)
console.log(ul.parentElement.parentElement)
console.log(ul.parentElement.parentNode)
console.log(ul)

const html = document.documentElement
console.log(html.parentElement)
console.log(html.parentNode)*/
//
//
//
//                                 Child node traversal обход дочернего узла
/*
let ul = document.querySelector('ul')
console.log(ul, 'ul')
console.log(ul.childNodes)
console.log(ul.firstChild) // отступ в html доке счетается за text node который не является элементом
console.log(ul.lastChild) //
//ul.firstChild.style.backgroundColor = 'blue' // без отступа стиль изменится а с отступом будет ошибка т.к. к текст ноде нельзя применить стиль
ul.childNodes[1].style.backgroundColor = 'orange'
console.log(ul.children) // массив с элементами
console.log(ul.firstElementChild) // выбирает первый элемент
console.log(ul.lastElementChild) // выбирает первый элемент
*/
//
//
//
//                                  Sibling node traversal Обход родственного узла(на одном уровне тоесть)
const ul = document.querySelector('ul')
const div = document.querySelector('div')
console.log(div.childNodes) // все ноды не только елемы
console.log(ul.previousElementSibling) // h1
console.log(ul.nextElementSibling) // null
console.log(ul.previousSibling)
console.log(ul.previousSibling.previousSibling)
console.log(ul.previousSibling.previousSibling.previousSibling.previousSibling)
console.log(ul.nextSibling)









