function contador(x,y,i) {
    for (cont = x; cont <= y; cont += i){
        console.log(cont)
    };
}

let x = parseInt(prompt("digite o número de início da contagem:"))
let y = parseInt(prompt("digite o fim da contagem: "))
let i = parseInt(prompt("digite o incremento dessa contagem: "))

contador(x,y,i)