
// Convertor

const SOM_PER_USD = 87;
const SOM_PER_EUR = 95;

const somInput = document.getElementById('som');
const usdInput = document.getElementById('usd');
const eurInput = document.querySelector('input[id="eur"]');

somInput.addEventListener('input', () => {
  const v = parseFloat(somInput.value);
  if (isNaN(v)) {
    usdInput.value = '', eurInput.value = '';
    return;
  }
  usdInput.value = (v / SOM_PER_USD).toFixed(4);
  eurInput.value = (v / SOM_PER_EUR).toFixed(4);
});

usdInput.addEventListener('input', () => {
  const v = parseFloat(usdInput.value);
  if (isNaN(v)) {
    somInput.value = '', eurInput.value = '';
    return;
  }
  const som = v * SOM_PER_USD;
  somInput.value = som.toFixed(2)
  eurInput.value = (som / SOM_PER_EUR).toFixed(4)
});

eurInput.addEventListener('input', () => {
  const v = parseFloat(eurInput.value);
  if (isNaN(v)) {
    somInput.value = '', usdInput.value = '';
    return;
  }
  const som = v * SOM_PER_EUR;
  somInput.value = som.toFixed(2)
  usdInput.value = (som / SOM_PER_USD).toFixed(4)
});

// CARD SWITCHER

const cardBlock = document.querySelector('.card');
const btnNext = document.querySelector('#btn-next');
const btnPrev = document.querySelector('#btn-prev');

const TOTAL = 200;
let cardId = 1;

function renderCard (data) {
  const {title, id, completed} = data
  cardBlock.innerHTML = `
    <p>${id} / ${TOTAL}</p>
    <p>${title}</p>
    <p>${completed}</p>
  `
}

async  function fetchCard(id) {
  try{
    const response = await  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)

    if (!response.ok) {
      throw  new Error (`HTTP error! status: ${response.status}`)
    }
  const data = await response.json()
    renderCard(data)
} catch (error) {
  console.error('Ошибка загрузки карточки:', error)
  }
}

async function navigate(dir) {
  cardId += dir
  if (cardId < 1) cardId = TOTAL
  if (cardId > TOTAL) cardId = 1
  await fetchCard(cardId)
}

btnNext.onclick = () => navigate(1);
btnPrev.onclick = () => navigate(-1);
fetchCard(cardId)

// Отдельный запрос через GET ЗАПРОС НА POSTS
async function fetchPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const posts = await response.json()
    console.log('Всего постов', posts.length);
    console.log('Данные', posts)

  } catch(error) {
    console.error('Ошибка запроса:', error);
  }
}

fetchPosts()

