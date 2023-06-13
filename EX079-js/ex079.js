var numeros = [];

for (var i = 0; i < 11; i++) {
  var numero = parseInt(prompt("Digite um número:"));
  numeros.push(numero);
}

console.log("Vetor completo:");
console.log(numeros);

console.log("Posições dos números pares:");
for (var i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    console.log("Posição " + i + ": " + numeros[i]);
  }
}
