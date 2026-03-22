const IMAGE_URL = 'https://picsum.photos/seed/cards/400/200';

function createCard(post) {
  const card = document.createElement('div');
  card.classList.add('card');

  card.innerHTML = `
  <img src="${IMAGE_URL}" alt="card image" />
  <div class="card-body">
    <h3 class="card-title">${post.title}</h3>
    <p class="card-desc">${post.body}</p>
</div>
  `;

  return card;
}

function  renderCards(posts) {
  const grid = document.getElementById('cards-grid')
  grid.innerHTML = '';

  posts.slice(0, 8).forEach(posts => {
    const card = createCard(posts);
    grid.appendChild(card);
  });
}

async function fetchPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')

    if (!response.ok) {
      throw new Error(`HTTPS error! status: ${response.status}`);
    }

    const posts = await response.json();
    renderCards(posts);

  }catch (error) {
    console.error('Ошибка загрузки карточки:', error);

    const grid = document.getElementById('cards-grid');
    grid.innerHTML = `<p class="error">Не удалось загрузить карточки: ${error.message}`
  }
}

fetchPosts();