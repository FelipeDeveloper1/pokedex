// declarando variaveis 
const numero = document.querySelector('.numero')
const nome = document.querySelector('.nome')
const pokemon = document.querySelector('.pokemon')
const search = document.querySelector('#poke')

let num_atual = 0


const option = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
}

// criando as functions 
// search.addEventListener('keypress', (e) => {
//     if (e.key === "Enter") {
//         pokemon.setAttribute('src', `https://img.pokemondb.net/sprites/black-white/anim/normal/${info.results.name = search.value}.gif`)
//     }
// })
buscar = (n) => {
    n = Number(n)
    if (num_atual >= 0) {
        num_atual += n
    } else {
        num_atual = 0
    }

    show = (info) => {
        pokemon.setAttribute('src', `https://img.pokemondb.net/sprites/black-white/anim/normal/${info.results[num_atual].name}.gif`)
        nome.innerHTML = `${info.results[num_atual].name}`
        numero.innerHTML = num_atual + 1 + '-'
        console.log(info.results)
    }


    fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0', option)
        .then(file => {
            file.json()
                .then(file => show(file))
        })
        .catch(() => { console.log('falhou') })
}