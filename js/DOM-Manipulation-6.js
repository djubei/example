//
//
//
//

const startStopBtn = document.querySelector('.startStopBtn')
const play = document.querySelector('#play')
const reset = document.querySelector('#reset')
const timer = document.querySelector('.timer')

let LeadingSeconds = '0'
let LeadingMinutes = '0'
let LeadingHours = '0'


let seconds = 0
let minutes = 0
let hours = 0


let timerInterval = null
let timerStatus = 'stopped'

function stopWatch() {
  seconds++
  timer.innerText = (hours < 10 ? LeadingHours + hours : hours) + ':' + (minutes < 10 ? LeadingMinutes + minutes : minutes) + ':' + (seconds < 10 ? LeadingSeconds + seconds : seconds)
  if (seconds === 60) {
    minutes++
    seconds = 0
    if (minutes === 60) {
      hours++
      minutes = 0
    }
  }
}


startStopBtn.addEventListener('click', function () {
  if (timerStatus === 'stopped') {
    timerInterval = window.setInterval(stopWatch, 1000)
    startStopBtn.innerHTML = '<i class="fa-solid fa-pause" id="pause"></i>'
    timerStatus = 'started'
  } else {
    window.clearInterval(timerInterval)
    startStopBtn.innerHTML = '<i class="fa-solid fa-play" id="play"></i>'
    timerStatus = 'stopped'
  }
})


reset.addEventListener('click', function () {
  window.clearInterval(timerInterval)
  startStopBtn.innerHTML = '<i class="fa-solid fa-play" id="play"></i>'
  timerStatus = 'stopped'
  seconds = 0;
  hours = 0;
  minutes = 0;
  timer.innerText = (hours < 10 ? LeadingHours + hours : hours) + ':' + (minutes < 10 ? LeadingMinutes + minutes : minutes) + ':' + (seconds < 10 ? LeadingSeconds + seconds : seconds)
})

