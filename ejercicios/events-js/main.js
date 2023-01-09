// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
// evento click que ejecute un console log con la información del evento del click
document.body.innerHTML += `<button id=btnToClick > Click me! </button>`
const button = document.querySelector('#btnToClick')

const handleClick = ((event) => {
    console.log(event)
})

button.addEventListener('click', handleClick)

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const inputFocus =  document.querySelector('.focus')

const handleFocus = ((event) => {
    console.log(event.target.value)
})

inputFocus.addEventListener('focus', handleFocus)

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const inputValue =  document.querySelector('.value')

const handleInput = ((event) => {
    console.log(event.target.value)
})

inputValue.addEventListener('input', handleInput)