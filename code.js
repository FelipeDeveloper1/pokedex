const option = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
}
show = (info) => {
    for (let n = 0; n < 151; n++) {
        console.log(`${n} ${info.results[n].name}`)
    }

}

let num = document.querySelector('.show')
let valor = Number(num.innerHTML)
const next = document.querySelector('.next')
const back = document.querySelector('.back')
next.addEventListener('click', (e) => {
    valor += 1
    num.innerHTML = valor
    if (valor > 151) {
        e.preventDefault()
    }
})
back.addEventListener('click', (e) => {
    valor -= 1
    num.innerHTML = valor
    if (valor < 0) {
        e.preventDefault()
    }
})







fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0', option)
    .then(file => {
        file.json()
            .then(file => show(file))
    })
    .catch(() => { console.log('falhou') })