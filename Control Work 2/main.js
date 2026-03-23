// Задание номер 1
function extractNumbers(str) {
  return str.match(/\d+/g)?.map(Number) ?? [];
}
function TaskRun1() {
  const tests = ["a1fg5hj6", "hello42world7", "no digits", "100+200=300"];
  document.getElementById('out1').textContent =
    tests.map(t => '"' + t + '" → [' + extractNumbers(t) + ']').join('\n');
}

// Задание номер 2
let fibRunning = false;
function TaskRun2() {
  if (fibRunning) return;
  fibRunning = true;
  const out = document.getElementById('out2');
  out.textContent = '';
  function fibWithDelay(a, b) {
    if (a > 144) { fibRunning = false; return; }
    console.log(a);
    out.textContent += (out.textContent ? ', ' : '') + a;
    setTimeout(() => fibWithDelay(b, a + b), 1000);
  }
  fibWithDelay(0, 1);
}

// Задание номер 3
async function TaskRun3() {
  const out = document.getElementById('out3');
  out.textContent = 'Загрузка...';
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    data.forEach(p => console.log(p.title));
    out.textContent = data.map(p => p.title).join('\n');
  } catch (err) {
    out.textContent = 'Ошибка: ' + err.message;
  }
}

// Задание номер 4
document.getElementById('color-btns').addEventListener('click', function(e) {
  if (e.target.tagName === 'BUTTON') {
    document.body.style.background = e.target.textContent;
  }
});

// Задание номер 5
const square = document.getElementById('square');
const toggleBtn = document.getElementById('toggle-btn');
toggleBtn.addEventListener('click', function() {
  const isHidden = square.style.display === 'none';
  square.style.display = isHidden ? 'block' : 'none';
  toggleBtn.textContent = isHidden ? 'Скрыть' : 'Показать';
});

// Задание номер 6
let counterRunning = false;
function TaskRun6() {
  if (counterRunning) return;
  counterRunning = true;
  const el = document.getElementById('counter');
  let n = 0;
  const id = setInterval(function() {
    el.textContent = ++n;
    if (n >= 100) { clearInterval(id); counterRunning = false; }
  }, 1);
}

// Задание номер 7
const fakeJSON = [
  { id: 1, name: "Эмир",  role: "Frontend Developer" },
  { id: 2, name: "Бекмырза",   role: "UI/UX Designer" },
  { id: 3, name: "Евгений",  role: "Backend Developer" }
];
const blobUrl = URL.createObjectURL(
  new Blob([JSON.stringify(fakeJSON, null, 2)], { type: 'application/json' })
);
async function TaskRun7() {
  const out = document.getElementById('out7');
  try {
    const res = await fetch(blobUrl);
    const data = await res.json();
    console.log(data);
    out.textContent = JSON.stringify(data, null, 2);
  } catch (err) {
    out.textContent = 'Ошибка: ' + err.message;
  }
}