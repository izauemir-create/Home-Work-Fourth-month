// Homework 1 (part 1)

const input = document.getElementById("gmail_input")
const button = document.getElementById("gmail_button")
const result = document.getElementById("gmail_result")

const regExp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/

button.addEventListener('click', function () {
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

function move() {
  const maxX = parent.offsetWidth - small.offsetWidth
  const maxY = parent.offsetHeight - small.offsetHeight

  if (side === 0) {
    x += speed
    if (x >= maxX) {
      x = maxX;
      side = 1
    } //вниз
  } else if (side === 1) {
    y += speed
    if (y >= maxY) {
      y = maxY;
      side = 2
    } //влево
  } else if (side === 2) {
    x -= speed
    if (x <= 0) {
      x = 0;
      side = 3
    }//вверх
  } else if (side === 3) {
    y -= speed
    if (y <= 0) {
      y = 0;
      side = 0
    }//право
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

startBtn.addEventListener('click', () => {
  if (interval !== null) return

  interval = setInterval(() => {
    count++
    seconds.textContent = count
  }, 1000)
})

stopBtn.addEventListener('click', () => {
  clearInterval(interval)
  interval = null
})

resetBtn.addEventListener('click', () => {
  clearInterval(interval)
  interval = null
  count = 0
  seconds.textContent = 0
})

// TAB SLIDER

const tabContents = document.querySelectorAll('.tab_content_block')
const tabButtons = document.querySelectorAll('.tab_content_item')
let curTab = 0
let autoTab = null

tabButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    tabContents.forEach(content => content.classList.remove('tab_content_block_active'))
    tabButtons.forEach(btn => btn.classList.remove('tab_content_item_active'))
    tabContents[index].classList.add('tab_content_block_active')
    tabButtons[index].classList.add('tab_content_item_active')
    curTab = index
    clearInterval(autoTab)
    startAuto()
  })
})

const startAuto = () => {
  autoTab = setInterval(() => {
    curTab++
    if (curTab > tabContents.length - 1) curTab = 0

    tabContents.forEach(content => content.classList.remove('tab_content_block_active'))
    tabButtons.forEach(btn => btn.classList.remove('tab_content_item_active'))
    tabContents[curTab].classList.add('tab_content_block_active')
    tabButtons[curTab].classList.add('tab_content_item_active')
  }, 3000)
}

tabContents[0].classList.add('tab_content_block_active')
tabButtons[0].classList.add('tab_content_item_active')
startAuto()


// Character List


const charactersList = document.querySelector('.characters-list')

async function fetchCharacters() {
  try{
    const response = await  fetch('../data/characters.json')

    if (!response.ok) {
      throw new Error (`HTTP error! status: ${response.status}`)
    }

    const characters = await  response.json()

    characters.forEach(character => {
      const card = document.createElement('div')
      card.classList.add('character-card')

      card.innerHTML = `
      <div class="character-photo">
        <img src="${character.photo}" alt="${character.name}">
      </div>
      <h4>${character.name}</h4>
      <p class="character-role">${character.role}</p>
      <span class="character-status character-status--${character.status.toLocaleLowerCase()}">${character.status}</span>
      `

      charactersList.append(card)
    })
  } catch (error) {
    console.error ('Ошибка загрузки персонажей:', error)
  }
}

fetchCharacters()

// Запрос

async function fetchAnyData() {
  try{
    const response = await  fetch('../data/any.json')
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    const data = await  response.json()
    console.log(data)
  } catch (error) {
    console.error('Ошибка запроса:', error)
  }
}

fetchAnyData()

