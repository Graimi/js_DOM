const onCompleteGame = () => {
    alert('¡Juego completado 🎉!')
};

const buttonElement = document.querySelector('#complete-game')
buttonElement.addEventListener('click', onCompleteGame)

const pTextList = [];

const onMouseMove = (event) => {
  if (event.target.tagName === 'P') {
    if (!pTextList.includes(event.target.className)) {
      pTextList.push(event.target.className);
      if (pTextList.length === 5) {
        document.body.style.height = '200vh'
      }
    }
  }
};

let enteredPassword = false

const onScroll = () => {
  console.log('Scroll');
  if (!enteredPassword && window.scrollY > (window.outerHeight/2)) {
    const password = prompt('Introduce la contraseña:');

    if (password === '1234') {
        buttonElement.style.display = 'block';
        enteredPassword = true
    }
  }
};

window.addEventListener('mousemove', onMouseMove);
window.addEventListener('scroll', onScroll);