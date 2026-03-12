// TASK 1

const regExp = /^\d+$/

const containsOnlyDigits = (str) => {
  return regExp.test(str)
}

console.log(containsOnlyDigits("12345")) //true
console.log(containsOnlyDigits("12a45")) //false

// TASK 2

const interval = setInterval( () => {
  console.log("Прошла Секунда")
}, 1000)

// TASK 3

const count = () => {
  let i = 1;
  const interval = setInterval( () => {
    console.log(i)
    i++

    if (i > 10) clearInterval(interval)
  }, 1000)
}

count()

//TASK 4

const box = document.getElementById('myBlock')

box.addEventListener('click', () => {
  box.classList.toggle('active');
})

//TASK 5

const xhr = new XMLHttpRequest()
xhr.open('GET', '../data/info.json')

xhr.onload = function () {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText)
    console.log(data)
  }
}

xhr.onerror = function () {
  console.log("Ошибка запроса")
}

xhr.send()