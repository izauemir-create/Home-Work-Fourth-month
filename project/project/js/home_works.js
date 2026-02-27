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

let position = 0

function move () {
  position += 2

  small.style.left = `${position}px`

  const maxPosition = parent.offsetWidth - small .offsetWidth

  if (position < maxPosition) {
    requestAnimationFrame(move)
  }
}

move()
