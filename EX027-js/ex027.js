let  n1 = parseFloat(prompt("digite sua primeira nota"))
let  n2 = parseFloat(prompt("digite sua segunda nota"))
let media = (n1 + n2)/2
if(media < 5){
    console.log("você foi reprovado")
}else if ((media>=5)&&(media<7)) {
    console.log("você está de recuperação")
} else {
    console.log("você foi aprovado")
}