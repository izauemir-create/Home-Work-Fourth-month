
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
