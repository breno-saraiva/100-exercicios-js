let ni = parseInt(prompt("qual o número que irá iniciar"))
let nf = parseInt(prompt("qual o número final"))
let x = parseInt(prompt("valor do incremento"))

if (ni <= nf) {
    while (ni <= nf) {
    console.log(ni)
    ni = ni + x
    }
} else {
    while (ni > nf) {
        console.log(ni)
        ni = ni - x
    }
}
