function Media(x,y) {
    let media = (x + y)/2
    return media;
}

function aprovacao (media) {
    if (media >= 7) {
        return "APROVADO"
    } else if (media >= 5) {
        return "RECUPERAÇÂO"
    } else {
        return "REPROVADO"
    }
}

let nota1 = parseFloat(prompt("Digite a primeira nota: "))
let nota2 = parseFloat(prompt("Digite a segunda nota: "))

let media = Media(nota1,nota2)
let situacao = aprovacao(media)

console.log(`Média: ${media}`)
console.log(`Situação: ${situacao}`)