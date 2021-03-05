'use strict';

const pokemonContainer = document.querySelector('.pokemons-container');
const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const mainSection = document.querySelector('.main');



const renderPokemon = async function (pokemon) {
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const data = await res.json();
    let currentPokemon = data;
    console.log(currentPokemon);
    const currentPokemonHP = currentPokemon.stats[0].base_stat;
    const currentPokemonATK = currentPokemon.stats[1].base_stat;
    const currentPokemonDEF = currentPokemon.stats[2].base_stat;
    const currentPokemonSpeed = currentPokemon.stats[5].base_stat;
    console.log(currentPokemonHP)
    
    const myPokemonName = currentPokemon.name;
	const myPokemonNameUpper = myPokemonName.charAt(0).toUpperCase() + myPokemonName.slice(1);
    console.log(myPokemonNameUpper);
    
    const html = `
    <div class="pokemon-card">
        <div class="feature-box">
            <h3 class="heading-tertiary u-margin-bottom-small">${myPokemonNameUpper}</h3>
            <div class="pokemons-img">
                <img src="${currentPokemon.sprites.front_default}">
                <img src="${currentPokemon.sprites.front_shiny}">
            </div>
            <p class="feature-box__text">
                HP: ${currentPokemonHP} /
                ATK: ${currentPokemonATK}
                <br>
                DEF: ${currentPokemonDEF} /
                SPEED: ${currentPokemonSpeed}
            </p>
        </div>
    </div>
    `;
    pokemonContainer.insertAdjacentHTML('beforeend', html);
};

btn.addEventListener('click', function() {
    const myPokemon = input.value;
    const myPokemonLower = myPokemon.toLowerCase();
    // pokemonBox.innerHTML = '';
	renderPokemon(myPokemonLower);

    mainSection.style.height = '500px';
})