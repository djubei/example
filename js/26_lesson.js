let inp = document.querySelector('.example')
let change = document.querySelector('.change')
let press = document.querySelector('.press')
let nunu = inp.value

function calc() {

  //debugger
  nunu = inp.value
  change.innerHTML = Number(inp.value) * 24
  console.log(nunu)

}




document.addEventListener('DOMContentLoaded', () => {
  press.addEventListener('click', calc)
})
