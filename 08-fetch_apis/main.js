const PokeApi_Url = 'https://pokeapi.co/api/v2/';
const searchUrl = `${PokeApi_Url}pokemon/rayquaza`;
const pokemonContainer = document.querySelector('#pokemon-container');
let pokemonData;

const renderPokemon = () => {
  const pokemonTemplate = `
    <div class="pokemon">
    <span>${pokemonData.id}</span>
    <h3>${pokemonData.name}</h3>
    <img src="${pokemonData.image}" alt="${pokemonData.name}">
    <img src="${pokemonData.image2}" alt="${pokemonData.name}">
    <img src="${pokemonData.image3}" alt="${pokemonData.name}">
    <img src="${pokemonData.image4}" alt="${pokemonData.name}">
    </div>
    `;
  pokemonContainer.innerHTML += pokemonTemplate;
};

fetch(searchUrl)
  .then((res) => res.json())
  .then((response) => {
    pokemonData = {
      id: response.id,
      name: response.name,
      image: response.sprites.front_shiny,
      image2: response.sprites.back_shiny,
      image3: response.sprites.front_default,
      image4: response.sprites.back_default,
    };
    renderPokemon();
  });
