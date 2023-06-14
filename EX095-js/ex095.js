function somador(valor1,valor2) {
    let soma = valor1 + valor2
    return soma;
}

let A = parseInt(prompt("digite o primeiro número: "))
let B = parseInt(prompt("digite o segundo número: "))

let resultado = somador(A,B)
console.log(`o valor da soma dos números informado é ${resultado}`)