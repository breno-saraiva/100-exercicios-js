let numeros = []
let x = 0

for (v = 1; v < 31; v++) {
    numero = Math.floor(Math.random()*15) + 1;
    numeros.push(numero)
}

let chave = parseInt(prompt("digite um número: "))

for (v = 0; v < numeros.length; v++) {
    if (chave === numeros[v]) {
        x = x + 1;
        console.log(`O seu número foi sorteado na ${v}° posição`)
    }
}

console.log(`seu número foi sorteado ${x} vezes.`)