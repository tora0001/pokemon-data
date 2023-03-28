"use strict";

window.addEventListener("load", initApp);

async function initApp() {
  const pokemon = await getPokemon();
  pokemon.forEach(showPokemon);
  showPokemon(pokemon);
}

async function getPokemon(url) {
  const response = await fetch("https://cederdorff.github.io/dat-js/05-data/pokemons.json");
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
  const evolve = canEvolve(pokemon);
  const fodspor = footprint(pokemon);
  const undertype = subtype(pokemon);
  const sex = gender(pokemon);
  const gen = generation(pokemon);

  function pokemonClicked() {
    document.querySelector("#pokemonDetails").showModal();
    document.querySelector("#pokemonDetails").scrollTo(0, 0);
    const detailHTML = /*html*/ `
  <h1>${pokemon.name}</h1>
  <p><img src=${pokemon.image}></p>
  <h3>"${pokemon.description}"</h3>
  <li><b>Footprint:</b> ${fodspor}</li>
  <li><b>Name:</b> ${pokemon.name}</li> 
  <li><b>Ability:</b> ${pokemon.ability}</li>
  <li><b>Pokédex index:</b> #${pokemon.dexindex}</li>
  <li><b>Type:</b> ${pokemon.type}</li>
  <li><b>Subtype:</b> ${undertype}</li>
  <li><b>Weaknesses:</b> ${pokemon.weaknesses}</li>
  <li><b>Gender:</b> ${sex}</li>
  <li><b>Weight:</b> ${pokemon.weight} g</li>
  <li><b>Height:</b> ${pokemon.height} cm</li>
  <li><b>Generation:</b> ${gen}</li>
  <li><b>Game version:</b> ${pokemon.spilversion}</li>
  <li><b>Able to evolve:</b> ${evolve}</li>
  <li><b>HP:</b> ${pokemon.statsHP}</li>
  <li><b>Attack:</b> ${pokemon.statsAttack}</li>
  <li><b>Special attack:</b> ${pokemon.statsSpecialAttack}</li>
  <li><b>Special defence:</b> ${pokemon.statsSpecialDefence}</li>
  <li><b>Speed:</b> ${pokemon.statsSpeed}</li> 
  <form method="dialog">
		<button class="close-button">Back to Pokédex</button>
</form>`;
    document.querySelector("#pokemonDetails").innerHTML = detailHTML;
  }

  document.querySelector("#pokemon article:last-child").addEventListener("click", pokemonClicked);
}

function canEvolve(pokemon) {
  let evolve = "";
  if (pokemon.canEvolve) {
    evolve = `Yes`;
  } else {
    evolve = `No`;
  }
  return evolve;
}
function footprint(pokemon) {
  if (pokemon.footprint) {
    return `<img src="${pokemon.footprint}"`;
  } else {
    return `${pokemon.name} doesn't have a footprint`;
  }
}
function subtype(pokemon) {
  if (pokemon.subtype === null) return "";
  else {
    return `${pokemon.subtype}`;
  }
}
function gender(pokemon) {
  if (pokemon.gender === null) return "no gender";
  else {
    return `${pokemon.gender}`;
  }
}
function generation(pokemon) {
  if (pokemon.generation === null) return "";
  else {
    return `${pokemon.generation}`;
  }
}
