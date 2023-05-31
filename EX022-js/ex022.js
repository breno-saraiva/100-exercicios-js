let nasc = parseInt(prompt("digite seu ano de nascimento:"))
let idade = 2023 - nasc
if(idade >= 18){
    console.log(`você já passou ${idade - 18} anos do seu alistamento`)
}else{
    console.log(`faltam ${18-idade} anos para voce se alistar`)
}