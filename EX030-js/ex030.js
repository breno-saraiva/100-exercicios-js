let x = parseFloat(prompt("digite o valor do primeiro segmento de reta"))
let y = parseFloat(prompt("digite o valor do segundo segmento de reta"))
let z = parseFloat(prompt("digite o valor do terceiro segmento de reta"))
if((x<y+z)&&(y<x+z)&&(z<x+y)){
    console.log("é possível formar um triângulo com esses segmentos de reta!")
    if ((x===z)&&(x===y)) {
        console.log("o triângulo é equilátero")
    } else if(((x===y)&&(x=!z))||((x===z)&&(x=!y))||((y===z)&&(y=!x))){
        console.log("o triângulo é isóceles")
    }else{
        console.log("o triângulo é escaleno")
    }
}else{
    console.log("não é possível formar um triângulo com esses segmentos de reta!")
}