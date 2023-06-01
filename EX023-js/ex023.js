let nome = prompt("qual o seu nome")
let valor = parseFloat(prompt("digite o valor da suas compras:"))
let sexo = prompt("qual o seu Gênero? (H/M)")
    if (sexo === "H"|| sexo ==="h"){
        console.log(`olá ${nome} o valor a se pagar é de R$${valor*0.95}`)
    }else{
        console.log(`olá ${nome} o valor a se pagar é de R$${valor*0.87}`)
    }