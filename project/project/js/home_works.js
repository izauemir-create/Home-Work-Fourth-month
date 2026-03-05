// Homework 1 (part 1)

const input = document.getElementById("gmail_input")
const button =  document.getElementById("gmail_button")
const result = document.getElementById("gmail_result")

const regExp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/

button.addEventListener('click', function (){
  const value = input.value

  if (regExp.test(value)) {
    result.textContent = 'Правильный gmail!'
    result.style.color = 'green'
  } else {
    result.textContent = 'Попробуй еще раз!'
    result.style.color = 'red'
  }
})

// <h3>Homework 1 (part 2)</h3>

const parent = document.querySelector('.parent_block')
const small = document.querySelector('.child_block')

let x = 0
let y = 0
let side = 0 // 0=право 1=вниз 2=влево 3=вверх
const speed = 2

function move () {
  const maxX = parent.offsetWidth - small.offsetWidth
  const maxY = parent.offsetHeight - small.offsetHeight

  if (side === 0) {
    x += speed
    if (x >= maxX) {x = maxX; side = 1} //вниз
  } else if (side === 1) {
    y += speed
    if (y >= maxY) {y = maxY; side = 2} //влево
  } else if (side === 2) {
    x -= speed
    if (x <= 0) {x = 0; side = 3}//вверх
  } else if (side === 3) {
    y -= speed
    if (y <= 0) {y = 0; side = 0}//право
  }

  small.style.left = `${x}px`
  small.style.top = `${y}px`

  requestAnimationFrame(move)
}

move()

// <h3>Homework 2 </h3>


const seconds = document.getElementById('seconds')
const startBtn = document.getElementById('start')
const stopBtn = document.getElementById('stop')
const resetBtn = document.getElementById('reset')

let count = 0
let interval = null

startBtn.addEventListener('click' , () => {
  if (interval !== null) return

  interval = setInterval(() => {
    count++
    seconds.textContent = count
  } ,1000)
})

stopBtn.addEventListener('click' , () => {
  clearInterval(interval)
  interval = null
})

resetBtn.addEventListener('click', () => {
  clearInterval(interval)
  interval = null
  count = 0
  seconds.textContent = 0
})