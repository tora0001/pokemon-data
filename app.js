"use strict";

window.addEventListener("load", initApp);

function initApp() {
  const thirdBulbasaur = {
    name: "Bulbasaur",
    description: "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
    ability: "Overgrow",
    image: "https://img.pokemondb.net/artwork/avif/bulbasaur.avif",
    footprint: "https://archives.bulbagarden.net/media/upload/d/d1/F0001.png",
    dexindex: 1,
    type: "Grass, Poison",
    subtype: null,
    weaknesses: "Fire, Psychic, Flying, Ice",
    gender: "Male or Female",
    weight: 6900,
    height: 70,
    generation: 1,
    spilversion: "Red/Blue/Yellow/FireRed/LeafGreen",
    canEvolve: true,
    statsHP: 45,
    statsAttack: 49,
    statsDefence: 49,
    statsSpecialAttack: 65,
    statsSpecialDefence: 65,
    statsSpeed: 45,
  };
  const secondBulbasaur = {
    name: "Bulbasaur",
    description: "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
    ability: "Overgrow",
    image: "https://img.pokemondb.net/artwork/avif/bulbasaur.avif",
    footprint: "https://archives.bulbagarden.net/media/upload/d/d1/F0001.png",
    dexindex: 1,
    type: "Grass, Poison",
    subtype: null,
    weaknesses: "Fire, Psychic, Flying, Ice",
    gender: "Male or Female",
    weight: 6900,
    height: 70,
    generation: 1,
    spilversion: "Red/Blue/Yellow/FireRed/LeafGreen",
    canEvolve: true,
    statsHP: 45,
    statsAttack: 49,
    statsDefence: 49,
    statsSpecialAttack: 65,
    statsSpecialDefence: 65,
    statsSpeed: 45,
  };
  const bulbasaur = {
    name: "Bulbasaur",
    description: "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
    ability: "Overgrow",
    image: "https://img.pokemondb.net/artwork/avif/bulbasaur.avif",
    footprint: "https://archives.bulbagarden.net/media/upload/d/d1/F0001.png",
    dexindex: 1,
    type: "Grass, Poison",
    subtype: null,
    weaknesses: "Fire, Psychic, Flying, Ice",
    gender: "Male or Female",
    weight: 6900,
    height: 70,
    generation: 1,
    spilversion: "Red/Blue/Yellow/FireRed/LeafGreen",
    canEvolve: true,
    statsHP: 45,
    statsAttack: 49,
    statsDefence: 49,
    statsSpecialAttack: 65,
    statsSpecialDefence: 65,
    statsSpeed: 45,
  };
  showPokemon(bulbasaur);
  showPokemon(secondBulbasaur);
  showPokemon(thirdBulbasaur);
}

function showPokemon(pokemon) {
  const pokemonHTML = /*html*/ `
  <article class="grid-item">
                <img src="${pokemon.image}">
                <h2>${pokemon.name}</h2>
                <p>${pokemon.type}</p>
            </article>`;
  document.querySelector("#pokemon").insertAdjacentHTML("beforeend", pokemonHTML);

  document.querySelector("#pokemon article:last-child").addEventListener("click", pokemonMondal);
}

function pokemonMondal() {
  document.querySelector("#pokemonDetails").showModal();
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
