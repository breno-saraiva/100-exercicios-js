let nome = []
let idade = []

for (c = 1; c < 10; c++) {
    nome[c] = prompt("digite o nome da pessoa: ")
    idade[c]= parseInt(prompt("digite a idade dessa pessoa: "))
}
console.log("o menores de idade são: ")

for (c = 1; c < 10; c++) {
    if (idade[c] < 18) {
        console.log(nome[c],idade[c])
    }
}