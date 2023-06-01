let lar = parseFloat(prompt("digite a largura do seu terreno:"))
let comp = parseFloat(prompt("digite o comprimento do seu terreno:"))
let area = lar*comp
if (area<100) {
    console.log("seu terreno é um terreno popular")
} else if((area>=100)&&(area<=500) ){
    console.log("seu terreno é um terreno master")
}else {
    console.log("seu terreno é um terreno VIP")
}