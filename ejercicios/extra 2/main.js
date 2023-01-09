// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
const body = document.querySelector('body')
body.innerHTML += '<div> </div>'
// o
let createDiv = document.createElement("div");
let insert = document.body.appendChild(createDiv);

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
insert.innerHTML += `<p> </p>`
// o
let createP = document.createElement("p");
insert.appendChild(createP)

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
let createDivWith6P = document.createElement("div");
document.body.appendChild(createDivWith6P);

for (let i = 0; i < 6; i++) {
  let sixP = document.createElement("p");
  createDivWith6P.appendChild(sixP);
}

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
document.body.appendChild(document.createElement("p")).innerHTML += `<p> Soy dinámico! </p>`

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const h2 = document.querySelector('.fn-insert-here')
h2.innerHTML = 'Wubba Lubba dub dub'

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const createUl = document.createElement('ul')
const createLi = document.createElement('li')

const content = `<li> ${apps[0]} </li>
<li> ${apps[1]} </li>
<li> ${apps[2]} </li>
<li> ${apps[3]} </li>
<li> ${apps[4]} </li>`
createLi.innerHTML += content

document.body.appendChild(createUl)
createUl.appendChild(createLi)

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const classRemove = document.querySelectorAll(".fn-remove-me")
for (const element of classRemove) {
    element.remove()
}

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.
let newP = document.createElement("p");
selectDivs = document.querySelectorAll("div");

newP.textContent = "Voy en medio!";

document.body.insertBefore(newP, selectDivs[1]);

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
const insertClass = document.querySelectorAll(".fn-insert-here");

for(const pElement of insertClass) {
    let newP2 = document.createElement("p");
    newP2.textContent = "Voy dentro!";
    pElement.appendChild(newP2)
}