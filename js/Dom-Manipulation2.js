//Dom Manipulation


//Event listeners


//element.addEventListener('click',function(){alert('Hello)})

const btn2 = document.querySelector('.btn-2')
btn2.addEventListener('click', () => {
  alert('sadsada')
})

//MouseOver

const newBGC = document.querySelector('.box-2')
newBGC.addEventListener('mouseover', () => {
  newBGC.style.backgroundColor = 'yellow'
})
newBGC.addEventListener('mouseout', () => {
  newBGC.style.backgroundColor = 'white'
})

const hiddenElem = document.querySelector('.hidden-content')
const revealBtn = document.querySelector('.reveal-btn')


revealBtn.addEventListener('click', () => {
  hiddenElem.classList.toggle('hidden')
})
/*revealBtn.addEventListener('click', () => {
  if (hiddenElem.classList.contains('hidden')) {
    hiddenElem.classList.remove('hidden')
  } else {
    hiddenElem.classList.add('hidden')
  }
})*/

//Event Propagation
window.addEventListener('click', function () {
  console.log('window')
}, false)
document.addEventListener('click', function () {
  console.log('document')
}, false)

document.querySelector('.div-1').addEventListener('click', function (e) {
  e.stopPropagation()
  console.log('div-1')
}, false)
document.querySelector('.div-2').addEventListener('click', function () {
  console.log('div-2')
}, false)
document.querySelector('.button').addEventListener('click', function (e) {
  console.log(e.target.innerText = 'clicked')
}, false)


/*document.querySelector('#football').addEventListener('click', function (e) {
  if (e.target.matches('li')) {
    if (e.target.style.backgroundColor === 'black') {
      e.target.style.backgroundColor = 'rgb(61, 203, 170)'
    } else {
      e.target.style.backgroundColor = 'black'
    }

  }
})*/ //5 times duplicate or ===>
document.querySelector('#sport').addEventListener('click', function (e) {
  console.log(e.target.getAttribute('id') + "is clicked")
  if (e.target.matches('li')) {
    if (e.target.style.backgroundColor === 'black') {
      e.target.style.backgroundColor = 'rgb(61, 203, 170)'
    } else {
      e.target.style.backgroundColor = 'black'
    }

  }

})

const sports = document.querySelector('#sport')
const newSport = document.createElement('li')
newSport.innerText = 'gandball'
newSport.setAttribute('id', 'gandball')
sports.addEventListener('click', function (e) {
  if (e.target.matches('ul')) {
    e.target.prepend(newSport)
  }
})

const a = (...args)=>{
  console.log(args)
}
a()