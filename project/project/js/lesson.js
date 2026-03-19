
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

function fetchCard(id) {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(r => r.json());
}

function renderCard(data) {
  const { title, id, completed } = data;
  cardBlock.innerHTML = `
    <p>${id} / ${TOTAL}</p>
    <p>${title}</p>
    <p>${completed}</p>
  `;
}

function navigate(dir) {
  cardId += dir;
  if (cardId < 1) cardId = TOTAL;
  if (cardId > TOTAL) cardId = 1;
  fetchCard(cardId).then(renderCard);
}

btnNext.onclick = () => navigate(1);
btnPrev.onclick = () => navigate(-1);

// Карточка не пустая при загрузке
fetchCard(cardId).then(renderCard);