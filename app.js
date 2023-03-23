"use strict";

window.addEventListener("load", initApp);

async function initApp() {
  const bulbasaur = await getPokemon("data/pokemon.json");
  showPokemon(bulbasaur);
}

async function getPokemon(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function showPokemon(pokemon) {
  const pokemonHTML = /*html*/ `
  <article class="grid-item">
                <img src="${pokemon.image}">
                <h2>${pokemon.name}</h2>
                <p>${pokemon.type}</p>
            </article>`;
  document.querySelector("#pokemon").insertAdjacentHTML("beforeend", pokemonHTML);

  function pokemonClicked() {
    document.querySelector("#pokemonDetails").showModal();
    document.querySelector("#pokemonDetails").textContent = pokemon.name;
    const detailHTML = /*html*/ `
  <h1>${pokemon.name}</h1>
  <img src="${pokemon.image}"></li>
  <h3><i>"${pokemon.description}"</i></h3>
  <li><img src=${pokemon.image}></li>
  <li>Footprint: <img src=${pokemon.footprint}></li>
  <li>Name: ${pokemon.name}</li> 
  <li>Description: ${pokemon.description}</li>
  <li>Ability: ${pokemon.ability}</li>
  <li>Pokédex index: #000${pokemon.dexindex}</li>
  <li>Type: ${pokemon.type}</li>
  <li>Subtype: ${pokemon.subtype}</li>
  <li>Weaknesses: ${pokemon.weaknesses}</li>
  <li>Gender: ${pokemon.gender}</li>
  <li>Weight: ${pokemon.weight} g</li>
  <li>Height: ${pokemon.height} cm</li>
  <li>Generation: ${pokemon.generation}</li>
  <li>Game version: ${pokemon.spilversion}</li>
  <li>Able to evolve: ${pokemon.canEvolve}</li>
  <li>HP: ${pokemon.statsHP}</li>
  <li>Attack: ${pokemon.statsAttack}</li>
  <li>Special attack: ${pokemon.statsSpecialAttack}</li>
  <li>Special defence: ${pokemon.statsSpecialDefence}</li>
  <li>Speed: ${pokemon.statsSpeed}</li> 
  <form method="dialog">
		<button>Close</button>
</form>`;
    document.querySelector("#pokemonFacts").insertAdjacentHTML("beforeend", detailHTML);
  }
  document.querySelector("#pokemon article:last-child").addEventListener("click", pokemonClicked);
}
