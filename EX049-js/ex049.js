let cont = 1
let p = 0
let i = 0

while (cont <= 6) {
    let n = parseInt(prompt("digite o número: "))
    if (n%2 === 0) {
        p = p + 1
    } else {
        i = i + 1
    }
}
console.log(`dos números digitados ${p} são pares e ${i} são ímpares`)