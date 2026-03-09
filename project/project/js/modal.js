// Modal

const modal = document.querySelector('.modal')
const modalClose = document.querySelector('.modal_close')

modalClose.addEventListener('click', () => {
  modal.classList.remove('modal_open')
})

modal.addEventListener('click', (e) =>{
  if (e.target === modal) modal.classList.remove('modal_open')
})

const onScroll = () => {
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 5) {
    modal.classList.add('modal_open')
    window.removeEventListener('scroll' , onScroll)
  }
}

window.addEventListener('scroll', onScroll)

setTimeout(() => {
  modal.classList.add('modal_open')
}, 10000)