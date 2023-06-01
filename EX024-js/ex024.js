let dist = parseFloat(prompt("digite a distância que deseja percorrer em Km"))
if(dist <=200){
    console.log(`O preço a pagar por sua viagem é de ${0.5*dist}`)
}else{
    console.log(`O preço a pagar por sua viagem é de ${0.45*dist}`)
}