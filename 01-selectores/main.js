//Selectores
// Aquellas funciones que contienen el get no hace falta identificar 
// el contenido con la #

console.log('Hola soy el JS')

// Para almacena en consola el primer h1 
// que aparece en la página
const title = document.querySelector('h1') 
console.log(title);

// Cambia directamente el texto del elemento seleccionado 
title.innerText = 'Aprendemos selectores con JS';

// A través de last of type seleccionamos el último elemento 
// en vez del primero por defecto
const secondTitle = document.querySelector('h2:last-of-type');
console.log('secondTitle:', secondTitle);

// Para acceder al ID podemos usar esta función
// Es la más recomendable
const studyTitleByQuery = document.querySelector('#study')
// Otra versión, a través de la función .getElementById() 
// seleccionamos por ID
// No repetir nunca IDs en un archivo
const studyTitle = document.getElementById('study')
console.log('studyTitle:', studyTitle);

// Una versión de acceder a una clase
const technologies = document.getElementsByClassName('technology')
// Otra versión
const technologies2 = document.querySelectorAll('.technology')
console.log('Technologies', technologies)
// Para cambiar el texto anterior a una lista
for(let i = 0; i < technologies.length; i++) {
    const technology = technologies[i];
    console.log('Tech:', technology)
    const prevText = technology.innerText;
    technology.innerText = `${i + 1} - ${prevText}`;
}

// Añadir una URL a un href
const ThePowerURL = 'https://app.thepowermba.com'
// Una forma
const webThePower = document.querySelector('h2.title-link > a');
webThePower.href = ThePowerURL;
console.log('Prueba 1', webThePower);
// Otra forma
const webThePower2 = document.getElementsByClassName('title-link');
webThePower2.href = ThePowerURL;
console.log('Prueba 2', webThePower2);
