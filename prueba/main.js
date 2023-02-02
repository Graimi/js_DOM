count = 0;
window.addEventListener('keydown', (event) => {
  event.key === '+' ? count++ : null;
  document.querySelector('#count').innerHTML = count;
});

// Cada vez que se presione + en el teclado la cantidad de count aumentará en 1
