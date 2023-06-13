function maior(a,b) {
    if (a > b) {
        console.log(`${a} é maior que ${b}`)
    } else {
        if (b > a) {
            console.log(`${b} é maior que ${a}`)
        } else {
            console.log("os números são iguais")
        }
    }
}

let a = parseInt(prompt("digite o primeiro número: "))
let b = parseInt(prompt("digite o segundo número: "))

maior(a,b)