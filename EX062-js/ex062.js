let cont = 0
let fim = 0
let S = 0
let Q = 0

do {
  cont++
  console.log("Digite a idade da " + cont + "ª pessoa")
  const I = parseInt(prompt())

  S += I

  if (I >= 21) {
    Q++;
  }

  console.log("[0]. Sim")
  console.log("[1]. Não")
  console.log("Deseja continuar?: ")
  fim = parseInt(prompt())

  console.clear()
} while (fim !== 1)

console.log("A pesquisa teve " + cont + " pessoas.")
console.log("A média das idades contabilizadas foi de: " + S / cont)
console.log("O número de pessoas com mais de 21 anos é de: " + Q)
