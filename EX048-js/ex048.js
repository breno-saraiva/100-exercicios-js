let s = 0
let cont = 1

while (cont <= 7) {
    let n = parseInt(prompt("digite um número inteiro:"))
    cont = cont + 1
    s = s + n 
}
console.log(`a soma dos números digitados é ${s}`)