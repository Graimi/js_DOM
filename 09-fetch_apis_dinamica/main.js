const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/';

const pokemonContainer = document.querySelector('#pokemon-container');
const searchInput = document.querySelector('#pokemon-search');
const searchButton = document.querySelector('#search-button');

let currentPokemonId = 30;
let currentPokemon;
let pokemonRequest = [];

const getPokemonTemplate = () => {
  return `
      <div class="pokemon">
      <span>ID: ${currentPokemon.id}</span>
      <h3>${currentPokemon.name}</h3>
      <img src="${currentPokemon.image}" alt="${currentPokemon.name}">
      <img src="${currentPokemon.image2}" alt="${currentPokemon.name}">
      <img src="${currentPokemon.image3}" alt="${currentPokemon.name}">
      <img src="${currentPokemon.image4}" alt="${currentPokemon.name}">
      </div>
      `;
};

const renderPokemon = () => {
  const template = getPokemonTemplate();
  pokemonContainer.innerHTML += template;
};

const fetchPokemon = () => {
if (pokemonRequest.includes(currentPokemonId)) {
    return;
} else {
    pokemonRequest.push(currentPokemonId)
}
  fetch(`${pokemonUrl}${currentPokemonId}`)
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
      currentPokemon = {
        id: response.id,
        name: response.name,
        image: response.sprites.front_shiny,
        image2: response.sprites.back_shiny,
        image3: response.sprites.front_default,
        image4: response.sprites.back_default,
      };

      renderPokemon();
    });
};

const handlesearch = () => {
  const inputValue = searchInput.valueAsNumber;
  currentPokemonId = inputValue;
  fetchPokemon();
};

searchInput.value = currentPokemonId;
fetchPokemon();
searchButton.addEventListener('click', handlesearch);