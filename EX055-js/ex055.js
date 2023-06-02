let x = Math.floor(Math.random() *5)
let cont = 1

while (cont <= 4) {
    let y = parseInt(prompt("escolha um numero de 1 a 5!"))
    if (x === y){
        console.log("você acertou o número")
        cont = cont + 4
    }else {
        console.log("voce errou o número, tente novamente")
        cont++
    }
}