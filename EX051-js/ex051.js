let cont = 1
let maxV = 0
let minV = Number.MAX_VALUE
while (cont <= 8) {
    let x = parseFloat(prompt(`digite o valor do ${cont}° produto:`))
    console.log(x)
    cont = cont + 1
    if (x < minV) {
        minV = x
    }
    if (x > maxV) {
        maxV = x
    }
}
console.log(`o maior número é ${maxV} e o menor é ${minV}`)