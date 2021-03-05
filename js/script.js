'use strict';

const btn = document.querySelector('.btn-random');
const pokemonContainer = document.querySelector('.pokemon__container')
const input = document.querySelector('input')
const pokemonList = document.querySelector('.row')
const pokemonBox = document.querySelector('.feature-box')
const pokemonItem = document.querySelector('.pokemon-item')
const pokemonNew = document.querySelector('.pokemon-new')


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
    <div class="col-1-of-4">
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
    pokemonList.insertAdjacentHTML('beforeend', html);
};

btn.addEventListener('click', function() {
    const myPokemon = input.value;
    const myPokemonLower = myPokemon.toLowerCase();
    // pokemonBox.innerHTML = '';
	renderPokemon(myPokemonLower);
})