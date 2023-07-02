let openModalBtn = document.querySelector('.open-modal')
let modalContainer = document.querySelector('.modal-container')
let closeBtn = document.querySelector('.close-modal')


openModalBtn.addEventListener('click', () => {
  modalContainer.style.display = 'flex'
})
closeBtn.addEventListener('click', () => {
  modalContainer.style.display = 'none'
})

window.addEventListener('click', function (e) {

  if (e.target === modalContainer) {
    modalContainer.style.display = 'none'
  }
})