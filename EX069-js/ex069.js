let n1 = parseInt(prompt("digite o primeiro número da contagem: "))
let n2 = parseInt(prompt("digite o último número da contagem: "))
let i = parseInt(prompt("digite o incremento: "))

for (x = n1; x <= n2; x = x + i) {
    console.log(x)
}