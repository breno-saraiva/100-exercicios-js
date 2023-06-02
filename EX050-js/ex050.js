let cont = 1
let s = 0
let d = 0

while (cont <= 20) {
    let n = Math.floor(Math.random()*11)
    console.log(`o ${cont}° número é: ${n}`)
    cont = cont + 1
    if (n > 5 ) {
        s = s + 1
    }
    if (n%3 === 0) {
        d = d + 1
    }
}
console.log(`foram sorteados ${s} acima de 5 e ${d} divisíveis por 3`)