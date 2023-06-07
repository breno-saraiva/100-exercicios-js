let totalHomens = 0
let totalMulheres = 0
let somaPesoHomens = 0
let somaPesoMulheres = 0

for (let i = 1; i <= 8; i++) {
  let sexo = prompt("Digite o sexo (M ou F) da pessoa " + i + ":")
  let peso = parseFloat(prompt("Digite o peso (em kg) da pessoa " + i + ":"))

  if (sexo.toUpperCase() === "M") {
    totalHomens++
    somaPesoHomens += peso;
  } else if (sexo.toUpperCase() === "F") {
    totalMulheres++
    somaPesoMulheres += peso
  } else {
    alert("Sexo inválido! Digite M ou F.")
    i-- // subtrair o contador para repetir a leitura para a mesma pessoa
  }
}

console.log("Total de homens: " + totalHomens)
console.log("Total de mulheres: " + totalMulheres)
console.log("Média de peso dos homens: " + (somaPesoHomens / totalHomens).toFixed(2))
console.log("Média de peso das mulheres: " + (somaPesoMulheres / totalMulheres).toFixed(2))