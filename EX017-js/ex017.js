let vel = parseInt(prompt("qual a velocidade do altomóvel"))
let m = (vel-80)*5
if(vel > 80){
    console.log(`Você foi multado, por excesso de velocidade!`)
    console.log("o valor da sua multa é de R$" + m)
}