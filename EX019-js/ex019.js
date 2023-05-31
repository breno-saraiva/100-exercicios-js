let nome = prompt("digite seu nome:")
let N1 = parseFloat(prompt("digite a sua primeira nota:"))
let N2 = parseFloat(prompt("digite a sua segunda nota:"))
let media = (N1 + N2)/2
if(media >= 7.0){
    console.log(nome + "parabéns, sua média foi " + media + " e você foi aprovado!")
}else{
    console.log(nome + "infelizmente, sua média foi " + media + " e você foi reprovado!")
}