const gameButtons = document.querySelectorAll('.game-button');
const pointsTitle = document.querySelector('#points');
let previousButton;
let points = 0;

const handleToggleButton = () => {
  if (previousButton) {
    previousButton.classList.remove('show');
  }
  const randomIndex = Math.floor(Math.random() * gameButtons.length);
  const randomButton = gameButtons[randomIndex];

  randomButton.classList.add('show');
  randomButton.classList.remove('not-clickable');
  previousButton = randomButton;
};

const handleClickGameButton = (event) => {
  const isClickable = event.target.className.includes('show');
  if (isClickable) {
    points += 1;
    pointsTitle.innerText = points;
    event.target.classList.add('not-clickable');
  }
  console.log(points);
};

for (let i = 0; i < gameButtons.length; i++) {
  const gameButton = gameButtons[i];
  gameButton.addEventListener('click', handleClickGameButton);
}

setInterval(handleToggleButton, 1200);

