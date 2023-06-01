let type = prompt("qual tipo de carro você precisa? (popular/luxo")
let day = parseInt(prompt("quantos dias ficou com o carro?"))
let km = parseFloat(prompt("quantos km foram percorrido?"))

if(type == "popular") {
    if (km <= 100) {
        console.log(`o valor do aluguel é de R$${(day*90)+(km*0.2)}`)
    } else {
        console.log(`o valor do aluguel é de R$${(day*90)+(km*0.1)}`)
    }
}else {
    if (km <= 200) {
        console.log(`o valor do aluguel é de R$${(day*150)+(km*0.3)}`)
    } else {
        console.log(`Ovalor do aluguel é de R$${(day*150)+(km*0.25)}`)
    }
}