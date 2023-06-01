let nome = prompt("digite seu nome:")
let ano = parseInt(prompt("quantos anos de empresa você tem?"))
let sal = parseFloat(prompt("qual o seu salário atual?"))
if (ano<3){
    console.log(`parabens ${nome} seu novo salário agora é ${sal*1.03} reais`)
}else if((ano>=3)&&(ano<10)){
    console.log(`parabens ${nome} seu novo salário é ${sal*1.125} reais`)
}else if(ano>=10){
    console.log(`parabens ${nome} seu salário agora é de ${sal*1.2} reais`)
}