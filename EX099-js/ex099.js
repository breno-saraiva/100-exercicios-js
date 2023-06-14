function potencia(x,y) {
    let potencial = x ** y;
    return potencial;
}

let x = parseFloat(prompt("digite a base da potência: "))
if (isNaN(x)) {
    console.log("a base não é um número válido.");
}
let y = parseInt(prompt("digite o expoente da potência: "))

let resultado = potencia(x,y)
console.log(`o resultado é ${resultado}`);