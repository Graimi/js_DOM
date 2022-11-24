// Para que la consola diga hola pasados 3 segundos
const sayHello = () => {
    console.log('Hello');
}

setTimeout(sayHello, 3000);

// Para cambiar el estado de las bombillas
let timeout;
let timeoutTime = 2000;

const toggleButton = document.querySelector('#toggle');
const lightbulb = document.querySelector('#lightbulb');
const timerInput = document.querySelector('#timer');

const toggleLightbulb = () => {
    lightbulb.classList.toggle('off')
    lightbulb.classList.toggle('on')
};

const turnOffLightbulb = () => {
    lightbulb.classList.add('off')
    lightbulb.classList.remove('on')
};

const handleToggle = () => {
    if(timeout) {
        clearTimeout(timeout);
    }
    toggleLightbulb()
    timeout = setTimeout(turnOffLightbulb, timeoutTime);
};

const handleInputTime = (event) => {
    const newTimer = event.target.valueAsNumber;
    timeoutTime = newTimer;
}

toggleButton.addEventListener('click', handleToggle);
timerInput.value = timeoutTime;
timerInput.addEventListener('input', handleInputTime);