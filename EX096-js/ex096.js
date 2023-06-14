function media(x,y) {
    let resultado = (x + y)/2
    return resultado;
}

let x = parseFloat(prompt("digite a primeira nota: "))
let y = parseFloat(prompt("digite a segunda nota: "))

let valor = media(x,y)
console.log(`o valor da média do aluno é ${valor}`)