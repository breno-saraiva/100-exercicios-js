let cont = 1
let soma = 0
let idade = 0

while (idade !== 999) {
    idade = parseInt(prompt(`digite a idade do ${cont}° aluno: (digite 999 para parar)`))
    soma = soma + idade
    ++cont
}
console.log (`existem ${cont - 1} alunos na sala e a média da idade é ${(soma-999)/(cont-1)}`)