let n1 = parseFloat(prompt("digite o primeiro número"))
let n2 = parseFloat(prompt("digite o segundo número"))
if(n1 > n2){
    console.log(`${n1} é o maior número.`)
}else if(n1 < n2){
    console.log(`${n2} é o maior número`)
}else{
    console.log("os números são iguais!")
}