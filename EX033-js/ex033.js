let casa = parseFloat(prompt("qual o valor da casa?"))
let sal = parseFloat(prompt("qual o seu salário?"))
let ano = parseInt(prompt("quantos anos você precisa para pagar?"))
let p = casa/(12*sal)

if (p <= sal*0.3) {
    console.log("Seu empréstimo foi aprovado")
}else {
    console.log("Seu empréstimo não foi aprovado!")
}
