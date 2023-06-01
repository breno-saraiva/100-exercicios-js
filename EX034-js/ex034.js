let M = parseFloat(prompt("escreva sua massa(Kg):"))
let A = parseFloat(prompt("escreva sua altura(m):"))
let imc = M/(A^2)

if (imc < 17) {
    console.log("muito abaixo do peso")
} else {
    if ((imc >= 17) && (imc < 18.5)) {
        console.log("está abaixo do peso")
    } else {
        if ((imc >= 18.5) && (imc <25)) {
            console.log("está com o peso ideal")
        } else {
            if ((imc >= 25) && (imc < 30)) {
                console.log("está com sobrepeso")
            } else {
                if ((imc >= 30) && (imc < 35)) {
                    console.log("Está no estado de obesidade")
                } else {
                    if ((imc >= 35) && (imc <40)) {
                        console.log("Está num estado de obesidade severa")
                    } else {
                        console.log("Está em estado de obesidade mórbida")
                    }
                }
            }
        }
    }
}