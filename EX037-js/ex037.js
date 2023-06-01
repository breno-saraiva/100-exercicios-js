let sal = parseFloat(prompt("Qual o seu salário?"))
let sexo = prompt("qual é o seu gênero? (H/M)")
let ano = parseInt(prompt("quantos anos de empresa você tem?"))

if ((sexo === "M") || (sexo === "m")) {
    if (ano > 20) {
        console.log(`seu novo salário é ${sal*1.13}`)
    } else {
        if ((ano <= 20) && (ano >= 15)) {
            console.log(`seu novo salário é ${sal*1.12}`)
        } else {
            console.log(`seu novo salário é ${sal*1.05}`)
        }
    }
} else if((sexo === "H") || (sexo === "h")){
    if (ano > 30) {
        console.log(`seu novo salário é ${sal*1.25}`)
    } else {
        if ((ano <= 30) && (ano >= 20)) {
            console.log(`seu novo salário é de ${sal*1.12}`)
        } else {
            console.log(`seu novo salário é de ${sal*1.05}`)
        }
    }
}else {
    console.log("erro com a infromação inserida")
}