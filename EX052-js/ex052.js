let cont = 1
let soma = 0
let i = 0
let b = 0
let maior = 0
while (cont <= 8) {
    let x = parseFloat(prompt(`digite a idade da ${cont}° pessoa:`))
    cont = cont + 1
    soma = soma + x
    if (x >= 18) {
        i = i + 1
    }
    if (x < 5) {
        b = b + 1
    }
    if (maior < x) {
        maior = x
    }
}
console.log(`a idade média do grupo é de ${soma/8}`)
console.log(`o número de pessoas maióres de idade é ${i}`)
console.log(`o numero de pessoas que tem menos de 5 anos é ${b}`)
console.log(`a maior idade é a de ${maior} anos`)