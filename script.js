'use strict';

const pokemonContainer = document.querySelector('.pokemons-container');
const pokemonCard = document.querySelector('.pokemon-card');
const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const mainSection = document.querySelector('.main');
const pokemonType = document.querySelector('.pokemon-type');

const renderPokemon = async function (pokemon) {
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const data = await res.json();
    let currentPokemon = data;
    console.log(currentPokemon);
    const currentPokemonHP = currentPokemon.stats[0].base_stat;
    const currentPokemonATK = currentPokemon.stats[1].base_stat;
    const currentPokemonDEF = currentPokemon.stats[2].base_stat;
    const currentPokemonSpeed = currentPokemon.stats[5].base_stat;
    console.log(currentPokemonHP);
    
    const myPokemonName = currentPokemon.name;
	const myPokemonNameUpper = myPokemonName.charAt(0).toUpperCase() + myPokemonName.slice(1);
    console.log(myPokemonNameUpper);
    
    const html = `
    <div class="pokemon-card ${currentPokemon.types[0].type.name}">
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
                SPEED: ${currentPokemonSpeed} <br>
                <p class="pokemon-type">Type: ${currentPokemon.types[0].type.name.toUpperCase()}</p>
            </p>
        </div>
    </div>
    `;
    pokemonContainer.insertAdjacentHTML('beforeend', html);
};


const displayPokemon = () => {
        const myPokemon = input.value;
        const myPokemonLower = myPokemon.toLowerCase();
        // pokemonBox.innerHTML = '';
        renderPokemon(myPokemonLower);
        mainSection.style.height = '500px'; 
}

input.addEventListener('keyup', (e) => {
    if(e.keyCode === 13) {
        e.preventDefault();
        btn.click();
    } else {
        btn.addEventListener('click', displayPokemon);
    }
});