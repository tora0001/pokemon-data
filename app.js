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
  document.querySelector("#pokemon").insertAdjacentHTML(
    "beforeend",
    /*html*/ `
  <article class="grid-item">
                <img src="${pokemon.image}">
                <h2>${pokemon.name}</h2>
                <p>${pokemon.type}</p>
            </article>`
  );

  const evolve = canEvolve(pokemon);
  const undertype = subtype(pokemon);
  const sex = gender(pokemon);

  document.querySelector("#pokemon article:last-child").addEventListener("click", pokemonClicked);

  function pokemonClicked() {
    document.querySelector("#pokemonDetails").showModal();

    document.querySelector("#pokemonDetails").scrollTo(0, 0);

    document.querySelector("#dialog-name").textContent = pokemon.name;
    document.querySelector("#dialog-image").src = pokemon.image;
    document.querySelector("#dialog-description").textContent = pokemon.description;
    document.querySelector("#dialog-footprint").src = pokemon.footprint;
    document.querySelector("#dialog-name-2").textContent = pokemon.name;
    document.querySelector("#dialog-ability").textContent = pokemon.ability;
    document.querySelector("#dialog-dexindex").textContent = pokemon.dexindex;
    document.querySelector("#dialog-type").textContent = pokemon.type;
    document.querySelector("#dialog-undertype").textContent = undertype;
    document.querySelector("#dialog-weaknesses").textContent = pokemon.weaknesses;
    document.querySelector("#dialog-gender").textContent = sex;
    document.querySelector("#dialog-weight").textContent = pokemon.weight;
    document.querySelector("#dialog-height").textContent = pokemon.height;
    document.querySelector("#dialog-generation").textContent = pokemon.generation;
    document.querySelector("#dialog-gameversion").textContent = pokemon.spilversion;
    document.querySelector("#dialog-evolve").textContent = evolve;
    document.querySelector("#dialog-hp").textContent = pokemon.statsHP;
    document.querySelector("#dialog-attack").textContent = pokemon.statsAttack;
    document.querySelector("#dialog-specialattack").textContent = pokemon.statsSpecialAttack;
    document.querySelector("#dialog-specialdefence").textContent = pokemon.statsSpecialDefence;
    document.querySelector("#dialog-speed").textContent = pokemon.statsSpeed;
  }
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

function subtype(pokemon) {
  if (pokemon.subtype === undefined) {
    return `${pokemon.name} doesn't have a subtype`;
  } else if (pokemon.subtype === null) {
    return `${pokemon.name} doesn't have a subtype`;
  } else {
    return `${pokemon.subtype}`;
  }
}

function gender(pokemon) {
  if (pokemon.gender === undefined) {
    return `${pokemon.name} doesn't have a gender`;
  } else if (pokemon.gender === null) {
    return `${pokemon.name} doesn't have a gender`;
  } else {
    return `${pokemon.gender}`;
  }
}
