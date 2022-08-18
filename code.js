// declarando variaveis 
const numero = document.querySelector('.numero')
const nome = document.querySelector('.nome')
const pokemon = document.querySelector('.pokemon')
const search = document.querySelector('#poke')

const next = document.querySelector('.next')
const previous = document.querySelector('.previous')

let num_atual = 1



// criando as functions
next.addEventListener('click', () => {
    num_atual += 1
    showpoke(num_atual)

})
previous.addEventListener('click', () => {
    if (num_atual > 1) {
        num_atual -= 1
        showpoke(num_atual)
    }

})
search.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {

        showpoke(`${search.value.toLowerCase()}`)
        search.value = ''
    }
})

const option = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
}

showpoke = async(value) => {
    try {
        const fetchpokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${value}`, option)
        const data = await fetchpokemon.json()
        pokemon.setAttribute('src', `https://img.pokemondb.net/sprites/black-white/anim/normal/${data.name}.gif`)
        numero.innerHTML = `${data.id} - `
        nome.innerHTML = `${data.name}`
        num_atual = data.id
        pokemon.style.display = 'block'
        console.log(data)

    } catch {
        numero.innerHTML = ''
        nome.innerHTML = 'Pokemon Not Found'
        pokemon.style.display = 'none'
    }
}