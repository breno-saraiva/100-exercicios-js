function somador(valor1,valor2) {
    let soma = valor1 + valor2
    console.log(`A soma dos valores é: ${valor1+valor2}`);
}

let A = parseInt(prompt("digite o primeiro número: "))
let B = parseInt(prompt("digite o segundo número: "))

somador(A,B)